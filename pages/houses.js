// pages/houses.js
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HouseCard from '../components/HouseCard';

export default function Houses() {
  const [houses, setHouses] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filters, setFilters] = useState({ district: '', sector: '', sort: '' });

  // Load districts for filter dropdowns
  useEffect(() => {
    fetch('/api/districts')
      .then((r) => r.json())
      .then(setDistricts);
  }, []);

  // Load houses whenever filters change
  useEffect(() => {
    const qs = new URLSearchParams(filters).toString();
    fetch(`/api/houses?${qs}`)
      .then((r) => r.json())
      .then(setHouses);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Houses for Rent</h1>
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* District filter */}
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
          {/* Sector filter */}
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
          {/* Sort */}
          <select
            name="sort"
            className="border rounded p-2"
            value={filters.sort}
            onChange={handleFilterChange}
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
          </select>
        </div>
        {/* List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </main>
    </div>
  );
}
