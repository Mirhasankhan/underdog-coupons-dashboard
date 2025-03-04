const recentBookings = [
  {
    propertyUsed: "Car Parking Lot - Downtown",
    houseName: "Skyline Towers",
    status: "Completed",
    time: "2025-02-26T14:30:00Z",
  },
  {
    propertyUsed: "Underground Garage - Mall",
    houseName: "Greenview Residency",
    status: "Ongoing",
    time: "2025-02-26T16:00:00Z",
  },
  {
    propertyUsed: "Underground Garage - Mall",
    houseName: "Greenview Residency",
    status: "Ongoing",
    time: "2025-02-26T16:00:00Z",
  },
  {
    propertyUsed: "Open Parking - Beachside",
    houseName: "Ocean Breeze Apartments",
    status: "Canceled",
    time: "2025-02-25T10:15:00Z",
  },
];

const RecentBookings = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
      <ul>
        {recentBookings.map((booking, index) => (
          <li
            key={index}
            className="p-3 border-b last:border-none flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{booking.propertyUsed}</p>
              <p className="text-sm text-gray-500">{booking.houseName}</p>
              <p className="text-sm text-gray-400">
                {new Date(booking.time).toLocaleString()}
              </p>
            </div>
            <span
              className={`px-2 py-1 text-sm rounded ${
                booking.status === "Completed"
                  ? "bg-green-200 text-green-800"
                  : booking.status === "Ongoing"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {booking.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBookings;
