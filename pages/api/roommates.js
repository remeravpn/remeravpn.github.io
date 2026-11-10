// pages/api/roommates.js
import prisma from '../../lib/prisma.js';

export default async function handler(req, res) {
  const { district, sector, hobby, personality, sort } = req.query;
  const where = {};
  if (district) {
    where.district = { name: district };
  }
  if (sector) {
    where.sector = { name: sector };
  }
  if (hobby) {
    // simple contains filter on comma‑separated hobbies string
    where.hobbies = { contains: hobby, mode: 'insensitive' };
  }
  if (personality) {
    where.personality = { contains: personality, mode: 'insensitive' };
  }

  const orderBy = {};
  if (sort === 'age_asc') orderBy.age = 'asc';
  else if (sort === 'age_desc') orderBy.age = 'desc';

  const roommates = await prisma.roommate.findMany({
    where,
    include: { district: true, sector: true },
    orderBy,
  });
  res.status(200).json(roommates);
}
