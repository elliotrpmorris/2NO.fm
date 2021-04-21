const { promisify } = require('util');
const path = require('path');
const marked = require('meta-marked');
const { readFile, readdir } = require('fs');
const slug = require('speakingurl');

const readAFile = promisify(readFile);
const readDirContents = promisify(readdir);
const format = require('date-fns/format');

const pad = num => `000${num}`.substr(-3);

let shows;

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a rel="noopener noreferrer" target="_blank" href="${href}"> ${text}</a>`;
};

const loadShows = async () => {
  // Cached shows
  if (shows) {
    return shows;
  }

  const showsDir = path.join(process.cwd(), 'shows');
  const files = (await readDirContents(showsDir)).filter(file =>
    file.endsWith('.md')
  );

  const markdownPromises = files.map(file =>
    readAFile(path.join(showsDir, file), 'utf-8')
  );
  const showMarkdown = await Promise.all(markdownPromises);

  shows = showMarkdown
    .map(md => marked(md, { renderer })) // convert to markdown
    .map((show, i) => {
      const { number } = show.meta;

      return {
        ...show.meta,
        slug: `/show/${number}/${slug(show.meta.title)}`,
        html: show.html,
        notesFile: files[i],
        displayDate: format(parseFloat(show.meta.date), 'MMM do, yyyy'),
        displayNumber: pad(number),
      };
    }) // flatten
    .reverse();

  return shows;
};

async function getShows(filter) {
  // eslint-disable-next-line no-shadow
  const showsForGetShows = await loadShows();
  const now = Date.now();
  return filter === 'all'
    ? showsForGetShows
    : showsForGetShows.filter(show => show.date < now);
}

async function getShow(number) {
  const showsForGetShow = await loadShows();
  const show = showsForGetShow.find(
    showItem => showItem.displayNumber === number
  );
  return show;
}

module.exports = {
  getShows,
  getShow,
};
