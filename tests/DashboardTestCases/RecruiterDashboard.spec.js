import {test, expect} from '@playwright/test';
import { RecruiterDashboard } from '../../pages/RecruiterDashboard';
import { LoginPage } from '../../pages/LoginPage';

test('Verify the company name is displayed in the dashboard', async ({page}) =>{
    const login= new LoginPage(page);
    const recruiterDashboard = new RecruiterDashboard(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await expect(recruiterDashboard.companyName).toHaveText("Pagac and Sons");


});

test('Verify user can not edit About Us without completing profile', async({page})=> {
    const login= new LoginPage(page);
    const recruiterDashboard = new RecruiterDashboard(page);
    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await recruiterDashboard.editBtnAbout.scrollIntoViewIfNeeded();
    await recruiterDashboard.editBtnAbout.click();
    await recruiterDashboard.popupOverlayAbout.waitFor({ state: 'visible' });
    await expect(recruiterDashboard.completeProfTitle).toBeVisible();

});
