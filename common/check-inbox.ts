import {checkInbox as checkGmailInbox} from 'gmail-getter'

export const checkInbox = async (recipient: string) => {
  const username = recipient.split('@')[0]
  return checkGmailInbox(process.env.ACCESS_TOKEN!, 30000, 2000, `to:${username}`)
}
