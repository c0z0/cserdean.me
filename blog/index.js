import dynamic from 'next/dynamic';

const posts = {
  'hello-world': dynamic(import('./posts/hello-world.mdx'))
};

export default (page) => {
  return true && posts[page];
};

export const idToTitle = (k) => k[0].toUpperCase() + k.replace('-', ' ').slice(1);

export const getTitles = () =>
  Object.keys(posts).map((k) => ({
    title: idToTitle(k),
    id: k
  }));
