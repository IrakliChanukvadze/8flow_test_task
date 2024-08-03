import { NextApiRequest, NextApiResponse } from 'next';

let nextResponseCode: 200 | 500 = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (nextResponseCode === 500) {
      res.status(nextResponseCode).json({
        status: 'error',
        message: 'Something went wrong',
      });
      nextResponseCode = 200;
      return;
    }
    res.status(nextResponseCode).json({
      data: { datasetOne: [75, -30, -45, -90, 20, 30], datasetTwo: [15, -15, 25, -60, 80, 90] },
      status: 'success',
      message: 'Success!',
    });
    nextResponseCode = 500;

    return;
  }

  res.status(400).end();
}
