import { allPosts } from "contentlayer/generated";

export type Tag = {
  name: string;
  count: number;
};

export function allTags() {
  const posts = allPosts;
  const tags: Tag[] = [];
  for (const post of posts) {
    if (post.draft == true) continue;
    for (const tag of post.tags) {
      const existingTag = tags.find((t) => t.name === tag);
      if (existingTag) {
        existingTag.count++;
      } else {
        tags.push({ name: tag, count: 1 });
      }
    }
  }
  return tags;
}
