// "use client"; // Ensure this runs only on the client

// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import { Country, City } from "country-state-city";

// const SelectAddress = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [countryOptions, setCountryOptions] = useState([]);
//   const [cities, setCities] = useState([]);

//   // Load country data on client-side to avoid SSR issues
//   useEffect(() => {
//     const countries = Country.getAllCountries().map((country) => ({
//       value: country.isoCode,
//       label: country.name,
//     }));
//     setCountryOptions(countries);
//   }, []);

//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedCity(null);

//     // Load cities dynamically after country selection
//     const countryCities = City.getCitiesOfCountry(selectedOption.value).map(
//       (city) => ({
//         value: city.name,
//         label: city.name,
//       })
//     );

//     setCities(countryCities);
//   };

//   return (
//     <div className="bg-white rounded-md shadow-md p-6 grid grid-cols-2 gap-4">
//       {/* Country Select */}
//       <div>
//         <label className="block text-gray-700 font-medium mb-1">
//           🌍 Select Country
//         </label>
//         {countryOptions.length > 0 && (
//           <Select
//             options={countryOptions}
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             placeholder="Choose a country..."
//           />
//         )}
//       </div>

//       {/* City Select (Always Visible but Disabled Initially) */}
//       <div>
//         <label className="block text-gray-700 font-medium mb-1">
//           🏙️ Select City
//         </label>
//         <Select
//           options={cities}
//           value={selectedCity}
//           onChange={setSelectedCity}
//           placeholder="Select a country first..."
//           isDisabled={!selectedCountry} // Disable if no country selected
//         />
//       </div>
//     </div>
//   );
// };

// export default SelectAddress;
