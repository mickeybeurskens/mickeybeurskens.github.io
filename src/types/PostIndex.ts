enum PostType {
  Blog = 'blog',
  Research = 'research',
  Project = 'project',
  Guide = 'guide',
  Talk = 'talk',
  Podcast = 'podcast',
}

export type PostIndex = {
  id: string;
  section: string[];
  type: PostType;
  date: string;
  title: string;
  description: string;
  url: string;
}
