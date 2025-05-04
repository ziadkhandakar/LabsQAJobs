# Test info

- Name: Verify user can not edit About Us without completing profile
- Location: C:\Users\DELL\OneDrive\Desktop\Labs QA Automation\New\tests\DashboardTestCases\RecruiterDashboard.spec.js:16:5

# Error details

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.jet-popup__container-overlay').nth(14) to be visible
    47 × locator resolved to hidden <div class="jet-popup__container-overlay"></div>

    at C:\Users\DELL\OneDrive\Desktop\Labs QA Automation\New\tests\DashboardTestCases\RecruiterDashboard.spec.js:23:48
```

# Page snapshot

```yaml
- banner:
  - link "QAJobs":
    - /url: https://labsqajobs.qaharbor.com/
    - img "QAJobs"
  - navigation:
    - link "Jobs":
      - /url: https://labsqajobs.qaharbor.com/find-jobs/
  - link "My Account":
    - /url: https://labsqajobs.qaharbor.com/account/
  - link "Log Out":
    - /url: https://labsqajobs.qaharbor.com/wp-login.php?action=logout&redirect_to=https%3A%2F%2Flabsqajobs.qaharbor.com%2F&_wpnonce=d2b278bdf2
  - link "Post A Job Post A Job":
    - /url: https://labsqajobs.qaharbor.com/account/post-job/
  - link "Home":
    - /url: https://labsqajobs.qaharbor.com/
  - text: / Account
- link "My Profile":
  - /url: https://labsqajobs.qaharbor.com/account/
- link "Post a Job":
  - /url: https://labsqajobs.qaharbor.com/account/post-job/
- link "Applicants":
  - /url: https://labsqajobs.qaharbor.com/account/applicants/
- img "placeholder.png"
- text: Update LOGO Pagac and Sons
- heading "Name Change Request" [level=5]
- link "Change Password":
  - /url: https://labsqajobs.qaharbor.com/account/change-password/
- text: "Email: Claud.Gulgowski@gmail.com Phone:"
- link:
  - /url: "#"
  - img
  - img
- text: "0"
- heading "Total Jobs" [level=2]
- text: "0"
- heading "Active Jobs" [level=2]
- text: "0"
- heading "Applications" [level=2]
- link:
  - /url: "#"
  - img
  - img
- heading "About Us" [level=2]
- paragraph: Write something about your company.
- heading "Posted Jobs" [level=2]
- text: You didn't publish jobs yet!
- contentinfo:
  - paragraph: About Us
  - text: About QAJobs Terms of Service Privacy Policy Contact Us
  - paragraph: Candidates
  - link "Create Account":
    - /url: https://labsqajobs.qaharbor.com/candidate-registration/
  - link "Login":
    - /url: https://labsqajobs.qaharbor.com/login/
  - link "Find Jobs":
    - /url: https://labsqajobs.qaharbor.com/find-jobs/
  - text: FAQs
  - paragraph: Recruiter
  - link "Create Account":
    - /url: https://labsqajobs.qaharbor.com/recruiter-registration/
  - link "Login":
    - /url: https://labsqajobs.qaharbor.com/login/
  - link "Post Job":
    - /url: https://labsqajobs.qaharbor.com/account/post-job/
  - text: FAQs
  - heading "Get notified about our newest job listing" [level=6]
  - textbox "Enter your email"
  - button "Subscribe"
  - link "Linkedin-in":
    - /url: https://www.linkedin.com/company/qa-harbor
    - text: Linkedin-in
    - img
  - link "Facebook-f":
    - /url: https://www.facebook.com/QAHarbor/
    - text: Facebook-f
    - img
  - link "Youtube":
    - /url: https://www.youtube.com/@qaharborlimited
    - text: Youtube
    - img
  - link "Instagram":
    - /url: https://www.instagram.com/qaharbor/
    - text: Instagram
    - img
  - text: © QAJobs 2025. Powered by QA Harbor Ltd.
- text: desktop
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | import { RecruiterDashboard } from '../../pages/RecruiterDashboard';
   3 | import { LoginPage } from '../../pages/LoginPage';
   4 |
   5 | test('Verify the company name is displayed in the dashboard', async ({page}) =>{
   6 |     const login= new LoginPage(page);
   7 |     const recruiterDashboard = new RecruiterDashboard(page);
   8 |
   9 |     await login.gotoLogin();
  10 |     await login.login('Claud.Gulgowski@gmail.com','Demo1234');
  11 |     await expect(recruiterDashboard.companyName).toHaveText("Pagac and Sons");
  12 |
  13 |
  14 | });
  15 |
  16 | test('Verify user can not edit About Us without completing profile', async({page})=> {
  17 |     const login= new LoginPage(page);
  18 |     const recruiterDashboard = new RecruiterDashboard(page);
  19 |     await login.gotoLogin();
  20 |     await login.login('Claud.Gulgowski@gmail.com','Demo1234');
  21 |     await recruiterDashboard.editBtnAbout.scrollIntoViewIfNeeded();
  22 |     await recruiterDashboard.editBtnAbout.click();
> 23 |     await recruiterDashboard.popupOverlayAbout.waitFor({ state: 'visible' });
     |                                                ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  24 |     await expect(recruiterDashboard.completeProfTitle).toBeVisible();
  25 |
  26 | });
  27 |
```