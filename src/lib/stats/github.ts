import type { GithubStats, HeatmapDay } from "@/types";
import { handles } from "@/data/links";
import snapshot from "@/data/stats-snapshot.json";
import { REVALIDATE, withFallback } from "./shared";

const QUERY = `query u($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
    pullRequests(states: MERGED) { totalCount }
    repositories(privacy: PUBLIC, ownerAffiliations: OWNER) { totalCount }
  }
}`;

const LEVELS: Record<string, HeatmapDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export function getGithub(): Promise<GithubStats> {
  return withFallback<GithubStats>("github", async () => {
    const token = process.env.GITHUB_TOKEN;
    if (!token) throw new Error("GITHUB_TOKEN is not set");

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: handles.github } }),
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) throw new Error(`github http ${res.status}`);

    const json = await res.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);

    const user = json.data?.user;
    if (!user) throw new Error("github returned no user");
    const cal = user.contributionsCollection.contributionCalendar;

    const calendar: HeatmapDay[] = cal.weeks.flatMap(
      (week: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: LEVELS[day.contributionLevel] ?? 0,
        })),
    );

    return {
      login: handles.github,
      totalContributions: cal.totalContributions,
      mergedPullRequests: user.pullRequests.totalCount,
      publicRepos: user.repositories.totalCount,
      calendar,
    };
  }, snapshot.github as Omit<GithubStats, "stale">);
}
