/**
 * Reminder to refresh sitemap in Search Console (HTTP ping endpoints are deprecated).
 */
const SITE = (process.env.VITE_SITE_URL ?? 'https://www.roseng.org').replace(/\/$/, '')
const sitemapUrl = `${SITE}/sitemap.xml`

console.log(`Sitemap: ${sitemapUrl}`)
console.log('')
console.log('Re-submit in Google Search Console → Sitemaps after each production deploy.')
console.log('Request indexing for key URLs: see docs/Search_Indexing_Runbook.md')
