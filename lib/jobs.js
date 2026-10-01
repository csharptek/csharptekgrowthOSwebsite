import { Pool } from 'pg';

let pool;

function getPool() {
  if (!process.env.DATABASE_URL) throw new Error('CAREERS_DATABASE_NOT_CONFIGURED');
  if (!pool) {
    const remote = !/localhost|127\.0\.0\.1/i.test(process.env.DATABASE_URL);
    pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: remote ? { rejectUnauthorized: false } : false, max: 5, idleTimeoutMillis: 30000, connectionTimeoutMillis: 5000 });
  }
  return pool;
}

function clean(value = '') {
  return String(value)
    .replace(/\\u003C/gi, '<').replace(/\\u003E/gi, '>').replace(/\\u0026/gi, '&').replace(/\\u0022/gi, '"')
    .replace(/<\/p>/gi, '\n').replace(/<\/li>/gi, '\n').replace(/<li>/gi, '• ').replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&nbsp;/gi, ' ').replace(/&#39;/gi, "'")
    .replace(/\n{3,}/g, '\n\n').trim();
}

export async function getJobs() {
  const { rows } = await getPool().query(`
    SELECT job_id AS "jobId", job_title AS "jobTitle", job_summary AS "jobSummary",
      key_responsibility AS "keyResponsibility", required_skills_qualifications AS "requiredSkills",
      preferred_skills AS "preferredSkills", key_skills AS "keySkills", location, experience,
      created_on AS "createdOn"
    FROM job_post WHERE is_deleted = false AND status = true ORDER BY created_on DESC
  `);
  return rows.map((job) => ({ ...job, jobSummary: clean(job.jobSummary), keyResponsibility: clean(job.keyResponsibility), requiredSkills: clean(job.requiredSkills), preferredSkills: clean(job.preferredSkills) }));
}

export async function getJobById(id) {
  const jobs = await getJobs();
  return jobs.find((job) => String(job.jobId) === String(id)) || null;
}
