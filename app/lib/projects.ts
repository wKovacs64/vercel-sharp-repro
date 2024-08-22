import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { getPlaiceholder } from 'plaiceholder';

const projectDirectory = path.join(process.cwd(), 'projects');
const publicDirectory = path.join(process.cwd(), 'public');

export async function getAllProjects(): Promise<Project[]> {
  const projectFiles = await fs.readdir(projectDirectory);
  const projectPromises = projectFiles.map(importProjectFile);

  return Promise.all(projectPromises);
}

export type Project = Awaited<ReturnType<typeof importProjectFile>>;

async function importProjectFile(filename: string) {
  const filePath = path.join(projectDirectory, filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const imagePath = path.join(publicDirectory, data.imageUrl);
  const { base64, img } = await getLocalImage(imagePath);

  return {
    frontmatter: data,
    markdownBody: content,
    imageBlurDataUrl: base64,
    imageWidth: img.width,
    imageHeight: img.height,
  };
}

async function getLocalImage(path: string) {
  const buffer = await fs.readFile(path);

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src: path, height, width },
  };
}
