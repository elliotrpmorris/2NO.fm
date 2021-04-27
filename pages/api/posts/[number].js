import Cors from 'cors';
import { getPost } from '../../../lib/getPosts';
import initMiddleware from '../../../lib/initMiddleware';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'OPTIONS'],
  })
);

export default async function postByNumber(req, res) {
  await cors(req, res);

  const post = await getPost(req.query.number);
  if (post) {
    res.json(post);
    return;
  }
  res
    .status(404)
    .json({ message: `Sorry, we could not find post #${req.query.number}` });
}
