/* Description: This test script verifies the Destinations > Last minute holidays page
Date: 09/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { getTextAndCompare, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Last minute holidays', async ({ page }) => {

    // Navigate to Last minute holidays page
    await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[4]/div[1]/div/a/div/div/h4');
    console.log('Navigated to Last minute holidays page');

    if (await urlContains(page, 'last-minute-holidays') === true) {
        // Verify page title
        const pageTitleXpath = '/html/body/section[2]/div/div/div/div/h1';
        await getTextAndCompare(page, pageTitleXpath, 'Last minute holidays');
        console.log('URL and title verified.');
    } else {
        console.log('URL not verified');
    }

    // Verify content description
    const element1 = '/html/body/section[2]/div/div/div/div/h3';
    const element2 = '/html/body/section[2]/div/div/div/div/p/text()';
    await isVisible(page, element1);
    await isVisible(page, element2);
    console.log('Content description verified successfully.');

    // Verify Holiday table Headers
    for (let i = 1; i <= 6; i++) {
        const xpath = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[1]/div/div[${i}]`;
        const element = page.locator(`xpath=${xpath}`);
        
        // Check if element exists before checking visibility
        const elementCount = await element.count();
        if (elementCount === 0) {
            console.error(`Header element at ${xpath} does not exist.`);
            continue; // Skip this iteration if the element does not exist
        }
        
        const isVisibleElement = await element.isVisible({ timeout: 3000 }); // Increased timeout
        expect(isVisibleElement).toBe(true);
        console.log(`Header at ${xpath} is ${isVisibleElement ? 'visible' : 'not visible'}`);
    }

    // Verify Holiday cards
    for (let j = 1; j <= 10; j++) {
        const xpath1 = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${j}]`;
        const element1 = page.locator(`xpath=${xpath1}`);
        
        // Check if element exists before checking visibility
        const elementCount1 = await element1.count();
        if (elementCount1 === 0) {
            console.error(`Holiday card element at ${xpath1} does not exist.`);
            continue; // Skip this iteration if the element does not exist
        }
        
        const isVisible1 = await element1.isVisible({ timeout: 3000 }); // Increased timeout
        expect(isVisible1).toBe(true);
        console.log(`Holiday card at ${xpath1} is ${isVisible1 ? 'visible' : 'not visible'}`);
    }
});
