// pages/api/districts.js
import prisma from '../../lib/prisma.js';

export default async function handler(req, res) {
  const districts = await prisma.district.findMany({
    include: { sectors: true },
  });
  res.status(200).json(districts);
}
