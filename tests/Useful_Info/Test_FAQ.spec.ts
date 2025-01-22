/* Description: This test script is created to test the FAQ page
Date: 08/01/2025
Created by: Avi */

import { test, expect, Page } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible } from '../../pages/Helper_Functions';

test('Test FAQs', async ({ page }: { page: Page }) => {

    // Navigate to FAQ page
    const faqPageXpath: string = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[6]/a/span';
    await Navigate_To_Useful_Info(page, faqPageXpath);
    console.log('Navigated to FAQ page');

    // Verify page title
    const pageTitleXpath: string = '/html/body/section[2]/div/div[2]/div[1]/h1';
    await getTextAndCompare(page, pageTitleXpath, 'Frequently Asked Questions');
    console.log('Page title verified successfully.');

    // Verify page section 1
    const section1Xpath: string = '/html/body/section[3]/div/div/div/h3[1]';
    await getTextAndCompare(page, section1Xpath, 'Bagging Your Holiday');
    console.log('Bagging Your Holiday verified successfully.');

    // Verify answer 1
    const button1Xpath: string = '//*[@id="accordion47_1736328011147"]/button/span';
    const answer1Xpath: string = '/html/body/section[3]/div/div/div[2]/div[1]/div/div/p';

    const isButtonVisible: boolean = await isVisible(page, button1Xpath);
    if (isButtonVisible) {
        await click(page, button1Xpath);
        console.log('Clicked to expand answer 1');

        await getTextAndCompare(
            page,
            answer1Xpath,
            'If you have any questions about a holiday or would like to make a booking, drop a message to our Reservations team'
        );
        console.log('Answer 1 verified successfully.');
    } else {
        console.log('Button is not visible');
    }
});
