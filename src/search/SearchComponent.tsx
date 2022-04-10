import { FC, useEffect, useState } from "react";
import { SearchResultComponent } from "./components/SearchResultComponent";
import { RootObject } from "./models/LocationsList";
import VastTrafikService from "./VastTrafikService";

export const SearchComponent: FC = () => {
  const [locations, setLocations] = useState<RootObject>();
  const searchTerm = "almedal";

  useEffect(() => {
    VastTrafikService.searchLocations(searchTerm).then((response) => {
      setLocations(response);
    });
  }, []);

  return (
    <div>
      {locations ? (
        <>
          <SearchResultComponent list={locations.LocationList} />
        </>
      ) : (
        <p>No stops found.</p>
      )}
    </div>
  );
};

export default SearchComponent;
