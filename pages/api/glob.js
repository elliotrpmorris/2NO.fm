import fs from 'fs';
import { promisify } from 'util';
// eslint-disable-next-line no-unused-vars

const readdir = promisify(fs.readdir);
