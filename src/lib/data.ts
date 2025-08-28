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
    }
]

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "To the Pretend",
    "image": `https://i.scdn.co/image/ab67616d00001e028b32b139981e79f2ebe005eb`,
    "artists": ["MGMT"],
    "album": "Oracular Spectacular",
    "duration": "4:22"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Kids",
    "image": `https://i.scdn.co/image/ab67616d00001e028b32b139981e79f2ebe005eb`,
    "artists": ["MGMT"],
    "album": "Oracular Spectacular",
    "duration": "5:01"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "To The Sky",
    "image": `https://i.scdn.co/image/ab67616d00001e02ba50d85c3cc5f3061e816c0c`,
    "artists": ["Owl City"],
    "album": "All Thing Bright and Beautiful",
    "duration": "3:38"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "When Can I See You Again",
    "image": `https://i.scdn.co/image/ab67616d00001e02ba50d85c3cc5f3061e816c0c`,
    "artists": ["Owl City"],
    "album": "Ocean Eyes",
    "duration": "3:41"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Cave In",
    "image": `https://i.scdn.co/image/ab67616d00001e02ba50d85c3cc5f3061e816c0c`,
    "artists": ["Owl City"],
    "album": "Ocean Eyes",
    "duration": "4:02"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Hello Seattle",
    "image": `https://i.scdn.co/image/ab67616d00001e02ba50d85c3cc5f3061e816c0c`,
    "artists": ["Owl City"],
    "album": "Ocean Eyes",
    "duration": "2:38"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Meteor Shower",
    "image": `https://i.scdn.co/image/ab67616d00001e02ba50d85c3cc5f3061e816c0c`,
    "artists": ["Owl City"],
    "album": "Ocean Eyes",
    "duration": "2:13"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "On The Wing",
    "image": `https://i.scdn.co/image/ab67616d00001e02ba50d85c3cc5f3061e816c0c`,
    "artists": ["Owl City"],
    "album": "Ocean Eyes",
    "duration": "5:02"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "Vanilla Twilight",
    "image": `https://i.scdn.co/image/ab67616d00001e02ba50d85c3cc5f3061e816c0c`,
    "artists": ["Owl City"],
    "album": "Ocean Eyes",
    "duration": "3:52"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "Good Time",
    "image": `https://i.scdn.co/image/ab67616d00001e02cf5459850259268f98b07f7a`,
    "artists": ["Owl City"],
    "album": "The Midsummer Station",
    "duration": "3:25"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Silhouette",
    "image": `https://i.scdn.co/image/ab67616d00001e02cf5459850259268f98b07f7a`,
    "artists": ["Owl City"],
    "album": "The Midsummer Station",
    "duration": "4:12"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Gold",
    "image": `https://i.scdn.co/image/ab67616d00001e02cf5459850259268f98b07f7a`,
    "artists": ["Owl City"],
    "album": "The Midsummer Station",
    "duration": "3:56"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Verge",
    "image": `https://i.scdn.co/image/ab67616d00001e02f82babf0861d326c7797ab9a`,
    "artists": ["Owl City"],
    "album": "Mobile Orchestra",
    "duration": "3:33"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "I Found Love",
    "image": `https://i.scdn.co/image/ab67616d00001e02f82babf0861d326c7797ab9a`,
    "artists": ["Owl City"],
    "album": "Mobile Orchestra",
    "duration": "3:39"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "ThunderStruck",
    "image": `https://i.scdn.co/image/ab67616d00001e02f82babf0861d326c7797ab9a`,
    "artists": ["Owl City"],
    "album": "Mobile Orchestra",
    "duration": "4:07"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "My Everything",
    "image": "https://i.scdn.co/image/ab67616d00001e02f82babf0861d326c7797ab9a",
    "artists": ["Owl City"],
    "album": "Mobile Orchestra",
    "duration": "3:46"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Unbelievable",
    "image": "https://i.scdn.co/image/ab67616d00001e02f82babf0861d326c7797ab9a",
    "artists": ["Owl City"],
    "album": "Mobile Orchestra",
    "duration": "3:14"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "You're Not Alone",
    "image": "https://i.scdn.co/image/ab67616d00001e02f82babf0861d326c7797ab9a",
    "artists": ["Owl City"],
    "album": "Mobile Orchestra",
    "duration": "3:56"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "This isn't The End",
    "image": "https://i.scdn.co/image/ab67616d00001e02f82babf0861d326c7797ab9a",
    "artists": ["Owl City"],
    "album": "Mobile Orchestra",
    "duration": "3:24"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Synthia",
    "image": "https://i.scdn.co/image/ab67616d00001e02c805e48e45d23122e45b7751",
    "artists": ["Scott && Brendo"],
    "album": "And Away We Go",
    "duration": "3:10"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Shivers Netrum",
    "image": "https://i.scdn.co/image/ab67616d00001e02c5d106258d9d3ea4d0d4b70a",
    "artists": ["NCS"],
    "album": "Infinity",
    "duration": "3:19"
  },
//   {
//     "id": 2,
//     "albumId": 5,
//     "title": "Coffee Daze",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "1:52"
//   },
//   {
//     "id": 3,
//     "albumId": 5,
//     "title": "Skyline Serenade",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "2:15"
//   },
//   {
//     "id": 4,
//     "albumId": 5,
//     "title": "Urban Echoes",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "4:06"
//   },
//   {
//     "id": 5,
//     "albumId": 5,
//     "title": "Night's End",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "2:54"
//   },
]