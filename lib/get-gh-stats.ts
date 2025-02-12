import { octokit } from "@/lib/octokit";
import { unstable_cache as cache } from "next/cache";

export const getGHStats = cache(
  async () => {
    const gql = String.raw;
    const { user } = await octokit.graphql<{
      user: {
        repositoriesContributedTo: { totalCount: number };
        pullRequests: { totalCount: number };
        openIssues: { totalCount: number };
        closedIssues: { totalCount: number };
        followers: { totalCount: number };
        repositories: {
          totalCount: number;
          nodes: {
            stargazers: { totalCount: number };
          }[];
          pageInfo: {
            hasNextPage: boolean;
            endCursor: string | null;
          };
        };
      };
    }>(
      gql`
        query ($login: String!) {
          user(login: $login) {
            pullRequests(first: 1) {
              totalCount
            }
            openIssues: issues(states: OPEN) {
              totalCount
            }
            closedIssues: issues(states: CLOSED) {
              totalCount
            }
            followers {
              totalCount
            }
            repositories(ownerAffiliations: OWNER, first: 100) {
              totalCount
              nodes {
                stargazers {
                  totalCount
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      `,
      { login: "vimfn" },
    );
    return {
      issues: user.closedIssues.totalCount + user.openIssues.totalCount,
      prs: user.pullRequests.totalCount,
      followers: user.followers.totalCount,
      stars: user.repositories.nodes.reduce(
        (totalStars, repo) => totalStars + repo.stargazers.totalCount,
        0,
      ),
    };
  },
  [],
  { revalidate: 3600 }, // revalidates 1hr
);
