class ProfilePage {
  constructor(page) {
    this.page = page;

    // Define selectors
    this.contactEditBtn = page.locator('.jet-popup-target > .elementor-widget-container > .elementor-jet-button > .jet-button__container > .jet-button__instance').nth(2);
    this.CandidateEmail = 'input[name="email"]';
    this.CandidatePhone = 'input[name="phone"]';
    this.CandidatePortfolio = 'input[name="portfolio"]';
    this.expUpdateButton = page.locator('.jet-popup-target > .elementor-widget-container > .elementor-jet-button > .jet-button__container > .jet-button__instance').nth(3);
    this.fillUpLink = page.getByRole('link', { name: 'Fill Up' });
  }

  async updateCanContact(email, phoneNumber, portfolio) {
    // Wait for the contact edit button to be visible
    const editButton = this.page.locator(this.contactEditBtn);
    await editButton.waitFor({ state: 'visible', timeout: 120000 });

    // Click the edit button
    await editButton.click();

    // Fill in the contact information
    await this.page.locator(this.CandidateEmail).fill(email, { force: true });
    await this.page.locator(this.CandidatePhone).fill(phoneNumber);
    await this.page.locator(this.CandidatePortfolio).fill(portfolio);

    
  }
}

module.exports = { ProfilePage };
