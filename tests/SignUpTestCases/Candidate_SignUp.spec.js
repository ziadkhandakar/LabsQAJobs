import {test, expect} from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { faker } from '@faker-js/faker';


test('Verify that a candidate can successfully sign up using valid credentials.', async ({ page }) => {
    const signup= new SignupPage(page);
    await signup.gotoSignupCandidate();
    // Generate fake user data
    const username = faker.internet.username().toLowerCase();        // e.g., jiad_123
    const email = faker.internet.email(username); // e.g., jiad_123@yopmail.com
    const password = 'Demo1234';
    await expect(signup.heading).toHaveText('Candidate Registration');
    await signup.signUpCandidate(username,email,password);
    await expect(page).toHaveURL(/status=success/);

});


test('Verify that an appropriate error message is displayed when a candidate attempts to sign up using an existing username.', async ({ page }) => {
    const signup= new SignupPage(page);
    await signup.gotoSignupCandidate();
    await signup.signUpCandidate('jiad1223','jiad.112@yopmail.com','Demo1234');
    await expect(signup.userErr).toBeVisible();
    await expect(signup.userErr).toContainText("Please use a different username. It's not available.")

});

test('Verify that an appropriate error message is displayed when a candidate attempts to sign up using an existing email address.', async ({ page }) => {
    const signup= new SignupPage(page);
    await signup.gotoSignupCandidate();
    await signup.signUpCandidate('jiad1223','jiad.112@yopmail.com','Demo1234');
    await expect(signup.emailErr).toBeVisible();
    await expect(signup.emailErr).toContainText("Use a different Email address or reset your account password. We already have an account with this email address.");

});

test('Verify error message for invalid password', async ({ page }) => {
    const signup= new SignupPage(page);
    await signup.gotoSignupCandidate();
    await signup.signUpCandidate('jiad1223','jiad.112@yopmail.com','Demo123');
    await expect(signup.passErr).toBeVisible();
    await expect(signup.passErr).toContainText("Please increase the password length to at least 8 characters");
    await expect(signup.confPassErr).toBeVisible();
    await expect(signup.confPassErr).toContainText("Please increase the confirm password length to at least 8 characters");
});

