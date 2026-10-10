import Script from 'next/script';

const DEFAULT_GA_ID = 'G-M7WKDLH3T1';
const DEFAULT_CLARITY_ID = 'wvfah46m8a';
const DEFAULT_APOLLO_APP_ID = '69296e5a357c820019e56ac6';

export default function AnalyticsScripts() {
  // Analytics only run on the approved public deployment, so staging traffic never pollutes production data.
  const enabled = process.env.SITE_INDEXING_ENABLED === 'true' || process.env.ANALYTICS_ENABLED === 'true';
  if (!enabled) return null;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || DEFAULT_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || DEFAULT_CLARITY_ID;
  const apolloId = process.env.NEXT_PUBLIC_APOLLO_APP_ID || DEFAULT_APOLLO_APP_ID;

  // Without GTM, dataLayer events pushed by the site are forwarded to GA4 as gtag events.
  const gaBridge = `window.dataLayer=window.dataLayer||[];var dl=window.dataLayer,orig=dl.push.bind(dl);function gtag(){dl.push(arguments);}window.gtag=gtag;dl.push=function(){for(var i=0;i<arguments.length;i++){var a=arguments[i];if(a&&Object.prototype.toString.call(a)==='[object Object]'&&typeof a.event==='string'&&a.event.indexOf('gtm.')!==0){var p={};for(var k in a){if(k!=='event')p[k]=a[k];}gtag('event',a.event,p);}else{orig(a);}}return dl.length;};gtag('js',new Date());gtag('config','${gaId}',{send_page_view:false});`;

  return <>
    {gtmId && <Script id="gtm-init" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script>}
    {!gtmId && gaId && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive"/><Script id="ga-init" strategy="afterInteractive">{gaBridge}</Script></>}
    {clarityId && <Script id="clarity-init" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`}</Script>}
    {apolloId && <Script id="apollo-tracker" strategy="lazyOnload">{`(function(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;o.async=true;o.defer=true;o.onload=function(){window.trackingFunctions.onLoad({appId:"${apolloId}"})};document.head.appendChild(o);})();`}</Script>}
  </>;
}
