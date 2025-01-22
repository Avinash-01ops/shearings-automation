/* Description: This test script verifies the Destinations > UK
Date: 13/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Destinations > UK', async ({ page }) => {

    // Step 1: Navigate to the UK Destinations page
    await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[1]/a/span');
    await urlContains(page, 'uk');
    console.log('Navigated to UK, URL verified');

    // Step 2: Verify Headers under the UK section
    for (let i = 1; i <= 4; i++) {
        const headerXpath = `/html/body/section[2]/div[1]/ul/li[${i}]/a`;
        await isVisible(page, headerXpath);
        console.log(`Header ${i} verified`);
    }

    console.log('All headers under UK verified successfully.');
});
