import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { RecruiterDashboard } from '../../pages/RecruiterDashboard';

test('Verify redirected to the job post page after clicking the Post A Job button', async({page})=>{
    const login= new LoginPage(page);
    const recruiterDashboard = new RecruiterDashboard(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await recruiterDashboard.postJobBtn.click();
    await expect(page).toHaveURL("https://labsqajobs.qaharbor.com/account/post-job/");


});

test('Verify redirected to the job post page after clicking the Post A Job Link text', async({page})=>{
    const login= new LoginPage(page);
    const recruiterDashboard = new RecruiterDashboard(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await recruiterDashboard.postJobLink.click();
    await expect(page).toHaveURL("https://labsqajobs.qaharbor.com/account/post-job/");


});