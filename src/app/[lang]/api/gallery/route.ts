import { NextResponse } from "next/server"

const igmurAlbumID = process.env.IMGUR_ALBUM_ID
const imgurClientID = process.env.IMGUR_CLIENT_ID
export async function GET(request: Request) {
  const res = await fetch(`https://api.imgur.com/3/album/${igmurAlbumID}/images`, {
    headers: {
      Authorization: `Client-ID ${imgurClientID}`,
    },
  })
  if (!res.ok) {
    return new NextResponse('Error', { status: res.status })
  }
  const data = await res.json()
  return NextResponse.json(data)
}
