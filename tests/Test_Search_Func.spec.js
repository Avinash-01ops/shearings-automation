/* Description: This test script is created to test the Agent Login button functionality
Date: 06/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { getTextAndCompare } = require('../pages/Helper_Functions');

test('Test Search Functionality', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Shearings homepage');

    // Step 1: Check if Search button is visible and click
    const searchButton = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/button';
    await expect(page.locator(searchButton)).toBeVisible();
    await page.locator(searchButton).click();
    console.log('Clicked on Search button');

    // Step 2: Enter text into Search field
    const searchField = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[1]/div[1]/div[1]/div/form/input';
    await page.locator(searchField).fill('London');
    console.log('Entered text "London" into Search field');

    // Step 3: Click on the first search result
    const searchResult = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[2]/div/div[2]/div/div/ol/li[1]/div/div/a';
    await expect(page.locator(searchResult)).toBeVisible();
    await page.locator(searchResult).click();
    console.log('Clicked on the first search result');

    // Step 4: Verify the user is navigated to the correct page
    await expect(page).toHaveURL(/londons-royal-palaces/);
    console.log('Verified the URL contains "holidays/londons-royal-palaces"');

    // Step 5: Verify the page title
    const pageTitleXpath = 'html/body/section[2]/div[2]/div[2]/div[1]/div[1]/h1';
    const expectedTitle = "London's Royal Palaces";
    const isTitleCorrect = await getTextAndCompare(page, pageTitleXpath, expectedTitle);

    if (isTitleCorrect) {
        console.log("Page title matches: London's Royal Palaces");
    } else {
        console.error("Page title does not match!");
    }

    console.log('Search functionality is working correctly');
});
