import {test, expect} from '@playwright/test';
import{LoginPage} from '../../pages/LoginPage';
import dotenv from 'dotenv';
dotenv.config();

test('Successfully Login with valid credentials', async({page}) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login(process.env.EMAIL,process.env.PASS);
    await expect(page).toHaveURL('https://labsqajobs.qaharbor.com/account/');
});