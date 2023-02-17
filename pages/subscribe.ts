import {Locator, Page} from '@playwright/test'
import {messages} from 'data'

export class SubscribePage {
  readonly page: Page
  readonly button: {
    subscribe: Locator
    confirm: Locator
  }
  readonly input: {
    email: Locator
  }
  readonly label: {
    confirm: Locator
    confirmed: Locator
  }

  constructor(page: Page) {
    this.page = page
    this.button = {
      subscribe: this.page.locator('button[aria-controls="newsletter-COM001-form"]'),
      confirm: this.page
        .locator('form[id="newsletter-COM001-form"]')
        .locator('input[value="Subscribe"]'),
    }
    this.input = {
      email: this.page.locator('input[id="newsletter-COM001"]'),
    }
    this.label = {
      confirm: this.page.getByText(messages.confirm),
      confirmed: this.page.locator('h2[class="confirm-header"]'),
    }
  }

  async open() {
    return this.page.goto('/listmanagement')
  }
}
