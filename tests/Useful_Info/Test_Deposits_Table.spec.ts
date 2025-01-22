/* Description: This test script is created to test the Deposits table
Date: 08/01/2025
Created by: Avi */

import { test, expect, Page } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';

test('Test Deposits Table', async ({ page }: { page: Page }) => {
    test.setTimeout(120000); // Set timeout to 2 minutes for the test

    // Navigate to Deposits page
    const depositsPageXpath: string = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[4]/a/span';
    await Navigate_To_Useful_Info(page, depositsPageXpath);
    console.log('Navigated to Deposits page');

    // Wait for the table to load
    const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
    await tableLocator.waitFor({ state: 'visible', timeout: 20000 });
    console.log('Table is visible on the page');

    const rows = tableLocator.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(`Table has ${rowCount} rows`);

    // Define the expected data for validation
    const expectedData: {
        HolidayType: string;
        SuperLowDeposit: string;
        LowDeposit: string;
        FullDeposit: string;
        BalanceDue: string;
    }[] = [
        { HolidayType: 'Coach Holidays (UK)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'Coach Holidays (Europe)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '75 days before departure' },
        { HolidayType: 'Self-Drive Holidays', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'Self-Drive Experiences', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'River Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
        { HolidayType: 'Sea Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
        { HolidayType: 'Ticketed Events', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' }
    ];

    if (rowCount !== expectedData.length) {
        console.warn(`Row count mismatch: expected ${expectedData.length}, got ${rowCount}`);
    }

    // Validate rows
    for (let i = 0; i < expectedData.length; i++) {
        const cells = rows.nth(i).locator('td');

        // Explicitly wait for each cell to be visible
        await cells.first().waitFor({ state: 'visible', timeout: 10000 });

        const holidayType: string = (await cells.nth(0).textContent())?.trim() || '';
        const superLowDeposit: string = (await cells.nth(1).textContent())?.trim() || '';
        const lowDeposit: string = (await cells.nth(2).textContent())?.trim() || '';
        const fullDeposit: string = (await cells.nth(3).textContent())?.trim() || '';
        const balanceDue: string = (await cells.nth(4).textContent())?.trim() || '';

        const expectedRow = expectedData[i];
        console.log(`Validating row ${i + 1}`);
        expect(holidayType).toBe(expectedRow.HolidayType);
        expect(superLowDeposit).toBe(expectedRow.SuperLowDeposit);
        expect(lowDeposit).toBe(expectedRow.LowDeposit);
        expect(fullDeposit).toBe(expectedRow.FullDeposit);
        expect(balanceDue).toBe(expectedRow.BalanceDue);
    }

    console.log('Table content verified successfully');
});
