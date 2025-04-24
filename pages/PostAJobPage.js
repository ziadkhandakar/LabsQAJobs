exports.PostAJobPage = class PostAJobPage {
    constructor(page)
    {
        this.page= page;
        this.headingProfReq= page.locator('h3.elementor-icon-box-title span span:has-text("Profile Completion Required!")');
        this.fillUpBtn= page.locator('a.elementor-button:has-text("Fill Up")');

    }

    async gotoPostAJob(){
        await this.page.goto("https://labsqajobs.qaharbor.com/account/post-job/");
    }

}