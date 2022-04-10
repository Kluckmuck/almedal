import { FC } from "react";
import { LocationList } from "../models/LocationsList";

type Props = {
  list: LocationList;
};

export const SearchResultComponent: FC<Props> = ({ list }) => {
  return (
    <div>
      {list ? (
        list.StopLocation.map((stop) => (
          <div key={stop.id}>
            <p>{stop.name}</p>
          </div>
        ))
      ) : (
        <p>no list found!</p>
      )}
      <hr />
    </div>
  );
};
