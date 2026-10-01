const fs = require('node:fs/promises');
const path = require('node:path');
const { existsSync } = require('node:fs');

function loadPlaywright() {
  const candidates = [process.env.PLAYWRIGHT_MODULE, 'playwright'].filter(Boolean);
  if (process.platform === 'win32' && process.env.USERPROFILE) {
    candidates.push(path.join(
      process.env.USERPROFILE,
      '.cache', 'codex-runtimes', 'codex-primary-runtime', 'dependencies', 'node', 'node_modules', 'playwright',
    ));
  }
  for (const candidate of candidates) {
    try { return require(candidate); } catch { /* Try the next installed Playwright location. */ }
  }
  throw new Error('Playwright was not found. Set PLAYWRIGHT_MODULE or install Playwright for local review captures.');
}

function option(name, fallback) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function safeVersion(value) {
  const safe = value.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/^-+|-+$/g, '');
  if (!safe) throw new Error('Provide a version containing letters, numbers, dots, underscores, or hyphens.');
  return safe;
}

function captureStamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

async function promoteLatestCapture(reviewRoot, outputFolder, version) {
  const obsoleteRoot = path.join(reviewRoot, 'obsolete');
  await fs.mkdir(obsoleteRoot, { recursive: true });
  const entries = await fs.readdir(reviewRoot, { withFileTypes: true });
  const stamp = captureStamp();
  let oldRootFiles;

  for (const entry of entries) {
    if (entry.name === 'obsolete' || entry.name === version) continue;
    const source = path.join(reviewRoot, entry.name);
    if (entry.isDirectory()) {
      let destination = path.join(obsoleteRoot, entry.name);
      if (existsSync(destination)) destination = path.join(obsoleteRoot, `${entry.name}-${stamp}`);
      await fs.rename(source, destination);
    } else {
      oldRootFiles ||= path.join(obsoleteRoot, `previous-current-${stamp}`);
      await fs.mkdir(oldRootFiles, { recursive: true });
      await fs.rename(source, path.join(oldRootFiles, entry.name));
    }
  }

  for (const entry of await fs.readdir(outputFolder, { withFileTypes: true })) {
    if (entry.isFile()) await fs.copyFile(path.join(outputFolder, entry.name), path.join(reviewRoot, entry.name));
  }
}

async function waitForRender(page) {
  await page.locator('body').waitFor({ state: 'visible', timeout: 30000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    const height = document.documentElement.scrollHeight;
    for (let y = 0; y < height; y += Math.max(500, window.innerHeight * 0.8)) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(300);
}

async function capturePage(context, requestedUrl, screenshotPath) {
  const page = await context.newPage();
  try {
    const response = await page.goto(requestedUrl, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await waitForRender(page);
    await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
    return {
      requestedUrl,
      finalUrl: page.url(),
      httpStatus: response?.status() ?? null,
      title: await page.title(),
      h1: await page.locator('h1').first().textContent().catch(() => null),
      screenshotFile: path.basename(screenshotPath),
      documentHeight: await page.evaluate(() => document.documentElement.scrollHeight),
    };
  } finally {
    await page.close();
  }
}

async function main() {
  const baseUrl = option('base-url', 'https://growthos.csharptek.com').replace(/\/$/, '');
  const parsedBaseUrl = new URL(baseUrl);
  const loopbackHosts = new Set(['localhost', '127.0.0.1', '[::1]']);
  const localPreview = parsedBaseUrl.protocol === 'http:' && loopbackHosts.has(parsedBaseUrl.hostname);
  if (parsedBaseUrl.protocol !== 'https:' && !localPreview) {
    throw new Error('Use an HTTPS deployment URL or an HTTP loopback address for local review captures.');
  }

  const version = safeVersion(option('version', new Date().toISOString().replace(/[:.]/g, '-')));
  const root = path.resolve(__dirname, '..');
  const reviewRoot = path.join(root, 'website-review');
  const outputFolder = path.join(reviewRoot, version);
  await fs.mkdir(outputFolder, { recursive: true });

  const { chromium } = loadPlaywright();
  const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const browser = await chromium.launch({
    headless: true,
    ...(process.platform === 'win32' && existsSync(chromePath) ? { executablePath: chromePath } : {}),
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const routes = [
    { name: 'ai-production-engineering', route: '/solutions/ai-production-engineering' },
    { name: 'ai-product-engineering', route: '/solutions/ai-product-engineering' },
    { name: 'intelligent-workflow-automation', route: '/solutions/intelligent-workflow-automation' },
    { name: 'application-cloud-modernization', route: '/azure-app-modernization-services' },
    { name: 'healthcare-ai-automation', route: '/solutions/healthcare-ai-automation' },
    { name: 'microsoft-marketplace-engineering', route: '/services/marketplace' },
  ];
  const manifest = [];

  try {
    const homepage = await context.newPage();
    try {
      const response = await homepage.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded', timeout: 90000 });
      await waitForRender(homepage);
      const html = await homepage.evaluate(() => document.documentElement.outerHTML);
      await fs.writeFile(path.join(outputFolder, 'homepage.html'), html, 'utf8');
      await homepage.screenshot({ path: path.join(outputFolder, 'homepage-fullpage.png'), fullPage: true, animations: 'disabled' });
      manifest.push({
        name: 'homepage',
        requestedUrl: `${baseUrl}/`,
        finalUrl: homepage.url(),
        httpStatus: response?.status() ?? null,
        title: await homepage.title(),
        h1: await homepage.locator('h1').first().textContent().catch(() => null),
        htmlFile: 'homepage.html',
        screenshotFile: 'homepage-fullpage.png',
        documentHeight: await homepage.evaluate(() => document.documentElement.scrollHeight),
      });
    } finally {
      await homepage.close();
    }

    for (const item of routes) {
      manifest.push({
        name: item.name,
        ...await capturePage(context, `${baseUrl}${item.route}`, path.join(outputFolder, `${item.name}.png`)),
      });
    }

    await fs.writeFile(path.join(outputFolder, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
    await fs.writeFile(path.join(outputFolder, 'README.txt'), [
      'Csharptek Growth OS website review capture',
      `Version: ${version}`,
      `Captured: ${new Date().toISOString()}`,
      `Base URL: ${baseUrl}`,
      'Browser: Chromium with Playwright',
      'The homepage DOM is saved after browser rendering and font loading.',
      'All screenshots are full-page captures at a 1440px viewport width.',
      'See manifest.json for URLs, page titles, headings, and HTTP statuses.',
      '',
    ].join('\n'), 'utf8');

    if (manifest.some((item) => item.httpStatus !== 200)) {
      console.warn('One or more pages did not return HTTP 200; see manifest.json.');
    }
    await browser.close();
    await promoteLatestCapture(reviewRoot, outputFolder, version);
    console.log(JSON.stringify({ version, outputFolder, reviewRoot, pages: manifest }, null, 2));
  } catch (error) {
    await browser.close().catch(() => {});
    throw error;
  }
}

main().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
