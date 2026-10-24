
export type Movie = {
  title: string;
  year: string;
  cover?: string;
  score?: number;
  runtime?: number;
  genres?: string[];
  synopsis?: string;
  note?: string;
  url?: string;
};

export type MovieSection = {
  id: string;
  title: string;
  items: Movie[];
};

export const movieSections: MovieSection[] = [
  {
    id: "favourites",
    title: "Favourite Movies",
    items: [
      {
        title: "How to Lose a Guy in 10 Days",
        year: "2003",
        cover: "/movies/how to lose a guy.jpeg",
        genres: ["Romance", "Comedy"],
      },
      {
        title: "War Dogs",
        year: "2016",
        cover: "/movies/wardogs.jpg",
        genres: ["Crime", "Comedy", "Drama"],
      },
      {
        title: "Inception",
        year: "2010",
        cover: "/movies/inception.jpeg",
        genres: ["Sci-Fi", "Action", "Thriller"],
      },
      {
        title: "Interstellar",
        year: "2014",
        cover: "/movies/interstellar.jpeg",
        genres: ["Sci-Fi", "Drama"],
      },
      {
        title: "La La Land",
        year: "2016",
        cover: "/movies/la la land.jpeg",
        genres: ["Romance", "Musical", "Drama"],
      },
      {
        title: "Miss Peregrine's Home for Peculiar Children",
        year: "2016",
        cover: "/movies/peculiar children.jpeg",
        genres: ["Fantasy", "Adventure"],
      },
      {
        title: "Sully",
        year: "2016",
        cover: "/movies/sully.jpeg",
        genres: ["Drama", "Biography"],
      },
      {
        title: "The Big Short",
        year: "2015",
        cover: "/movies/the big short.jpeg",
        genres: ["Drama", "Biography"],
      },
      {
        title: "The Martian",
        year: "2015",
        cover: "/movies/the martian.jpeg",
        genres: ["Sci-Fi", "Adventure"],
      },
      {
        title: "The Grand Budapest Hotel",
        year: "2014",
        cover: "/movies/grand budapest.jpg",
        genres: ["Comedy", "Adventure"],
      },
      {
        title: "The Theory of Everything",
        year: "2014",
        cover:  "/movies/The_Theory_of_Everything_(2014).jpg",
        genres: ["Biography", "Drama"],
      },
      {
        title: "Paper Towns",
        year: "2015",
        cover:  "/movies/paper towns.jpg",
        genres: ["Mystery", "Romance"],
      },
      {
        title: "Love, Rosie",
        year: "2014",
        cover:  "/movies/love rosie.jpeg",
        genres: ["Romance", "Comedy"],
      },
      {
        title: "Exhuma",
        year: "2024",
        cover: "/movies/exhuma.webp",
        genres: ["Horror", "Mystery"],
      },
      {
        title: "Project Hail Mary",
        year: "2026",
        cover: "/movies/project hail mary.jpeg",
        genres: ["Sci-Fi", "Adventure"],
      },
    ],
  },
  {
    id: "more",
    title: "More to Explore",
    items: [],
  },
];

// Compatibility exports for other parts of the original project.
export const movieList = movieSections.flatMap(
  (section) => section.items
);

export const movieStats = {
  favorites: movieList.length,
  watched: movieList.length,
  total: movieList.length,
};
