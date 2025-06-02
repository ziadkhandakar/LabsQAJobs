import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { RecruiterDashboard } from '../../pages/RecruiterDashboard';
import { PostAJobPage } from '../../pages/PostAJobPage';

test('Verify redirected to the job post page after clicking the Post A Job button', async({page})=>{
    const login= new LoginPage(page);
    const recruiterDashboard = new RecruiterDashboard(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await recruiterDashboard.postJobBtn.click();
    await expect(page).toHaveURL("https://labsqajobs.qaharbor.com/account/post-job/");


});



test('Verify redirected to the job post page after clicking the Post A Job link text', async({page})=>{
    const login= new LoginPage(page);
    const recruiterDashboard = new RecruiterDashboard(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await recruiterDashboard.postJobLink.click();
    


});

test('Verify Complete profile request is displayed if profile is not completed', async({page})=>{
    const login= new LoginPage(page);
    const postAJobPage= new PostAJobPage(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await postAJobPage.gotoPostAJob();
    await expect(postAJobPage.headingProfReq).toBeVisible();


});

test('Verify the Fill Up button is displayed', async({page})=>{
    const login= new LoginPage(page);
    const postAJobPage= new PostAJobPage(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await postAJobPage.gotoPostAJob();
    await expect(postAJobPage.fillUpBtn).toBeVisible();


});

test('Verify the Fill Up button is redirected to Update Profile page', async({page})=>{
    const login= new LoginPage(page);
    const postAJobPage= new PostAJobPage(page);

    await login.gotoLogin();
    await login.login('Claud.Gulgowski@gmail.com','Demo1234');
    await postAJobPage.gotoPostAJob();
    await postAJobPage.fillUpBtn.click();
    await expect(page).toHaveURL("https://labsqajobs.qaharbor.com/account/update-profile/");


});

test('Verify the Post Job page is appeared when the profile is completed during browsing the Post A Job page', async({page})=>{
    const login= new LoginPage(page);
    const postAJobPage= new PostAJobPage(page);

    await login.gotoLogin();
    await login.login('Maybelle.McGlynn34@hotmail.com','Demo1234');
    await postAJobPage.gotoPostAJob();
    await expect(postAJobPage.headingTitle).toBeVisible;


});
