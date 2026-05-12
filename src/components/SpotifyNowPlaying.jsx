import { useEffect, useState } from "react";

function SpotifyNowPlaying() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    async function fetchSong() {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();

        setSong(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSong();
  }, []);

  if (!song) {
    return (
      <div className="glass p-6 rounded-2xl">
        Loading Spotify...
      </div>
    );
  }

  return (
    <a
      href={song.songUrl}
      target="_blank"
      rel="noreferrer"
      className="glass p-6 rounded-2xl block hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <img
          src={song.albumImageUrl}
          alt="album"
          className="w-16 h-16 rounded-xl"
        />

        <div>
          <p className="text-sm text-green-400 mb-1">
            {song.isPlaying
              ? "Currently Vibing To 🎵"
              : "Last Played"}
          </p>

          <h3 className="font-semibold text-white">
            {song.title}
          </h3>

          <p className="text-sm text-muted-foreground">
            {song.artist}
          </p>
        </div>
      </div>
    </a>
  );
}

export default SpotifyNowPlaying;