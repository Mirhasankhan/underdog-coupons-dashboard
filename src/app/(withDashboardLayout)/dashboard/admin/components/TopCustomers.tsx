const topCustomers = [
    {
      customerName: "John Doe",
      totalBookings: 25,
      totalExpense: 1200.5
    },
    {
      customerName: "Emma Smith",
      totalBookings: 18,
      totalExpense: 950.75
    },
    {
      customerName: "Emma Smith",
      totalBookings: 18,
      totalExpense: 950.75
    },
    {
      customerName: "Michael Johnson",
      totalBookings: 15,
      totalExpense: 820.0
    }
  ];
  
  const TopCustomers = ()=> {
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Top Customers</h2>
        <ul>
          {topCustomers.map((customer, index) => (
            <li
              key={index}
              className="p-3 border-b last:border-none flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{customer.customerName}</p>
                <p className="text-sm text-gray-500">
                  Total Bookings: {customer.totalBookings}
                </p>
              </div>
              <span className="text-sm font-semibold bg-blue-200 text-blue-800 px-3 py-1 rounded">
                ${customer.totalExpense.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default TopCustomers
  