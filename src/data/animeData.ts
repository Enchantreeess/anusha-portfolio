import raw from "./anime.json";

export type AnimeStatus = "Watching" | "Completed" | "On hold" | "Dropped";

export type Anime = {
  title: string;
  status: AnimeStatus;
  episodes: number | null;
  year: number | null;
  /** Free text shown when there is no episode count - "Movie", manga progress, etc. */
  note?: string;
  cover?: string;
  url?: string;
  /** Detail-view fields, resolved from AniList. */
  synopsis?: string;
  genres?: string[];
  score?: number;
  studio?: string;
  runtime?: number;
};

/**
 * The list lives in `anime.json` and the array order IS the display order, so
 * reordering the site is just moving blocks in that file - no code changes.
 *
 * To add one: copy any block, set `title`, and either point `cover` at an image
 * in /public/anime or leave it out for a blueprint placeholder tile.
 */
export const animeList = raw as Anime[];

export const animeStats = {
  total: animeList.length,
  watching: animeList.filter((a) => a.status === "Watching").length,
  completed: animeList.filter((a) => a.status === "Completed").length,
  episodes: animeList.reduce((sum, a) => sum + (a.episodes ?? 0), 0),
  withCovers: animeList.filter((a) => a.cover).length,
};
