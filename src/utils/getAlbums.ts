// utils/getAlbums.ts
import { songs } from "@/lib/data";

export interface Album {
  id: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
}

export const getAlbums = (): Album[] => {
  const albumsMap = new Map<number, Album>();

  songs.forEach((song) => {
    if (!albumsMap.has(song.albumId)) {
      albumsMap.set(song.albumId, {
        id: song.albumId,
        title: song.title,
        image: song.image,
        artists: song.artists,
        album:song.album,
      });
    }
  });

  return Array.from(albumsMap.values());
};
