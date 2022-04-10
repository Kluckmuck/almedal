export type StopLocation = {
  name: string;
  lon?: string;
  lat?: string;
  id: string;
  idx?: string;
};

export type CoordLocation = {
  name: string;
  lon: string;
  lat: string;
  type: string;
  idx: string;
};

export type LocationList = {
  noNamespaceSchemaLocation: string;
  servertime: string;
  serverdate: string;
  StopLocation: StopLocation[];
  CoordLocation: CoordLocation[];
};

export type RootObjectLocationList = {
  LocationList: LocationList;
};
