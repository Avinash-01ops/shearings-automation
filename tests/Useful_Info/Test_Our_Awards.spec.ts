/* Description: This test script is created to test the Our Awards page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Our Awards', async ({ page }) => {

    // Navigate to Our Awards page
    await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[10]/a/span');
    await urlContains(page, 'about-us');
    console.log('Navigated to Our Awards page');

    // Verify page title
    const pageTitleXpath = '/html/body/section[2]/div/div[2]/div/h1';
    await getTextAndCompare(page, pageTitleXpath, 'A big thank you');
    console.log('Page title verified successfully.');

    // Verify awards
    for (let i = 1; i <= 23; i++) {
        const xpath = `/html/body/section[3]/div/div/div[${i}]`;
        const element = page.locator(`xpath=${xpath}`);
        expect(await element.isVisible({ timeout: 1000 })).toBe(true, `Element at ${xpath} is not visible`);
        if(await element.isVisible({ timeout: 1000 }) === true) {
            console.log(`Element at ${xpath} is visible`);
        } else { console.log(`Element at ${xpath} is not visible`); }
    }
});