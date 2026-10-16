export type Scene = {
  scene: string;
  artists: string[];
};

/**
 * Seeded across the four scenes Paras named. Once the Spotify connector is
 * authorised this can be replaced with his actual top artists.
 */
export const musicScenes: Scene[] = [
  {
    scene: "Indian hip-hop",
    artists: ["Seedhe Maut", "DIVINE", "KR$NA", "Prabh Deep", "Talha Anjum", "Raftaar", "Karma", "MC Stan"],
  },
  {
    scene: "Western",
    artists: ["Kendrick Lamar", "J. Cole", "Tyler, the Creator", "Travis Scott", "Eminem", "Drake"],
  },
  {
    scene: "Old school",
    artists: ["Nas", "The Notorious B.I.G.", "2Pac", "Wu-Tang Clan", "Mobb Deep", "A Tribe Called Quest"],
  },
  {
    scene: "UK / drill",
    artists: ["Central Cee", "Dave", "Stormzy", "Headie One"],
  },
];

/**
 * The track embedded on the page. Swap the id for any Spotify track - it is the
 * segment after /track/ in a Spotify share link.
 */
export const nowPlaying = {
  trackId: "6HZILIRieu8S0iqY8kIKhj",
  title: "DNA.",
  artist: "Kendrick Lamar",
};
