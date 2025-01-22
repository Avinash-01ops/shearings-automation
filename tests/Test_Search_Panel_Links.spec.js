/* Description: This test script is created to test the Agent Login button functionality
Date: 06/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { getTextAndCompare } = require('../pages/Helper_Functions');

test('Test Search Functionality and Banners', async ({ page }) => {
    // Step 1: Navigate to the Home Page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Step 2: Check if Search button is visible and click
    const searchButton = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/button';
    await expect(page.locator(searchButton)).toBeVisible();
    await page.locator(searchButton).click();
    console.log('Clicked on Search button');

    // Step 3: Verify visibility of banners
    const banner1Xpath = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[3]/div[1]/div/a/div/div/h4';
    const banner2Xpath = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[3]/div[2]/div/a/div/div/h4';
    const banner3Xpath = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[3]/div[3]/div/a/div/div/h4';

    await expect(page.locator(banner1Xpath)).toBeVisible();
    console.log('We’ve had a makeover! banner is visible');

    await expect(page.locator(banner2Xpath)).toBeVisible();
    console.log('Fancy a FREE brochure? banner is visible');

    await expect(page.locator(banner3Xpath)).toBeVisible();
    console.log('Bag your holiday from little banner is visible');

    // Step 4: Click and verify Banner 1
    await page.locator(banner1Xpath).click();
    console.log('Clicked Banner 1');
    await expect(page).toHaveURL(/why-we-rock/);
    console.log('Navigated to "Why We Rock" page successfully');

    const banner1TitleXpath = '/html/body/section[2]/div/div[2]/div[1]/h1';
    const banner1ExpectedText = 'A warm welcome from Shearings!';
    const isBanner1TitleCorrect = await getTextAndCompare(page, banner1TitleXpath, banner1ExpectedText);
    if (isBanner1TitleCorrect) {
        console.log('Banner 1 title verified successfully.');
    } else {
        console.error('Banner 1 title verification failed.');
    }

    // Step 5: Click and verify Banner 2
    // await page.goto('https://www.shearings.com'); // Go back to Home Page
    // await page.locator(searchButton).click(); // Open search menu again
    // await page.locator(banner2Xpath).click();
    // console.log('Clicked Banner 2');
    // await expect(page).toHaveURL(/brochurerequest/);
    // console.log('Navigated to "Brochure Request" page successfully');

    // const banner2TitleXpath = '/html/body/section[2]/div/div/div[1]/div/h1';
    // const banner2ExpectedText = 'Snag a brochure – on the house!';
    // const isBanner2TitleCorrect = await getTextAndCompare(page, banner2TitleXpath, banner2ExpectedText);
    // if (isBanner2TitleCorrect) {
    //     console.log('Banner 2 title verified successfully.');
    // } else {
    //     console.error('Banner 2 title verification failed.');
    // }

    // Step 6: Click and verify Banner 3
    await page.goto('https://www.shearings.com'); // Go back to Home Page
    await page.locator(searchButton).click(); // Open search menu again
    await page.locator(banner3Xpath).click();
    console.log('Clicked Banner 3');
    await expect(page).toHaveURL(/deposits/);
    console.log('Navigated to "Deposits" page successfully');

    const banner3TitleXpath = '/html/body/section[2]/div/div[2]/div/h1';
    const banner3ExpectedText = 'Our dependable deposits';
    const isBanner3TitleCorrect = await getTextAndCompare(page, banner3TitleXpath, banner3ExpectedText);
    if (isBanner3TitleCorrect) {
        console.log('Banner 3 title verified successfully.');
    } else {
        console.error('Banner 3 title verification failed.');
    }
});
