/* Description: This test is created to test the opening times functionality
Date: 03/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { HomePage, isVisible } = require('../pages/Helper_Functions.js');

test('Test Opening Times', async ({ page }) => {
    // Instantiate the HomePage class
    const homePage = new HomePage(page);

    // Step 1: Navigate to Home Page
    await homePage.goToHomePage();
    console.log('Navigated to Home Page');

    // Step 2: Click on Opening times button
    const openingTimesButton = '//*[@id="top"]/div[1]/div/ul/li[2]/button';
    await page.locator(openingTimesButton).click();
    console.log('Clicked on Opening Times button');

    // Step 3: Verify the opening times content
    const openingTimesHeading = '//*[@id="tooltip0"]/div[3]/h6';
    const openingTimesDescription = '//*[@id="tooltip0"]/div[3]/p[1]';
    const openingTimesSchedule = '//*[@id="tooltip0"]/div[3]/p[2]';

    // Use isVisible to verify elements
    const headingVisible = await isVisible(page, openingTimesHeading);
    const descriptionVisible = await isVisible(page, openingTimesDescription);
    const scheduleVisible = await isVisible(page, openingTimesSchedule);

    expect(headingVisible).toBe(true);
    expect(descriptionVisible).toBe(true);
    expect(scheduleVisible).toBe(true);
    console.log('Opening times content verified successfully');
});
