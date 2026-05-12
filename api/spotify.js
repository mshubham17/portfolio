const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

const RECENT_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
}

export default async function handler(req, res) {
  const { access_token } = await getAccessToken();

  const nowPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (nowPlaying.status === 200) {
    const song = await nowPlaying.json();

    return res.status(200).json({
      isPlaying: true,
      title: song.item.name,
      artist: song.item.artists.map(a => a.name).join(", "),
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
    });
  }

  const recent = await fetch(RECENT_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const recentSong = await recent.json();
  const track = recentSong.items[0].track;

  return res.status(200).json({
    isPlaying: false,
    title: track.name,
    artist: track.artists.map(a => a.name).join(", "),
    albumImageUrl: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
  });
}