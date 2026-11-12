const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1300, height: 1800 }, deviceScaleFactor: 2 });
  await p.goto('file://' + __dirname + '/mocks.html');
  await p.evaluate(() => document.fonts.ready);
  const out = process.argv[2];
  for (const el of await p.$$('.screen')) {
    const id = await el.getAttribute('id');
    await el.screenshot({ path: `${out}/${id}.png` });
    console.log(id);
  }
  await b.close();
})();
