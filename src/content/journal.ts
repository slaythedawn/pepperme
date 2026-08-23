export type JournalEntry = {
  issue: string;
  category: string;
  title: string;
  readTime: string;
  author: string;
  /** Image slot id in imagery.json. */
  image: string;
};

export const JOURNAL: JournalEntry[] = [
  {
    issue: "Issue 014",
    image: "journal-014",
    category: "Recovery",
    title: "What twelve weeks of the recovery program actually do to a human knee.",
    readTime: "14 min read",
    author: "Dr. A. Reid",
  },
  {
    issue: "Issue 013",
    image: "journal-013",
    category: "Hormonal",
    title: "Why one number on your hormonal panel isn't the number to fix.",
    readTime: "9 min read",
    author: "Dr. M. Holt",
  },
  {
    issue: "Issue 012",
    image: "journal-012",
    category: "Longevity",
    title: "The longevity program, weekly. The case for and the case against.",
    readTime: "22 min read",
    author: "Dr. J. O'Brien",
  },
];
