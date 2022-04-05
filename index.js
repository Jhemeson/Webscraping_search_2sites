const { all } = require('express/lib/application');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const pagewing = 'https://www.pngwing.com/';
    const pageegg = 'https://www.pngegg.com/';
    await Promise.all([
        browser.newPage(),
    ]);

    let pages = await browser.pages();
    await pages[0].goto(pagewing, { waitUntil: 'load', timeout: 0 });
    await pages[0].click('input[type="search"]');
    await pages[0].type('#portal_input', "zelda");
    await pages[0].click('#portal_sub');


    await pages[1].goto(pageegg, { waitUntil: 'load', timeout: 0 });
    await pages[1].click('input[type="search"]');
    await pages[1].type('#portal_input', "zelda");
    await pages[1].click('#portal_sub');











    // const page = await browser.newPage()
    // await page.goto("https://www.pngwing.com/", {waitUntil: 'networkidle2'});
    // await page.keyboard.press("Enter");
    // await page.type("#username", "zelda", { delay: 100 });
    // await page.type("#password", "123", { delay: 100 });
    // await page.screenshot({ path: " " });      screenshot da parte do site
    // const grabSpace = await page.evaluate(() => {
    //     await page.click('')
    //     const space = document.querySelector("")
    //     return space.insertAdjacentText;      Buscar um texto
    // });

    // await browser.close();
}) ();