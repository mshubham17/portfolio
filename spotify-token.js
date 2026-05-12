import axios from "axios";

const client_id = "8c9e8925c9594fcd9702faa449d9e978";
const client_secret = "60a6acbb05ab4f00bbd5f4f6e7df6b30";

const code = "AQBGGoS_c9a4jZ3rakcTtMVdYZXB_U3g5L7hArXpe8uyVKMf7rkD6RpC-MXJaOLr9-PfP4Cze4QWXl9NTOeX-0jXP9C627H8x4HkiAiZjBa_BxUXDG0Azl6Cp7dlg1uMPwoKWknAw1ozcKUGTgOtllAoKnwhIXWj1SUvjd8Q7ljvyzvWdwHd97SeCP-_zs7-y9i0YJQ-svKKdC2rTaqmT_0FIZhUQI9I594Dgj7NRC2jZSH3JOQhanes";

const basic = Buffer.from(
  `${client_id}:${client_secret}`
).toString("base64");

async function getRefreshToken() {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://127.0.0.1:8888/callback",
    }).toString(),
    {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log(response.data);
}

getRefreshToken();