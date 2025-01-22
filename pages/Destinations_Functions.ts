import { Page, Locator } from '@playwright/test';

// Function to navigate to any page in the Destinations section
export async function Navigate_To_Destinations(page: Page, xpath: string): Promise<void> {
    // Navigate to Home page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Click on the Destinations button
    const destinationsButton: string = '//*[@id="top"]/div[6]/nav/div/ul/li[2]/button';
    await page.locator(destinationsButton).click();
    console.log('Clicked on Destinations button');

    // Click on the provided xpath
    await page.locator(xpath).click();
    console.log('Clicked on the given xpath');
}
