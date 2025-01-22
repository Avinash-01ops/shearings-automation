// Function to navigate to any page of UsefulInfo section
export async function Navigate_To_Useful_Info(page, xpath) {
    // Navigate to Home page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Click on Useful Info button
    const usefulInfoButton = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/button';
    await page.locator(usefulInfoButton).click();
    console.log('Clicked on Useful Info button');

    // Click on the given xpath
    await page.click(xpath);
    console.log('Clicked on given xpath');
}
