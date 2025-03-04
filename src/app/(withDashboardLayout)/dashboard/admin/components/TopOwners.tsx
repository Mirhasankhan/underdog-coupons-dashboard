const topOwners = [
  {
    ownerName: "Robert Williams",
    totalSpots: 5,
    totalBookings: 320,
    totalRevenue: 15200.75,
    rating: 4.8,
  },
  {
    ownerName: "Sophia Johnson",
    totalSpots: 3,
    totalBookings: 210,
    totalRevenue: 9800.5,
    rating: 4.6,
  },
  {
    ownerName: "David Smith",
    totalSpots: 7,
    totalBookings: 190,
    totalRevenue: 8700.0,
    rating: 4.5,
  },
];

const TopOwners = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Top Owners</h2>
      <ul>
        {topOwners.map((owner, index) => (
          <li
            key={index}
            className="p-3 border-b last:border-none flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{owner.ownerName}</p>
              <p className="text-sm text-gray-500">
                Spots Owned: {owner.totalSpots}
              </p>
              <p className="text-sm text-gray-400">
                {owner.totalBookings} bookings
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold bg-blue-200 text-blue-800 px-3 py-1 rounded">
                ${owner.totalRevenue.toFixed(2)}
              </p>
              <p className="text-xs text-yellow-500 font-medium">
                ⭐ {owner.rating}/5
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopOwners;
