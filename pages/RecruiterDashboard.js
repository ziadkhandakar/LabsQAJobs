exports.RecruiterDashboard = class RecruiterDashboard
{
    constructor(page)
    {
        this.page= page;
        this.companyName= page.locator('.elementor-widget-container .jet-listing-dynamic-field .jet-listing-dynamic-field__content').nth(0);
        this.emailText= page.locator('.jet-listing-dynamic-field__content', {hasText: 'Email:'}).locator('.profile-info');
        this.phoneNumber= page.locator('.jet-listing-dynamic-field__content', {hasText: 'Phone:'}).locator('.profile-info');
        this.profileLink= page.getByRole('link', { name: 'My Profile' });
        this.postJobLink= page.locator('a.jet-profile-menu__item-link', { hasText: 'Post a Job' }).nth(0);
        this.postJobBtn= page.locator('a.jet-button__instance--icon-right span.jet-button__label').nth(1);
        this.applicantsLink = page.getByRole('link', { name: 'Applicants' });
        this.jobsLink= page.locator('a[href="https://labsqajobs.qaharbor.com/find-jobs/"]');
        this.logoutLink= page.getByRole('link', { name: 'Log Out' });
        this.popupOverlayAbout= page.locator('.jet-popup__container-overlay').nth(14);
        this.popupCloseBtn = page.locator('.jet-popup__close-button');
        this.fillUpButton = page.locator('a.elementor-button', { hasText: 'Fill Up' });
        this.editBtnProfile = page.locator('[data-id="9e106cb"]');
        this.editBtnAbout = page.locator('xpath=(//*[name()="circle"])[4]');
        this.completeProfTitle= page.locator('h3.elementor-icon-box-title span span');

    }

    async getCompanyName(){
        return await this.companyName.textContent();
    }
    
    async gotoRecruiterDashboard(){
        this.page.goto("https://labsqajobs.qaharbor.com/account/");
    }
    async gotoPostAJob(){
        await this.postJobBtn.click();

    }

    async editProfile(){
        await this.editBtnProfile.click();
    }

    async editAboutUs(){
        await this.editBtnAbout.click();
    }

}