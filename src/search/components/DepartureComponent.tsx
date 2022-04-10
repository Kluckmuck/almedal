import { Card, CardContent, CardHeader, Chip, Grid } from "@mui/material";
import { FC } from "react";
import { Departure } from "../models/DepartureBoard";

type Props = {
  departure: Departure;
};

export const DepartureComponent: FC<Props> = ({ departure }) => {
  const titleLabel = `${departure.name} towards ${departure.direction}`;
  return (
    <Grid item sm={12} marginTop={2}>
      <Card>
        <CardHeader title={titleLabel} />
        <CardContent>
          <Chip label={departure.type} />
          <h1>{departure.time}</h1>
          <h1>{departure.track}</h1>
        </CardContent>
      </Card>
    </Grid>
  );
};
