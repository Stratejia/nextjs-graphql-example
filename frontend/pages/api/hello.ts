import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

// TODO: Remove this, it's boilerplate code
function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}

export default handler;
