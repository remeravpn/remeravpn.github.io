// prisma/seed.js
import fs from 'fs';
import path from 'path';
import prisma from '../lib/prisma.js';

async function main() {
  // Load districts & sectors JSON
  const districtsPath = path.resolve('data', 'kigali-districts.json');
  const districtsData = JSON.parse(fs.readFileSync(districtsPath, 'utf-8'));

  // Insert districts and sectors
  for (const district of districtsData) {
    const districtRec = await prisma.district.create({
      data: { name: district.name },
    });
    for (const sectorName of district.sectors) {
      await prisma.sector.create({
        data: {
          name: sectorName,
          districtId: districtRec.id,
        },
      });
    }
  }

  // Helper to pick random district/sector
  const allSectors = await prisma.sector.findMany({ include: { district: true } });
  function randomSector() {
    const s = allSectors[Math.floor(Math.random() * allSectors.length)];
    return s;
  }

  // Sample houses
  const sampleHouses = [
    {
      title: 'Cozy Studio near University of Rwanda',
      description: 'A bright studio with kitchen, close to campus.',
      price: 150000,
      imgUrl: '/images/house1.jpg',
    },
    {
      title: 'Spacious 2‑bedroom in Gasabo',
      description: 'Great view, fully furnished, 5‑min drive to campus.',
      price: 250000,
      imgUrl: '/images/house2.jpg',
    },
    {
      title: 'Modern apartment in Kicukiro',
      description: 'Secure building, gym, and laundry facilities.',
      price: 200000,
      imgUrl: '/images/house3.jpg',
    },
  ];

  for (const h of sampleHouses) {
    const sector = randomSector();
    await prisma.house.create({
      data: {
        ...h,
        districtId: sector.districtId,
        sectorId: sector.id,
      },
    });
  }

  // Sample roommates
  const sampleRoommates = [
    {
      name: 'Alice',
      age: 21,
      gender: 'Female',
      bio: 'Computer Science student, loves coding and hiking.',
      hobbies: 'coding,hiking,reading',
      personality: 'outgoing',
    },
    {
      name: 'Bob',
      age: 22,
      gender: 'Male',
      bio: 'Engineering student, enjoys basketball and music.',
      hobbies: 'basketball,music,gaming',
      personality: 'friendly',
    },
    {
      name: 'Clara',
      age: 20,
      gender: 'Female',
      bio: 'Business student, foodie and traveler.',
      hobbies: 'cooking,travel,photography',
      personality: 'sociable',
    },
  ];

  for (const r of sampleRoommates) {
    const sector = randomSector();
    await prisma.roommate.create({
      data: {
        ...r,
        districtId: sector.districtId,
        sectorId: sector.id,
      },
    });
  }

  console.log('🌱 Seed data inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
