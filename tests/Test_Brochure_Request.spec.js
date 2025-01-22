/* Description: This test is created to test the brochure request functionality
Date: 02/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { HomePage, isVisible, urlContains, getText } = require('../pages/Helper_Functions.js');

test('Test Brochure Request', async ({ page }) => {
    
    // Instantiate the HomePage class
    const homePage = new HomePage(page);

    // Navigate to the homepage
    await homePage.goToHomePage();

    // Click on the Brochure Request button
    const BrochureRequestXPath = '//*[@id="top"]/div[1]/div/ul/li[1]/a';
    await page.locator(BrochureRequestXPath).click();
    console.log('Clicked on the Brochure Request button');

    // Click on close button
    // const closeButton = '//*[@id="om-mv3crt1ouu2cysd991o5-optin"]/div/button/svg/path';
    // if (await ElementUtils.isVisible(page, closeButton)) {
    //     await page.locator(closeButton).click();
    //     console.log('Clicked on close button');
    // }

    // Verify the navigation to the brochure request page
    await expect(page).toHaveURL(/brochurerequest/);
    console.log('Navigated to brochure request page');

    // Select brochures
    const brochures = [
        '//*[@id="brochureRequest"]/div/form/div/div[1]/div[1]/div/div[3]/label/span[2]',
        '//*[@id="brochureRequest"]/div/form/div/div[1]/div[2]/div/div[3]/label/span[2]',
        '//*[@id="brochureRequest"]/div/form/div/div[1]/div[3]/div/div[3]/label/span[2]'
    ];
    
    for (const brochure of brochures) {
        const brochureLocator = page.locator(brochure);
        await brochureLocator.waitFor({ state: 'visible' }); // Ensure element is visible
        await brochureLocator.click(); // Click brochure
        console.log(`Selected brochure: ${brochure}`);
    }

    // Fill in the form
    const TitleXpath = '//*[@id="Title"]';
    const TitleOptionXpath = '//*[@id="Title"]/option[2]';
    const ForenameFieldXpath = '//*[@id="Forename"]';
    const SurnameFieldXpath = '//*[@id="Surname"]';
    const EmailFieldXpath = '//*[@id="Email"]';
    const TelephoneFieldXpath = '//*[@id="Telephone"]';
    const NewsletterCheckboxXpath = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/label[7]/span[2]';
    const PostCodeFieldXpath = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/div/div/div/label/input';
    const PostCodeXpath = '//*[@id="afd-result-0"]/a/span';
    const CountMeInXpath = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/label[13]/span[2]';
    const SendButtonXpath = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/label[14]/input';

    // Interact with form fields
    await page.locator(TitleXpath).click(); // Select title dropdown
    await page.locator(TitleOptionXpath).click(); // Choose 'Mr.' option
    console.log('Title selected');

    await page.locator(ForenameFieldXpath).fill('Jack'); // Enter first name
    console.log('First name entered');

    await page.locator(SurnameFieldXpath).fill('Reacher'); // Enter last name
    console.log('Last name entered');

    await page.locator(EmailFieldXpath).fill('jackreacher1612@yopmail.com'); // Enter email
    console.log('Email entered');

    await page.locator(TelephoneFieldXpath).fill('0123456789'); // Enter phone number
    console.log('Phone number entered');

    // Sign up for newsletter
    await page.locator(NewsletterCheckboxXpath).click(); 
    console.log('Signed up for newsletter');

    // Fill in postcode
    await page.locator(PostCodeFieldXpath).click();
    await page.locator(PostCodeXpath).click(); // Select postcode
    console.log('Postcode entered');

    // Select "Count me in"
    await page.locator(CountMeInXpath).click(); 
    console.log('Count me in selected');

    // Click the Send button
    await page.locator(SendButtonXpath).click();
    console.log('Send button clicked successfully');

    // Verify success
    const successMessageXpath = '/html/body/section[2]/div/div[2]/div[1]';
    await expect(page).toContainText(/success/);
    console.log('Redirected to brochure request success page');
    
    // Fetch and log success message
    const successMessage = await page.locator(successMessageXpath).innerText();
    console.log(`Brochure request success message: ${successMessage}`);
});
