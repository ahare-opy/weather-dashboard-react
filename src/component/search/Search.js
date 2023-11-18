import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await (
        await fetch(
          `${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`,
          geoApiOptions
        )
      ).json();

      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      return{
        options: [
          {
            value: `23.728888888 90.394444444`,
            label: `Dhaka, BD`
          }
        ]
      };
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
