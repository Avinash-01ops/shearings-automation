/* Description: This test script verifies the Destinations > Discover all Destinations page
Date: 09/01/2025
Created by: Avi */

import { test, expect, Page } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { getTextAndCompare, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Destinations > Discover all Destinations', async ({ page }: { page: Page }) => {
    // Navigate to Destinations > Discover all Destinations page
    await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[1]/div[2]/a');
    console.log('Navigated to Destinations > Discover all Destinations page');

    // Verify URL and Page Title
    expect(await urlContains(page, 'all-destinations')).toBe(true);
    console.log('Correct URL verified.');

    const pageTitleXpath = '/html/body/section[2]/div/div/div[1]/h1';
    await getTextAndCompare(page, pageTitleXpath, 'Destinations for your wish-list');
    console.log('Correct page. Title verified.');

    // Verify page content
    const desc1 = '/html/body/section[2]/div/div/div[1]/h3';
    const desc2 = '/html/body/section[2]/div/div/div[1]/p/text()';
    const desc3 = '//*[@id="destinations"]/section/div/div/div[1]/h2';
    const desc4 = '//*[@id="destinations"]/section/div/div/div[1]/p/text()';
    await isVisible(page, desc1);
    await isVisible(page, desc2);
    await isVisible(page, desc3);
    await isVisible(page, desc4);
    console.log('Page content verified.');

    // Verify Holiday cards
    for (let i = 1; i <= 15; i++) {
        const xpath: string = `//*[@id="destinations"]/section/div/div/div[2]/div/div[${i}]`;
        const element = page.locator(`xpath=${xpath}`);
        expect(await element.isVisible({ timeout: 1000 })).toBe(true);
        if (await element.isVisible({ timeout: 1000 }) === true) {
            console.log(`Element at ${xpath} is visible`);
        } else {
            console.log(`Element at ${xpath} is not visible`);
        }
    }
});
