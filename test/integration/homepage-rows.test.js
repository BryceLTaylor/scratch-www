/*
 * Checks that the some of the homepage rows on the homepage are displayed and
 * contents have the right URLs to redirect to
 */

const SeleniumHelper = require('./selenium-helpers.js');

const {
    buildDriver,
    findByXpath
} = new SeleniumHelper();

let remote = process.env.SMOKE_REMOTE || false;
let rootUrl = process.env.ROOT_URL || 'https://scratch.ly';

if (remote){
    jest.setTimeout(60000);
} else {
    jest.setTimeout(20000);
}

let driver;

describe('www-integration homepage project rows', () => {
    beforeAll(async () => {
        driver = await buildDriver('www-integration project-page signed out');
        await driver.get(rootUrl);
    });

    afterAll(async () => await driver.quit());

    // checks that the title of the first row is Featured Projects
    test('featured projects row title when signed out', async () => {
        let xPathLink = '//div[@class="box"]/div[@class="box-header"]/h4';
        let expectedText = 'Featured Projects';
        let titleElement = await findByXpath(xPathLink);
        let title = await titleElement.getText();
        await expect(title).toEqual(expectedText);
    });

    // checks that the link for a project makes sense
    test('featured project row link when signed out', async () =>{
        var xPathLink = '//div[contains(@class, "thumbnail") ' +
            'and contains(@class, "project") and contains(@class, "slick-slide") ' +
            'and contains(@class, "slick-active")]/a[@class="thumbnail-image"]';
        var expectedUrlRegExp = await new RegExp('/projects/.*[0-9].*/?');
        let linkElement = await findByXpath(xPathLink);
        let url = await linkElement.getAttribute('href');
        await expect(url).toMatch(expectedUrlRegExp);
    });

    // checks that the title of the 2nd row is Featured Studios
    test('featured studios row title when signed out', async () => {
        let xPathLink = '//div[@class="box"][2]/div[@class="box-header"]/h4';
        let expectedText = 'Featured Studios';
        let titleElement = await findByXpath(xPathLink);
        let title = await titleElement.getText();
        await expect(title).toEqual(expectedText);
    });

    // checks that the link for a studio makes sense
    test('featured project row link when signed out', async () =>{
        var xPathLink = '//div[contains(@class, "thumbnail") and contains(@class, "gallery") ' +
            'and contains(@class, "slick-slide") ' +
            'and contains(@class, "slick-active")]/a[@class="thumbnail-image"]';
        var expectedUrlRegExp = await new RegExp('/studios/.*[0-9].*/?');
        let linkElement = await findByXpath(xPathLink);
        let url = await linkElement.getAttribute('href');
        await expect(url).toMatch(expectedUrlRegExp);
    });
});
