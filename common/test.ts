import {test as base} from '@playwright/test'
import {SubscribePage} from 'pages'

type Fixtures = {
  subscribePage: SubscribePage
}

export const test = base.extend<Fixtures>({
  subscribePage: async ({page}, use) => {
    const subscribePage = new SubscribePage(page)
    await use(subscribePage)
  },
})

export {expect} from '@playwright/test'
