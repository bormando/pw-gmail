import {getToken} from 'gmail-getter'

export default async function globalSetup() {
  process.env['ACCESS_TOKEN'] = await getToken(
    process.env.CLIENT_ID!,
    process.env.CLIENT_SECRET!,
    process.env.REFRESH_TOKEN!
  )
}
