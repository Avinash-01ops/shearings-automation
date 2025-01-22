/* Description: This test is created to test My Booking button
Date: 03/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { HomePage, isVisible } = require('../pages/Helper_Functions.js');

test('Test My Booking', async ({ page }) => {
    // Instantiate the HomePage class
    const homePage = new HomePage(page);    

    // Step 1: Navigate to Home Page    
    await homePage.goToHomePage();
    console.log('Navigated to Home Page');    

    // Step 2: Click on My Booking button
    const myBookingButton = '//*[@id="top"]/div[1]/div/ul/li[3]/a';
    await page.locator(myBookingButton).click();
    console.log('Clicked on My Booking button');

    // Step 3: Verify user is redirected to My Booking page
    const BookingID = '/html/body/main/div/div[1]/div/form/div[1]/label';
    const Surname = '/html/body/main/div/div[1]/div/form/div[2]/label';
    const YearBorn = '/html/body/main/div/div[1]/div/form/div[3]/label';
    
    const BookingID_Visible = await isVisible(page, BookingID);
    const Surname_Visible = await isVisible(page, Surname);
    const YearBorn_Visible = await isVisible(page, YearBorn);
    console.log('User is redirected to Booking page successfully');

    // Step 4: Switch to Travel Agent Login
    const Agent_Login = 'body > main > div > a'; //used selector 
    await page.locator(Agent_Login).click();
    console.log('Clicked Switch to Travel Agent Login button successfully');

    // Step 5: Verify user is redirected to Agent Login page
    const ABTA = '/html/body/main/div/div[1]/div/form/div[1]/label';
    const Password = '/html/body/main/div/div[1]/div/form/div[2]/label';
    const ABTA_Visible = await isVisible(page, ABTA);
    const Password_Visible = await isVisible(page, Password)
    console.log('User is redirected to Agent Login Page successfully');

});
