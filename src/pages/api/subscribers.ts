import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const API_KEY = process.env.REVUE_API_KEY;
    const response = await fetch("https://www.getrevue.co/api/v2/subscribers", {
      headers: {
        Authorization: `Token ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  
    const data = await response.json();
    const count = data.length;
  
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1200, stale-while-revalidate=600"
    );
  
    return res.status(200).json({ count });
  }