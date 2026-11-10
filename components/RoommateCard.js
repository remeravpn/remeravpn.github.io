// components/RoommateCard.js
export default function RoommateCard({ roommate }) {
  const {
    name,
    age,
    gender,
    bio,
    hobbies,
    personality,
    district,
    sector,
  } = roommate;

  const hobbyList = hobbies ? hobbies.split(',') : [];

  return (
    <div className="border rounded shadow-sm p-4 bg-white flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-1">{name}, {age}</h2>
      <p className="text-sm text-gray-600 mb-1">{gender} • {personality}</p>
      <p className="text-sm text-gray-500 mb-1">
        {district?.name} / {sector?.name}
      </p>
      <p className="text-sm text-gray-700 flex-grow mb-2">{bio}</p>
      {hobbyList.length > 0 && (
        <div className="mb-2">
          <span className="font-medium text-gray-600">Hobbies:</span>{' '}
          {hobbyList.map((h, i) => (
            <span key={i} className="text-xs bg-gray-200 rounded px-1 mr-1">
              {h.trim()}
            </span>
          ))}
        </div>
      )}
      <button className="mt-auto bg-green-600 text-white py-1 rounded hover:bg-green-700">
        View Profile
      </button>
    </div>
  );
}
