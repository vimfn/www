import { octokit } from "@/lib/octokit";
import { unstable_cache as cache } from "next/cache";

const getStats = cache(
  async () => {
    const gql = String.raw;
    const { user } = await octokit.graphql<{
      user: {
        repositoriesContributedTo: { totalCount: number };
        pullRequests: { totalCount: number };
        openIssues: { totalCount: number };
        closedIssues: { totalCount: number };
      };
    }>(
      gql`
        query ($login: String!) {
          user(login: $login) {
            repositoriesContributedTo(
              first: 1
              contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
            ) {
              totalCount
            }
            pullRequests(first: 1) {
              totalCount
            }
            openIssues: issues(states: OPEN) {
              totalCount
            }
            closedIssues: issues(states: CLOSED) {
              totalCount
            }
          }
        }
      `,
      { login: "arnvgh" }
    );
    return {
      issues: user.closedIssues.totalCount + user.openIssues.totalCount,
      prs: user.pullRequests.totalCount,
      contribs: user.repositoriesContributedTo.totalCount,
    };
  },
  [],
  { revalidate: 86400 }
);

function BackgroundPattern() {
  // For uniform patterns
  let seed = 1;
  function seededRandom() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  const colours = ["#39d353", "#0e4429", "#006d32", "#161b22"];
  const days = new Array(49)
    .fill(null)
    .map((_) => colours[Math.floor(seededRandom() * colours.length)]);
  return (
    <div className="absolute top-0 z-1 grid grid-cols-12 grid-rows-12 gap-1">
      {days.map((c, i) => (
        <div
          key={i}
          className="size-3 rounded-[0.2rem]"
          style={{ background: c }}
        />
      ))}
    </div>
  );
}

function GitHubStatsData({
  label,
  value,
}: {
  label: React.ReactNode;
  value: number;
}) {
  return (
    <div>
      <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">
        {label}:
      </span>
      {value}
    </div>
  );
}

const GHStats = async () => {
  const { issues, prs, contribs } = await getStats();
  return (
    <div className="border shadow-sm dark:bg-[#0d1117] rounded-lg h-36 relative">
      <BackgroundPattern />
      <div className="flex flex-row flex-wrap gap-x-6 sm:gap-x-4 md:gap-x-6 absolute bottom-1 p-2">
        <GitHubStatsData label="Issues" value={issues} />
        <GitHubStatsData label="PRs" value={prs} />
        <hr className="w-full border-none" />
        <GitHubStatsData
          label={
            <>
              Contributed to
              <span className="sm:hidden md:inline"> (last year)</span>
            </>
          }
          value={contribs}
        />
      </div>
    </div>
  );
};

export default GHStats;
