import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId?: number;
  title: string;
  color?: (typeof colors)[keyof typeof colors];
  cover?: string;
  artists?: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Good Time",
    color: colors.yellow,
    cover:
      "https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/owl%20city/cover_owlcity.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9vd2wgY2l0eS9jb3Zlcl9vd2xjaXR5LmpwZWciLCJpYXQiOjE3NTYxMzQ0NTQsImV4cCI6MjA3MTQ5NDQ1NH0.2gBcZJjkoPndkp-_luKHlRYTRnzWARGghjVGYjvQcc8",
    artists: ["Owl City"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Time to Pretend",
    color: colors.green,
    cover:
      "https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/mgmt/cover_mgmt.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9tZ210L2NvdmVyX21nbXQuanBnIiwiaWF0IjoxNzU2MTM0NTgzLCJleHAiOjIwNzE0OTQ1ODN9.rLQCxcYIJ3998Qu4yrXIu9LhDr1_zYzErQW7hRj3toA",
    artists: ["MGMT"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Kids",
    color: colors.rose,
    cover:
      "https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/mgmt/cover_mgmt.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9tZ210L2NvdmVyX21nbXQuanBnIiwiaWF0IjoxNzU2MTM0NTgzLCJleHAiOjIwNzE0OTQ1ODN9.rLQCxcYIJ3998Qu4yrXIu9LhDr1_zYzErQW7hRj3toA",
    artists: ["MGMT"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Ocean Eyes",
    color: colors.blue,
    cover:
      "https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/owl%20city/cover_owlcity2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9vd2wgY2l0eS9jb3Zlcl9vd2xjaXR5Mi5qcGciLCJpYXQiOjE3NTYxMzQ3MzMsImV4cCI6MjA3MTQ5NDczM30.uBscYKkgZfCgZJ6U1DqTY5ruC7f6O7bK8F_CZf8MfEc",
    artists: ["Owl City"],
  },
//   {
//     id: '5',
//     albumId: 5,
//     title: "Ocean Eyes",
//     color: colors.purple,
//     cover:
//       "https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/owl%20city/cover_owlcity2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9vd2wgY2l0eS9jb3Zlcl9vd2xjaXR5Mi5qcGciLCJpYXQiOjE3NTYxMzQ3MzMsImV4cCI6MjA3MTQ5NDczM30.uBscYKkgZfCgZJ6U1DqTY5ruC7f6O7bK8F_CZf8MfEc",
//     artists: ["Owl City"],
//   },
//   {
//     id: '6',
//     albumId: 6,
//     title: "Thunderstruck",
//     color: colors.orange,
//     cover:
//       "https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/owl%20city/cover_owlcity3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9vd2wgY2l0eS9jb3Zlcl9vd2xjaXR5My5qcGciLCJpYXQiOjE3NTYxMzQ4MTIsImV4cCI6MjA3MTQ5NDgxMn0.jQF1OvAzq8cYLQExU9RETLrMILZyEYCXdq8W4FFC3WI",
//     artists: ["Owl City"],
//   },
];

export const favoriteHeader: Playlist[] = [
    {
        id: '2',
        title: "El futuro de la programación",
        color: colors.yellow,
        cover:"https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/hola%20mundo/cover_holamundo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9ob2xhIG11bmRvL2NvdmVyX2hvbGFtdW5kby5wbmciLCJpYXQiOjE3NTYxNDM4NTMsImV4cCI6MjA3MTUwMzg1M30.HJUkHuBsiRS2KDX7jYvpNnUnTFQQTfld96ziEd3u9Wo"
    },
    {
        id: '3',
        title: "Angular es el futuro de la programación",
        color: colors.yellow,
        cover:"https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/gentleman/cover_gentleman.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9nZW50bGVtYW4vY292ZXJfZ2VudGxlbWFuLnBuZyIsImlhdCI6MTc1NjE0MzgwMSwiZXhwIjoyMDcxNTAzODAxfQ.4GSAiGWTSjQv27aiXpfCIAF33gRkmE0xysAlJLERqcE"
    },
    {
        id: '4',
        title: "La programación es el futuro",
        color: colors.yellow,
        cover:"https://juposnjbdunvsbyzxppt.supabase.co/storage/v1/object/sign/spotify/covers/midudev/cover_midudev.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWI5NzRiMy0wN2ZkLTRkNDYtOGQ4Zi0zOWJjY2M4MmRhMzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzcG90aWZ5L2NvdmVycy9taWR1ZGV2L2NvdmVyX21pZHVkZXYucG5nIiwiaWF0IjoxNzU2MTQzODgyLCJleHAiOjIwNzE1MDM4ODJ9.O8-vdxau4gX63D9c5A2rXCdLB6jfJqFQIKDFxquruvA"
    }
]

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const contentCommunity: Playlist[] = [
    {
        id:'1',
        title:'Joyas ocultas y canciones que no conocías',
        cover:'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/dw/cover/es'
    },
    {
        id:'2',
        title:'Hola Beats, la playlist perfecta para programar',
        cover:'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5eb144f9e6f1362a58e63b686f4/es'
    },{
        id:'3',
        title:'Programación, Javascript y Desarollo Web',
        cover:'https://i.scdn.co/image/ab67656300005f1f50d78012026bedc5896e7675'
    },
    {
        id:'4',
        title:'Coding Music | La mejor playlist para programar',
        cover:'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84dd9263b1bb311de5c0221957'
    },
    {
        id:'5',
        title:'Impact of Javascript in the last decade',
        cover:'https://i.scdn.co/image/ab67656300005f1f4c27b6c974f6b935046c74c9'
    }
]

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:57"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:40"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:29"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:11"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:26"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:38"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:40"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:53"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:11"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:58"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:06"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:30"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:59"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:56"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:30"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:59"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:12"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:02"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:49"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "1:52"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:15"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:06"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:54"
  },
]