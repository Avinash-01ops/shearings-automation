// Import necessary types
import { Page, Locator } from 'playwright';

// Function to go to home page
class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToHomePage(): Promise<void> {
        await this.page.goto('https://www.shearings.com/');
        console.log('Navigated to Shearings homepage');
    }
}

// Function to check if an element is visible
async function isVisible(page: Page, xpath: string): Promise<boolean> {
    const element: Locator = page.locator(`xpath=${xpath}`); // Adding 'xpath=' prefix
    const visible: boolean = await element.isVisible();
    return visible;
}

// Function to check if an element is enabled
async function isEnabled(page: Page, xpath: string): Promise<boolean> {
    const element: Locator = page.locator(xpath);
    return await element.isEnabled();
}

// Function to click an element
async function click(page: Page, xpath: string): Promise<void> {
    const element: Locator = page.locator(xpath);
    await element.click();
}

// Function to scroll to an element
async function scrollTo(page: Page, xpath: string): Promise<void> {
    await page.locator(`xpath=${xpath}`).scrollIntoViewIfNeeded();
}

// Function to check if the URL contains text
async function urlContains(page: Page, text: string): Promise<boolean> {
    const url: string = await page.url();
    return url.includes(text);
}

// Function to fill an input field
async function fillInput(page: Page, xpath: string, text: string): Promise<void> {
    const element: Locator = page.locator(`xpath=${xpath}`);
    await element.fill(text);
}

// Function to get text from an element
async function getText(page: Page, xpath: string): Promise<string> {
    const element: Locator = page.locator(xpath);
    const text: string = await element.innerText(); 
    return text.trim();
}

// Function to get text and compare
async function getTextAndCompare(page: Page, xpath: string, expectedText: string): Promise<boolean> {
    const text: string = await page.locator(`xpath=${xpath}`).innerText();
    return text.trim() === expectedText;
}

// Function to enter data in field
const inputDataInField = async (page: Page, xpath: string, data: string): Promise<void> => {
    const inputField: Locator = await page.locator(xpath);

    // Wait for the element to be visible before interacting with it
    await inputField.waitFor({ state: 'visible', timeout: 5000 });

    // Fill the input field with the given data
    await inputField.fill(data);  
    console.log(`Entered data in field with XPath: ${xpath}`);
};

// Export everything
export {
    HomePage,
    isVisible,
    isEnabled,
    click,
    scrollTo,
    urlContains,
    fillInput,
    getText,
    getTextAndCompare,
    inputDataInField,
};
