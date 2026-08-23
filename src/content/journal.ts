export type JournalEntry = {
  issue: string;
  category: string;
  title: string;
  readTime: string;
  author: string;
  brief: string;
};

export const JOURNAL: JournalEntry[] = [
  {
    issue: "Issue 014",
    category: "Recovery",
    title: "What twelve weeks of the recovery program actually do to a human knee.",
    readTime: "14 min read",
    author: "Dr. A. Reid",
    brief: "A knee, photographed plainly on a domestic floor.",
  },
  {
    issue: "Issue 013",
    category: "Hormonal",
    title: "Why one number on your hormonal panel isn't the number to fix.",
    readTime: "9 min read",
    author: "Dr. M. Holt",
    brief: "A printed pathology report on a kitchen bench.",
  },
  {
    issue: "Issue 012",
    category: "Longevity",
    title: "The longevity program, weekly. The case for and the case against.",
    readTime: "22 min read",
    author: "Dr. J. O'Brien",
    brief: "An adult in their fifties walking, mid-morning, suburban street.",
  },
];
