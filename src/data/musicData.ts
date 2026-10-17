import raw from "./music.json";

export type Scene = {
  scene: string;
  artists: string[];
};

/**
 * Taken from Paras's Spotify (top, followed and saved artists), grouped by
 * scene. Scene order matters: the homepage teaser samples the first few of each.
 */
export const musicScenes: Scene[] = [
  {
    scene: "Western rap",
    artists: ["Eminem", "J. Cole", "Travis Scott", "XXXTENTACION", "Nipsey Hussle", "Jack Harlow"],
  },
  {
    scene: "Desi hip-hop",
    artists: ["Seedhe Maut", "KR$NA", "Karma", "Prabh Deep", "Raftaar", "Bohemia", "Sikander Kahlon", "Young Stunners"],
  },
  {
    scene: "Pop & R&B",
    artists: ["Taylor Swift", "Gracie Abrams", "Dua Lipa", "Tyla", "ZAYN", "Lana Del Rey", "Selena Gomez", "Ed Sheeran", "Sia", "Maroon 5"],
  },
  {
    scene: "Punjabi",
    artists: ["Sidhu Moose Wala", "Karan Aujla", "Shubh", "AP Dhillon", "Parmish Verma", "Talwiinder"],
  },
  {
    scene: "Haryanvi",
    artists: ["Dhanda Nyoliwala", "Khasa Aala Chahar", "CHIEF", "Lash Curry"],
  },
];

/** Every artist across the scenes, for counts and the homepage teaser. */
export const allArtists = musicScenes.flatMap((s) => s.artists);

/** A few from each scene, so the homepage teaser shows the spread, not one scene. */
export const featuredArtists = musicScenes.flatMap((s) => s.artists.slice(0, 3));

/**
 * The track embedded on the page. Swap the id for any Spotify track - it is the
 * segment after /track/ in a Spotify share link.
 */
export const nowPlaying = {
  trackId: "6HZILIRieu8S0iqY8kIKhj",
  title: "DNA.",
  artist: "Kendrick Lamar",
};


export type Album = {
  id: string;
  artist: string;
  year: number;
  scene: string;
  title: string;
  cover: string;
};

/**
 * Array order is display order. Titles and covers are filled by
 * `npm run refresh-music`, so adding one only means pasting a Spotify album id.
 */
export const albums = (raw.albums as Album[]).filter((a) => a.cover);
