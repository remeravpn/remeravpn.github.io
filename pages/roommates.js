// pages/roommates.js
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import RoommateCard from '../components/RoommateCard';

export default function Roommates() {
  const [roommates, setRoommates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filters, setFilters] = useState({
    district: '',
    sector: '',
    hobby: '',
    personality: '',
    sort: '',
  });

  // Load districts for dropdowns
  useEffect(() => {
    fetch('/api/districts')
      .then((r) => r.json())
      .then(setDistricts);
  }, []);

  // Load roommates whenever filters change
  useEffect(() => {
    const qs = new URLSearchParams(filters).toString();
    fetch(`/api/roommates?${qs}`)
      .then((r) => r.json())
      .then(setRoommates);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Find a Roommate</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            name="district"
            className="border rounded p-2"
            value={filters.district}
            onChange={handleFilterChange}
          >
            <option value="">All Districts</option>
            {districts.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
          <select
            name="sector"
            className="border rounded p-2"
            value={filters.sector}
            onChange={handleFilterChange}
          >
            <option value="">All Sectors</option>
            {districts
              .find((d) => d.name === filters.district)
              ?.sectors.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
          </select>
          <select
            name="hobby"
            className="border rounded p-2"
            value={filters.hobby}
            onChange={handleFilterChange}
          >
            <option value="">Any Hobby</option>
            {/* static hobby list – expand as needed */}
            <option value="coding">Coding</option>
            <option value="hiking">Hiking</option>
            <option value="basketball">Basketball</option>
            <option value="music">Music</option>
            <option value="gaming">Gaming</option>
            <option value="cooking">Cooking</option>
            <option value="travel">Travel</option>
            <option value="photography">Photography</option>
          </select>
          <select
            name="personality"
            className="border rounded p-2"
            value={filters.personality}
            onChange={handleFilterChange}
          >
            <option value="">Any Personality</option>
            <option value="outgoing">Outgoing</option>
            <option value="friendly">Friendly</option>
            <option value="sociable">Sociable</option>
          </select>
          <select
            name="sort"
            className="border rounded p-2"
            value={filters.sort}
            onChange={handleFilterChange}
          >
            <option value="">Sort By</option>
            <option value="age_asc">Age: Young → Old</option>
            <option value="age_desc">Age: Old → Young</option>
          </select>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roommates.map((rm) => (
            <RoommateCard key={rm.id} roommate={rm} />
          ))}
        </div>
      </main>
    </div>
  );
}
