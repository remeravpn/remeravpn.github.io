// pages/api/houses.js
import prisma from '../../lib/prisma.js';

export default async function handler(req, res) {
  const { district, sector, sort } = req.query;
  const where = {};
  if (district) {
    where.district = { name: district };
  }
  if (sector) {
    where.sector = { name: sector };
  }

  const orderBy = {};
  if (sort === 'price_asc') orderBy.price = 'asc';
  else if (sort === 'price_desc') orderBy.price = 'desc';

  const houses = await prisma.house.findMany({
    where,
    include: { district: true, sector: true },
    orderBy,
  });
  res.status(200).json(houses);
}
