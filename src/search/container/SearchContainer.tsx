import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { SearchInputContainer } from "../components/SearchInputComponent";
import { SearchResultContainer } from "./SearchResultContainer";
import { RootObjectLocationList, StopLocation } from "../models/LocationsList";
import VastTrafikService from "../service/VastTrafikService";

export const SearchContainer: FC = () => {
  const [locations, setLocations] = useState<RootObjectLocationList>();
  const [searchInput, setSearchInput] = useState("");
  const [stop, setStop] = useState<StopLocation>();

  //const searchTerm = "almedal";
  //const searchId = "9021014001050000";

  useEffect(() => {
    VastTrafikService.searchLocations(searchInput).then((response) => {
      setLocations(response);
    });
  }, [searchInput]);

  return (
    <Grid container padding={2}>
      <Grid item sm={12}>
        <SearchInputContainer
          locations={locations?.LocationList.StopLocation}
          setLocation={setStop}
          setSearchInput={setSearchInput}
        />
      </Grid>
      {stop ? (
        <Grid item sm={12}>
          <SearchResultContainer stopId={stop?.id} />
        </Grid>
      ) : (
        <p>No stops found.</p>
      )}
    </Grid>
  );
};
