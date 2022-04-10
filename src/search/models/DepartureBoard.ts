export type JourneyDetailRef = {
  ref: string;
};

export type Departure = {
  name: string;
  sname: string;
  journeyNumber: string;
  type: string;
  stopid: string;
  stop: string;
  time: string;
  date: string;
  journeyid: string;
  direction: string;
  track: string;
  fgColor: string;
  bgColor: string;
  stroke: string;
  accessibility: string;
  JourneyDetailRef: JourneyDetailRef;
};

export type DepartureBoard = {
  noNamespaceSchemaLocation: string;
  servertime: string;
  serverdate: string;
  Departure: Departure[];
};

export type RootObjectDepartureBoard = {
  DepartureBoard: DepartureBoard;
};
