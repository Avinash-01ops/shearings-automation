/* Description: This test script is created to test the Book with Confidence page
Date: 08/01/2025
Created by: Avi */

import { test, Page } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { urlContains } from '../../pages/Helper_Functions';

test('Test Book with Confidence', async ({ page }: { page: Page }) => {
    // XPath for "Book with Confidence" link
    const bookWithConfidenceXpath: string = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[11]/a/span';

    // Navigate to the "Book with Confidence" page
    await Navigate_To_Useful_Info(page, bookWithConfidenceXpath);

    // Verify if the correct page is loaded
    const expectedUrlSubstring: string = 'pricing-policy';
    const isCorrectPage: boolean = await urlContains(page, expectedUrlSubstring);

    if (isCorrectPage) {
        console.log('Navigated to the "Book with Confidence" page successfully.');
    } else {
        console.error('Navigation failed: Incorrect page loaded.');
    }
});
