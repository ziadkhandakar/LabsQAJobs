import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProfilePage } from '../../pages/ProfilePage';
import dotenv from 'dotenv';
dotenv.config();

test('Verify Fill Up page is appeared if profile has not completed yet while updating contact info', async ({ page }) => {
  // Step 1: Login
  const login = new LoginPage(page);
  const profilepage = new ProfilePage(page);
  await login.gotoLogin();
  await login.login(process.env.EMAIL, process.env.PASS);

  await page.waitForLoadState('networkidle');

    await expect(profilepage.contactEditBtn).toBeVisible({ timeout: 10000 });
    await profilepage.contactEditBtn.click();
    // Wait for and click Fill Up link
    await expect(profilepage.fillUpLink).toBeVisible({ timeout: 10000 });

  
  /*
  await profilePage.updateCanContact(
    'test@example.com',
    '1234567890',
    'https://portfolio.example.com'
  );*/

  
});


