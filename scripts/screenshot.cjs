const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const url = process.argv[2] || 'http://localhost:5000';
  const outDir = 'screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const full = process.argv[3] === 'full';

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();

    // iPhone 12 emulation
    const devices = puppeteer.devices || {};
    const iPhone = devices['iPhone 12'] || { viewport: { width: 390, height: 844, deviceScaleFactor: 3 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit' };

    // Desktop viewport (1920x1080)
    const desktop = { viewport: { width: 1920, height: 1080, deviceScaleFactor: 1 } };

    // Desktop Home
    await page.setViewport(desktop.viewport);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 500));
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${outDir}/home_desktop_footer.png`, fullPage: false });

    // Desktop Services
    await page.goto(url + '/services', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 500));
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${outDir}/services_desktop_footer.png`, fullPage: false });

    // Desktop Contact full page
    await page.goto(url + '/contact', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${outDir}/contact_desktop_full.png`, fullPage: true });

    // Mobile Home
    await page.emulate(iPhone);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${outDir}/home_mobile${full ? '_full' : ''}.png`, fullPage: !!full });

    // Ready to Transform section
    await page.evaluate(() => {
      const el = document.querySelector('[id="appointment"]');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${outDir}/ready_to_transform_mobile.png`, fullPage: false });

    // Contact page
    await page.goto(url + '/contact', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${outDir}/contact_mobile.png`, fullPage: false });

    console.log('Screenshots saved to', outDir);
  } catch (err) {
    console.error('Error capturing screenshots:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
