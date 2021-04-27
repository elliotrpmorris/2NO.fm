import Cors from 'cors';
import { getPosts } from '../../../lib/getPosts';
import initMiddleware from '../../../lib/initMiddleware';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'OPTIONS'],
  })
);

export default async function latest(req, res) {
  await cors(req, res);

  const posts = await getPosts();
  const post = post[0];
  if (post) {
    res.json(post);
    return;
  }
  res.status(404).json({
    message: `Sorry not found. Out of all the ${post.length} posts, we didn't find this one.`,
  });
}
