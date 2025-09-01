import { allPlaylists, songs } from "@/lib/data"

export const GET = async ({ request: { url } }: { request: { url: string } }) => {
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get("id");
  
    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    if (!playlist) return { song: null, songs: [] };
  
    const songsPlaylist = songs
      .filter((song) => song.albumId === playlist.albumId)
      .sort((a, b) => a.id - b.id);
  
    return new Response(
      JSON.stringify({ playlist, songs: songsPlaylist }),
      { headers: { "Content-Type": "application/json" } }
    );
  };
  
