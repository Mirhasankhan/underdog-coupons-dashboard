const topSpots = [
  {
    spotName: "Downtown Lot A",
    location: "Main Street, NYC",
    totalBookings: 120,
    revenueGenerated: 3200.75,
    rating: 4.7,
  },
  {
    spotName: "Mall Parking - Level 2",
    location: "Greenwood Mall",
    totalBookings: 95,
    revenueGenerated: 2750.5,
    rating: 4.5,
  },
  {
    spotName: "Beachside Open Lot",
    location: "Ocean Drive, Miami",
    totalBookings: 80,
    revenueGenerated: 2400.0,
    rating: 4.3,
  },
];

const TopSpots = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Top Spots for Booking</h2>
      <ul>
        {topSpots.map((spot, index) => (
          <li
            key={index}
            className="p-3 border-b last:border-none flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{spot.spotName}</p>
              <p className="text-sm text-gray-500">{spot.location}</p>
              <p className="text-sm text-gray-400">
                {spot.totalBookings} bookings
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold bg-green-200 text-green-800 px-3 py-1 rounded">
                ${spot.revenueGenerated.toFixed(2)}
              </p>
              <p className="text-xs text-yellow-500 font-medium">
                ⭐ {spot.rating}/5
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSpots;
