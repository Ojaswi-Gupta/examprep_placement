const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.toString()));
  await page.goto('http://localhost:9000');
  
  // click interview prep
  console.log("Clicking Interview Prep...");
  await page.click('a[data-view="view-interview"]');
  await page.waitForTimeout(500);
  
  // check if active
  const isActive = await page.$eval('#view-interview', el => el.classList.contains('active-view'));
  console.log("Is view-interview active?", isActive);
  
  await browser.close();
})();
