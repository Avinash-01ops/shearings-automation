import { test, expect, Page } from '@playwright/test';
import { getText, isEnabled, isVisible, getTextAndCompare } from '../pages/Helper_Functions';

// Verify Home Page header elements
test('Verify Home Page header elements', async ({ page }) => {
    const logo = '//*[@id="top"]/div[4]/a';
    const homePageButton = '//*[@id="top"]/div[6]/nav/div/ul/li[1]/a';

    // Step 1: Open the homepage
    await page.goto('https://www.shearings.com/');

    // Step 2: Check Logo
    if (await isVisible(page, logo)) {
        await isEnabled(page, logo);
        console.log('Logo is visible and clickable');
    } else {
        console.log('Logo missing');
    }

    // Step 2: Check Home Page Button
    if (await isVisible(page, homePageButton)) {
        await isEnabled(page, homePageButton);
        console.log('Home Page Button is visible and clickable');
    } else {
        console.log('Home Page Button missing');
    }

    // Step 3: Check Brochure Request, Opening Times, My Booking and Agent Login buttons
    for (let i = 1; i <= 4; i++) {
        const button = `//*[@id="top"]/div[1]/div/ul/li[${i}]/a`;
        if (await isVisible(page, button)) {
            await isEnabled(page, button);
            console.log(`Button ${i} is visible and clickable`);
        } else {
            console.log(`Button ${i} missing`);
        }
    }

    // Step 4: Check Destinations, Holidays, Useful Info and Search Page
    for (let i = 2; i <= 5; i++) {
        const tab = `//*[@id="top"]/div[6]/nav/div/ul/li[${i}]/button`;
        if (await isVisible(page, tab)) {
            await isEnabled(page, tab);
            console.log(`Page ${i} is visible and clickable`);
        } else {
            console.log(`Page ${i} missing`);
        }
    }

    // Step 5: Check Coach Holidays, Self Drive Holidays and River Cruise Search Tabs
    for (let i = 1; i <= 3; i++) {
        const search = `//*[@id="elasticSearchFiltersTabs"]/li[${i}]/a`;
        if (await isVisible(page, search)) {
            await isEnabled(page, search);
            console.log(`Search ${i} is visible and clickable`);
        } else {
            console.log(`Search ${i} missing`);
        }
    }

    // Base XPath for banners and the "Next" button
    const bannerBaseXPath = '//*[@id="top"]/div[2]/div/div[2]/div/div/div';
    const bannerTextXPathSuffix = '/div/div/div/div/a';
    const nextButtonXPath = '//*[@id="top"]/div[2]/div/div[1]/button[2]';

    // Step 6: Check cover
    await isVisible(page, '/html/body/section[1]/div[4]');
    await isVisible(page, '/html/body/section[1]/div[5]');
    // Confirm if oneEuro XPath contains an image
    const oneEuro = '/html/body/section[1]/div[6]/div';
    const hasImage = await page.locator(`xpath=${oneEuro}//img`).first().isVisible();  
    console.log(`Does ${oneEuro} contain an image? ${hasImage}`);

    // Step 7: Verify hassle-free promise banner
    const h_banner = 'xpath=/html/body/section[1]/div[8]/div/div';
    const h_banner_image = '/html/body/section[1]/div[8]/div/div/div/img';
    const h_banner_title = '/html/body/section[1]/div[8]/div/div/div/h6';
    if (await page.isVisible(h_banner)) {
        await isVisible(page, h_banner_image);
        await isVisible(page, h_banner_title);
        for (let i = 1; i <= 3; i++) {
            const desc = `/html/body/section[1]/div[8]/div/div/div/ul/li[${i}]/text()`;
            await isVisible(page, desc);
        }
    } else {
        console.log(`hassle-free promise banner not visible`);
    }
    console.log(`hassle-free promise banner verified`);
    
    // Step 8: Verify Craving a getaway? section
    if (await isVisible(page, '/html/body/section[2]/div/div/div/p')) {
        await getTextAndCompare(page, '/html/body/section[2]/div/div/div/p/span[1]', 'Craving a getaway?');
        await getTextAndCompare(page, '/html/body/section[2]/div/div/div/p/span[2]', 'Satisfy your appetite with a last-minute holiday!');
        await isVisible(page, '/html/body/section[2]/div/div/div/a');
        console.log(`Craving a getaway? section verified`);
    } else {
        console.log(`Craving a getaway? section missing`);
    }
});
