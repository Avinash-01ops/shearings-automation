/* Description: This test is created to test the brochure request functionality
Date: 02/01/2025
Created by: Avi */

import { test, expect, Page } from '@playwright/test';
import { HomePage, isVisible, urlContains, getText } from '../pages/Helper_Functions';

// Define the test function with appropriate type annotations
test('Test Brochure Request', async ({ page }: { page: Page }) => {
    
    // Instantiate the HomePage class
    const homePage = new HomePage(page);

    // Navigate to the homepage
    await homePage.goToHomePage();

    // Click on the Brochure Request button
    const BrochureRequestXPath: string = '//*[@id="top"]/div[1]/div/ul/li[1]/a';
    await page.locator(BrochureRequestXPath).click();
    console.log('Clicked on the Brochure Request button');

    // Verify the navigation to the brochure request page
    await expect(page).toHaveURL(/brochurerequest/);
    console.log('Navigated to brochure request page');

    // Select brochures
    const brochures: string[] = [
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
    const TitleXpath: string = '//*[@id="Title"]';
    const TitleOptionXpath: string = '//*[@id="Title"]/option[2]';
    const ForenameFieldXpath: string = '//*[@id="Forename"]';
    const SurnameFieldXpath: string = '//*[@id="Surname"]';
    const EmailFieldXpath: string = '//*[@id="Email"]';
    const TelephoneFieldXpath: string = '//*[@id="Telephone"]';
    const NewsletterCheckboxXpath: string = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/label[7]/span[2]';
    const PostCodeFieldXpath: string = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/div/div/div/label/input';
    const PostCodeXpath: string = '//*[@id="afd-result-0"]/a/span';
    const CountMeInXpath: string = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/label[13]/span[2]';
    const SendButtonXpath: string = '//*[@id="brochureRequest"]/div/form/div/div[2]/div/label[14]/input';

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
    const successMessageXpath: string = '/html/body/section[2]/div/div[2]/div[1]';
    await expect(page).toHaveURL(/success/);
    console.log('Redirected to brochure request success page');
    
    // Fetch and log success message
    const successMessage: string = await page.locator(successMessageXpath).innerText();
    console.log(`Brochure request success message: ${successMessage}`);
});
