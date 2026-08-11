const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERROR:', err.toString()));
  
  await page.goto('http://localhost:9000', { waitUntil: 'networkidle0' });
  
  console.log("Page loaded. Clicking Quiz...");
  await page.click('a[data-view="quiz-section"]');
  await page.waitForTimeout(500);
  
  const html = await page.evaluate(() => document.body.innerHTML);
  const activeViews = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.active-view')).map(el => el.id);
  });
  console.log("Active views:", activeViews);
  
  await browser.close();
})();
