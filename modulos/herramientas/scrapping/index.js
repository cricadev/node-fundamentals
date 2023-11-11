import puppeteer from "puppeteer";

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto(
      "https://platzi.com/new-home/clases/1759-fundamentos-node/25214-scraping/"
    );

    let title1 = await page.evaluate(() => {
      const comments = document.querySelectorAll("Comment_Comment__pyWmK");
      comments.forEach((comment) => console.log(comment));
      return comments;
    });
    console.log(title1);
    console.log("Browser openned");
    browser.close();

    console.log("Browser closed");
  } catch (error) {
    console.error(error);
  }
})();
