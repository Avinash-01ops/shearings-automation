import { test, expect, Page } from '@playwright/test';
import { getText, isEnabled, isVisible, getTextAndCompare } from '../pages/Helper_Functions';

// Verify Home Page header elements
test('Verify Home Page header elements', async ({ page }: { page: Page }) => {
    const logo = '//*[@id="top"]/div[4]/a';
    const homePageButton = '//*[@id="top"]/div[6]/nav/div/ul/li[1]/a';

    // Step 1: Open the homepage
    await page.goto('https://www.shearings.com/');

    // Step 2: Check Logo visibility and interactivity
    if (await isVisible(page, logo)) {
        await isEnabled(page, logo);
        console.log('Logo is visible and clickable');
    } else {
        console.log('Logo missing');
    }

    // Step 3: Check Home Page Button visibility and interactivity
    if (await isVisible(page, homePageButton)) {
        await isEnabled(page, homePageButton);
        console.log('Home Page Button is visible and clickable');
    } else {
        console.log('Home Page Button missing');
    }

    // Step 4: Verify Brochure Request, Opening Times, My Booking, and Agent Login buttons
    for (let i = 1; i <= 4; i++) {
        const buttonXPath = `//*[@id="top"]/div[1]/div/ul/li[${i}]/a`;
        await checkVisibilityAndInteractivity(page, buttonXPath, `Button ${i}`);
    }

    // Step 5: Verify Destinations, Holidays, Useful Info, and Search Pages
    for (let i = 2; i <= 5; i++) {
        const tabXPath = `//*[@id="top"]/div[6]/nav/div/ul/li[${i}]/button`;
        await checkVisibilityAndInteractivity(page, tabXPath, `Page ${i}`);
    }

    // Step 6: Verify Coach Holidays, Self Drive Holidays, and River Cruise Search Tabs
    for (let i = 1; i <= 3; i++) {
        const searchXPath = `//*[@id="elasticSearchFiltersTabs"]/li[${i}]/a`;
        await checkVisibilityAndInteractivity(page, searchXPath, `Search ${i}`);
    }

    // Step 7: Check for visibility of Cover and associated banners
    const oneEuro = '/html/body/section[1]/div[6]/div';
    const hasImage = await page.locator(`xpath=${oneEuro}//img`).first().isVisible();  
    console.log(`Does ${oneEuro} contain an image? ${hasImage}`);

    // Step 8: Verify hassle-free promise banner visibility
    const hBannerXPath = 'xpath=/html/body/section[1]/div[8]/div/div';
    await checkVisibilityAndInteractivity(page, hBannerXPath, 'Hassle-free promise banner');

    // Step 9: Verify "Craving a getaway?" section visibility and text
    const cravingSectionXPath = '/html/body/section[2]/div/div/div/p';
    if (await isVisible(page, cravingSectionXPath)) {
        await getTextAndCompare(page, '/html/body/section[2]/div/div/div/p/span[1]', 'Craving a getaway?');
        await getTextAndCompare(page, '/html/body/section[2]/div/div/div/p/span[2]', 'Satisfy your appetite with a last-minute holiday!');
        await isVisible(page, '/html/body/section[2]/div/div/div/a');
        console.log('Craving a getaway? section verified');
    } else {
        console.log('Craving a getaway? section missing');
    }
});

// Helper function for checking visibility and interactivity
async function checkVisibilityAndInteractivity(page: Page, elementXPath: string, elementName: string) {
    if (await isVisible(page, elementXPath)) {
        await isEnabled(page, elementXPath);
        console.log(`${elementName} is visible and clickable`);
    } else {
        console.log(`${elementName} missing`);
    }
}
