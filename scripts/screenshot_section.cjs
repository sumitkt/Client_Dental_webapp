const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  const url = process.argv[2] || 'http://localhost:5000';
  const outDir = 'screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    const devices = puppeteer.devices || {};
    const iPhone = devices['iPhone 12'] || { viewport: { width: 390, height: 844, deviceScaleFactor: 3 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit' };
    await page.emulate(iPhone);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 500));

    const el = await page.$('#appointment');
    if (!el) {
      console.error('Appointment section (#appointment) not found');
      process.exitCode = 2;
      return;
    }
    const box = await el.boundingBox();
    if (!box) {
      console.error('Could not get bounding box for #appointment');
      process.exitCode = 3;
      return;
    }

    // Expand a bit vertically for padding
    const padding = 20;
    const clip = {
      x: Math.max(0, box.x - padding),
      y: Math.max(0, box.y - padding),
      width: Math.min(page.viewport().width, box.width + padding * 2),
      height: box.height + padding * 2,
    };

    const outPath = `${outDir}/appointment_section_mobile.png`;
    await page.screenshot({ path: outPath, clip });
    console.log('Saved:', outPath);
  } catch (err) {
    console.error('Error:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();