const puppeteer = require('puppeteer');
(async()=>{
  const url = process.argv[2] || 'http://localhost:5000';
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const results = await page.evaluate(()=>{
    const overflow = [];
    const vw = document.documentElement.clientWidth;
    const all = Array.from(document.querySelectorAll('body *'));
    all.forEach((el)=>{
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1 || r.left < -1) {
        let desc = el.tagName.toLowerCase();
        if (el.id) desc += `#${el.id}`;
        if (el.className) desc += `.${(typeof el.className==='string'?el.className.replace(/\s+/g,'.'):'')}`;
        overflow.push({desc, left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width)});
      }
    });
    return {vw, overflow};
  });
  console.log(JSON.stringify(results,null,2));
  await browser.close();
})();