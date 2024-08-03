import { http } from '@google-cloud/functions-framework';
import { getParts } from './multipart.js';
import { addCorsHeaders } from './cors.js';

http('run', async (req, res) => {

  if (req.method !== 'POST') return res.sendStatus(405);

  addCorsHeaders(req, res);

  const { fields, files } = await getParts(req);

  res.json({
    fields,
    files: files.map(o => ({ [o.fieldName]: { filename: o.filename, size: o.buf.length } }))
  });
});
