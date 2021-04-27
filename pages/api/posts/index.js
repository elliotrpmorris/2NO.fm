import Cors from 'cors';
import { getPosts } from '../../../lib/getPosts';
import initMiddleware from '../../../lib/initMiddleware';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'OPTIONS'],
  })
);

export default async function posts(req, res) {
  await cors(req, res);
  res.json(await getPosts());
}
