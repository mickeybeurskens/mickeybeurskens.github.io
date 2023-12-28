enum ProjectType {
  OpenSourceSoftware = "opensourcesoftware",
  Talks = "talks"
}

export type ProjectIndex = {
  id: number;
  title: string;
  description: string;
  date: string;
  section: ProjectType;
  image: string;
  blog: string;
  url: string;
}
