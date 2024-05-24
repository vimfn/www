export interface books {
  title: string;
  author: string;
  year: number;
  type: "audiobook" | "book";
  poster: string;
  url: string;
  readingNow?: boolean;
  startDate?: string;
}

export const booksData: books[] = [
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: 1998,
    type: "audiobook",
    poster:
      "https://assets.literal.club/4/ckiuwi808258410zk5mcgpjult.jpg?size=600",
    url: "https://literal.club/book/a-brief-history-of-time-rh9hz",
    readingNow: true,
    startDate: "2023-12-26",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1994,
    type: "book",
    poster:
      "https://assets.literal.club/2/cks96wdkv16083271k980gtmkfvs.jpg?size=600",
    url: "https://literal.club/book/bin-dokuz-yuz-seksen-dort-ofejk",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 2013,
    type: "book",
    poster:
      "https://assets.literal.club/cover/5/ckhkj670c04430zhwrp3k4n64.jpg?size=600",
    url: "https://literal.club/book/the-great-gatsby-mlbi0",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 2001,
    type: "book",
    poster:
      "https://assets.literal.club/4/ckiu5jcug456940z612u5mo3xp.jpg?size=600",
    url: "https://literal.club/book/the-lord-of-the-rings-n69jk",
  },
  {
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    year: 2008,
    type: "book",
    poster:
      "https://assets.literal.club/4/cklgk3oh9147141ifbfwmmbysn.jpg?size=600",
    url: "https://literal.club/book/the-hound-of-the-baskervilles-jy7gm",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2010,
    type: "book",
    poster:
      "https://assets.literal.club/2/ckgexuagf38640y8qcxjon51e.jpg?size=600",
    url: "https://literal.club/book/the-da-vinci-code-npgdh",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 2014,
    type: "book",
    poster:
      "https://assets.literal.club/4/ckmbkav5b03041kjayv3n4jwh.jpg?size=600",
    url: "https://literal.club/book/the-alchemist-pjupi",
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    year: 1982,
    type: "book",
    poster:
      "https://assets.literal.club/cover/5/ckr1u3exn17ju01crrsb5m7s6.jpg?size=600",
    url: "https://literal.club/book/anne-frankthe-diary-of-a-young-girl-kqfon",
  },
  {
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    year: 2004,
    type: "book",
    poster:
      "https://assets.literal.club/4/ckn6dmh66108831i8djowf9emm.jpg?size=600",
    url: "https://literal.club/book/the-shadow-of-the-wind-idfkm",
  },
  {
    title: "A Promised Land",
    author: "Barack Obama",
    year: 2020,
    type: "book",
    poster:
      "https://assets.literal.club/1/ckiuwfgtn111020zk55i06ub6z.jpg?size=600",
    url: "https://literal.club/book/a-promised-land-3fyay",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2010,
    type: "book",
    poster:
      "https://assets.literal.club/1/ckh0ih3ul88870z6kqd9psdir.jpg?size=600",
    url: "https://literal.club/book/the-girl-with-the-dragon-tattoo-0h52q",
  },
];
