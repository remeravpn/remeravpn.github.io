// components/HouseCard.js
import Link from 'next/link';

export default function HouseCard({ house }) {
  const { title, description, price, imgUrl, district, sector } = house;
  return (
    <div className="border rounded shadow-sm p-4 bg-white flex flex-col h-full">
      {imgUrl ? (
        <img src={imgUrl} alt={title} className="w-full h-32 object-cover rounded mb-2" />
      ) : (
        <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 flex-grow mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-1">
        {district?.name} / {sector?.name}
      </p>
      <p className="text-md font-bold text-blue-600 mb-2">RWF {price.toLocaleString()}</p>
      <Link
        href="#"
        className="mt-auto text-center bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
