export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug?: string;
  description?: string;
  readingTime?: string;
  content?: BlogBlock[];
}

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | { type: "list"; items: string[] }
  | {
      type: "links";
      items: { title: string; href: string; description: string }[];
    };

/**
 * External posts and published work. Set `isExternal: false` and add `slug` +
 * `content` to host a post on the site instead of linking out.
 */

export const blogsData: Blog[] = [
  {
    title: "Should You Trust Your AI?",
    date: "October 2026",
    claps: 0,
    tags: ["Artificial Intelligence", "Machine Learning", "Distribution Shift"],
    link: "https://theperksofbeinganusha.substack.com/p/should-you-trust-ai?r=8pbasb&utm_campaign=post&utm_medium=web",
    isExternal: true,
    description:
      "Exploring distribution shift, model reliability, and why building a good AI model is only half the problem.",
    readingTime: "5 min read",
  },
];


export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}
