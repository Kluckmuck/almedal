import { Autocomplete, TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { StopLocation } from "../models/LocationsList";

type InputProps = {
  label: string;
  id: string;
};

type Props = {
  locations: StopLocation[] | undefined;
  setLocation: Dispatch<SetStateAction<StopLocation | undefined>>;
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export const SearchInputContainer: FC<Props> = ({
  locations,
  setLocation,
  setSearchInput,
}) => {
  const [value, setValue] = useState<InputProps | null>(null);

  const toLocationOptions = (locations: StopLocation[] = []): InputProps[] => {
    return locations.map((loc) => ({
      label: loc.name,
      id: loc.id,
    }));
  };

  const locationOptions = useMemo(
    () => [...toLocationOptions(locations)],
    [locations]
  );

  return (
    <Autocomplete
      autoHighlight
      options={locationOptions}
      value={value}
      onChange={(event: any, newValue: InputProps | null) => {
        setValue(newValue);
        newValue && setLocation({ name: newValue.label, id: newValue.id });
      }}
      onInputChange={(event, newInputValue) => {
        if (newInputValue.length > 2 && newInputValue !== value?.label) {
          setSearchInput(newInputValue);
        }
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderInput={(params) => (
        <TextField {...params} label="Find your station" />
      )}
    />
  );
};
