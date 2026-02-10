const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const url = process.argv[2] || 'http://localhost:5000';
  const outDir = 'screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();

    // iPhone 12 emulation
    const iPhone = puppeteer.devices['iPhone 12'] || { viewport: { width: 390, height: 844, deviceScaleFactor: 3 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit' };

    // Home page
    await page.emulate(iPhone);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${outDir}/home_mobile.png`, fullPage: false });

    // Contact page
    await page.goto(url + '/contact', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${outDir}/contact_mobile.png`, fullPage: false });

    console.log('Screenshots saved to', outDir);
  } catch (err) {
    console.error('Error capturing screenshots:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
