const igmurAlbumID = process.env.IMGUR_ALBUM_ID
const imgurClientID = process.env.IMGUR_CLIENT_ID
export async function GET(request: Request) {
console.log('igmurAlbumID', igmurAlbumID)
  const res = await fetch(`https://api.imgur.com/3/album/${igmurAlbumID}/images`, {
    headers: {
      Authorization: `Client-ID ${imgurClientID}`,
    },
  })
  if (!res.ok) {
    return new Response('Error', { status: res.status })
  }
  const data = await res.json()
  return Response.json(data)

}
