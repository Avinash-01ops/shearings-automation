/* Description: This test script is created to test the Gift Vouchers page
Date: 08/01/2025
Created by: Avi */

import { test, Page } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare} from '../../pages/Helper_Functions';

test('Test Gift Vouchers', async ({ page }: { page: Page }) => {

    // Navigate to Gift Vouchers page
    await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[7]/a/span');
    console.log('Navigated to Gift Vouchers page');

    // Verify page title
    const pageTitleXpath = '/html/body/section[2]/div/div[2]/div[1]/h1';
    await getTextAndCompare(page, pageTitleXpath, 'Gift Vouchers');
    console.log('Page title verified successfully.');

    // Verify page content
    const pageContentXpath = '/html/body/section[3]/div/div/div/div';
    await getTextAndCompare(page, pageContentXpath, 'Terms & Conditions\nWith a Shearings gift voucher, the holder gets a nice little price drop on any Shearings holiday, equal to the value of the voucher.\nNo cash alternative is available.\nNo change can be given for any product under the value shown using the gift voucher.\nPhotocopies will not be accepted.\nGift vouchers are not transferable.\nAll holidays are subject to availability.\nTo redeem your gift voucher, call our Reservations team on 01709 249 698.');
    console.log('Page content verified successfully.');
});
