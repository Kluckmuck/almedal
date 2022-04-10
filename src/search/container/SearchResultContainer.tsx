import { FC, useEffect, useState } from "react";
import { DepartureComponent } from "../components/DepartureComponent";
import { RootObjectDepartureBoard } from "../models/DepartureBoard";
import VastTrafikService from "../service/VastTrafikService";

type Props = {
  stopId: string;
};

export const SearchResultContainer: FC<Props> = ({ stopId }) => {
  const [departures, setDepartures] = useState<RootObjectDepartureBoard>();

  useEffect(() => {
    VastTrafikService.getDepartures(stopId).then((response) => {
      setDepartures(response);
    });
  }, [stopId]);

  return (
    <div>
      {departures?.DepartureBoard ? (
        departures.DepartureBoard.Departure.map((departure) => (
          <div key={departure.journeyid}>
            <DepartureComponent departure={departure} />
          </div>
        ))
      ) : (
        <p>no list found!</p>
      )}
      <hr />
    </div>
  );
};
