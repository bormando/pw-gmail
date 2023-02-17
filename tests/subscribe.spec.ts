import {test, expect, checkInbox} from 'common'
import {messages} from 'data'
import {parseLinkFromHtml} from 'gmail-getter'

test('Subscribe', async ({page, subscribePage}) => {
  const recipient = `g.getter.test+${Date.now()}@gmail.com`
  const linkRegEx = /(https:\/\/)(\S*)(confirmation)([\w\/\?\=\-]*)/im

  await subscribePage.open()
  await subscribePage.button.subscribe.click()
  await subscribePage.input.email.fill(recipient)
  await expect(subscribePage.button.confirm).toBeVisible()
  await page.waitForTimeout(3000)
  await subscribePage.button.confirm.click()

  const response = await page.waitForResponse('/api/subscription/subscribe')
  await expect(response.status()).toEqual(200)

  await expect(subscribePage.label.confirm).toBeVisible()

  const email = await checkInbox(recipient)
  await expect(email).not.toBeNull()

  const link = await parseLinkFromHtml(email, linkRegEx)
  await page.goto(link)

  await expect(subscribePage.label.confirmed).toBeVisible()
  await expect(subscribePage.label.confirmed).toHaveText(messages.confirmed)
})
