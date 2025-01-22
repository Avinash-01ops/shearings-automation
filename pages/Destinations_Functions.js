// Function to navigate to any page in the Destinations section
export async function Navigate_To_Destinations(page, xpath) {
    // Navigate to Home page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Click on the Destinations button
    const destinationsButton = '//*[@id="top"]/div[6]/nav/div/ul/li[2]/button';
    await page.locator(destinationsButton).click();
    console.log('Clicked on Destinations button');

    // Click on the provided xpath
    await page.click(xpath);
    console.log('Clicked on the given xpath');
}
