export interface Anime {
  title: string;
  altTitle?: string;
  href: string;
  imgName: string;
  starred?: boolean;
}

export const AnimeData: Anime[] = [
  {
    title: "Serial Experiments Lain",
    href: "https://myanimelist.net/anime/339/Serial_Experiments_Lain",
    imgName: "lain",
    starred: true,
  },
  {
    title: "Classroom of the Elite",
    href: "https://myanimelist.net/anime/35507/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e",
    imgName: "coe",
    starred: true,
  },
  {
    title: "Assassination Classroom",
    href: "https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu",
    imgName: "korosensei",
    starred: true,
  },
  {
    title: "Darling in the FranXX",
    href: "https://myanimelist.net/anime/35849/Darling_in_the_FranXX",
    imgName: "darling",
    starred: true,
  },
  {
    title: "Angel Beats!",
    href: "https://myanimelist.net/anime/6547/Angel_Beats",
    imgName: "angel",
  },
  {
    title: "No Game No Life",
    href: "https://myanimelist.net/anime/19815/No_Game_No_Life",
    imgName: "game",
  },
  {
    title: "Re:Zero kara Hajimeru Isekai Seikatsu",
    altTitle: "Re:Zero − Starting Life in Another World",
    href: "https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu",
    imgName: "rezero",
    starred: true,
  },
  {
    title: "Shingeki no Kyojin",
    altTitle: "Attack on Titan",
    href: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
    imgName: "aot",
  },
  {
    title: "Sword Art Online",
    href: "https://myanimelist.net/anime/11757/Sword_Art_Online",
    imgName: "sao",
  },
  {
    title: "Yakusoku no Neverland",
    altTitle: "The Promised Neverland",
    href: "https://myanimelist.net/anime/37779/Yakusoku_no_Neverland",
    imgName: "promised",
    starred: true,
  },
];
