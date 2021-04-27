const { promisify } = require('util');
const path = require('path');
const marked = require('meta-marked');
const { readFile, readdir } = require('fs');
const slug = require('speakingurl');

const readAFile = promisify(readFile);
const readDirContents = promisify(readdir);
const format = require('date-fns/format');

const pad = num => `000${num}`.substr(-3);

let posts;

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a rel="noopener noreferrer" target="_blank" href="${href}"> ${text}</a>`;
};

const loadPosts = async () => {
  // Cached posts
  if (posts) {
    return posts;
  }

  const postsDir = path.join(process.cwd(), 'posts');
  const files = (await readDirContents(postsDir)).filter(file =>
    file.endsWith('.md')
  );

  const markdownPromises = files.map(file =>
    readAFile(path.join(postsDir, file), 'utf-8')
  );
  const postMarkdown = await Promise.all(markdownPromises);

  posts = postMarkdown
    .map(md => marked(md, { renderer })) // convert to markdown
    .map((post, i) => {
      const { number } = post.meta;

      return {
        ...post.meta,
        slug: `/post/${number}/${slug(post.meta.title)}`,
        html: post.html,
        notesFile: files[i],
        displayDate: format(parseFloat(post.meta.date), 'MMM do, yyyy'),
        displayNumber: pad(number),
      };
    }) // flatten
    .reverse();

  return posts;
};

async function getPosts(filter) {
  // eslint-disable-next-line no-shadow
  const postsForGetPosts = await loadPosts();
  const now = Date.now();
  return filter === 'all'
    ? postsForGetPosts
    : postsForGetPosts.filter(post => post.date < now);
}

async function getPost(number) {
  const postsForGetPost = await loadPosts();
  const post = postsForGetPost.find(
    postItem => postItem.displayNumber === number
  );
  return post;
}

module.exports = {
  getPosts,
  getPost,
};
