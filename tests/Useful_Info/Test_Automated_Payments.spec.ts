/* Description: This test script is created to test the Agent Login button functionality
Date: 06/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { HomePage, isVisible, urlContains, getTextAndCompare } from '../../pages/Helper_Functions.js';

test('Test Automated Payments', async ({ page }) => {
    // Step 1: Navigate to Home Page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Step 2: Click on Useful Info button
    const usefulInfobutton: string = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/button';
    await page.locator(usefulInfobutton).click();
    console.log('Clicked on Useful Info button');

    // Step 3: Click on Automated Payments button
    const automatedPaymentsButton: string = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[1]/a/span';
    await page.locator(automatedPaymentsButton).click();
    console.log('Clicked on Automated Payments button');

    // Step 4: Verify the user is navigated to the correct page
    const urlContainsText = 'how-automated-balance-payments-work';
    const isUrlCorrect = await urlContains(page, urlContainsText);
    if (!isUrlCorrect) {
        throw new Error('Navigated to incorrect page');
    }
    console.log('Navigated to correct page');

    // Step 5: Verify the page title
    const titleXpath: string = '//html/body/section[3]/div/div/div/p[1]';
    const expectedTitle: string = 'Automated balance payments – let’s break it down!';
    const isTitleCorrect: boolean = await getTextAndCompare(page, titleXpath, expectedTitle);

    if (isTitleCorrect) {
        console.log('Title verified');
    } else {
        console.error('Title verification failed!');
    }
});
