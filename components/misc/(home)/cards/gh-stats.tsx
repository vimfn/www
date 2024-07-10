import { getGHStats } from "@/lib/get-gh-stats";

export const GHStats = async () => {
  const { issues, prs, followers, stars } = await getGHStats();
  return (
    <div className="bg-[#f7f2f2] dark:bg-[#0d1117] rounded-lg h-36 relative group hover:scale-95 duration-500 transform-gpu">
      <a
        href="http://github.com/vimfn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BackgroundPattern />
        <div className="flex flex-row flex-wrap gap-x-6 sm:gap-x-4 md:gap-x-6 absolute bottom-1 p-2">
          <GitHubStatsData label="Stars" value={stars} />
          <GitHubStatsData label="Followers" value={followers} />
          <GitHubStatsData label="PRs" value={prs} />
          <GitHubStatsData label="Issues" value={issues} />
        </div>
      </a>
    </div>
  );
};

const GitHubStatsData = ({
  label,
  value,
}: {
  label: React.ReactNode;
  value: number;
}) => {
  return (
    <div>
      <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">
        {label}:
      </span>
      {value}
    </div>
  );
};

const BackgroundPattern = () => {
  let seed = 1;
  function seededRandom() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  const colours = ["#39d353", "#0e4429","#0e4429", "#006d32", "#161b22"];
  const days = new Array(51)
    .fill(null)
    .map((_) => colours[Math.floor(seededRandom() * colours.length)]);
  return (
    <div className="top-0 z-1 grid grid-cols-12 grid-rows-12 gap-1">
      {days.map((c, i) => (
        <div
          key={i}
          className="size-3 rounded-[0.2rem]"
          style={{ background: c }}
        />
      ))}
    </div>
  );
};
