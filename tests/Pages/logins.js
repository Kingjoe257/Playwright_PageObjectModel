import { expect } from '@playwright/test';

export class LoginPage {
  
    constructor(page) {
    this.page = page
    this.usernameInput = page.getByTestId('sign-in-email')
    this.passwordInput = page.getByTestId('sign-in-password')
    this.loginButton = page.getByTestId('sign-in-submit')
    this.successMessage = page.getByRole('heading', { name: /Welcome back/i })
  }
  
  async gotoLoginPage() {
    await this.page.goto('https://www.accessa.ng/sign-in')
  }


  async Login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
    await this.successMessage.waitFor({ state: 'visible' })
 }
}