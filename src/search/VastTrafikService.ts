import qs from "qs";
import { axiosInstance } from "./AxiosInstance";
import { RootObject } from "./models/LocationsList";
import { Token } from "./TokenService";

class VastTrafikService {
  getVasttrafikToken = (): Promise<Token> => {
    return new Promise<Token>((resolve, reject) => {
      axiosInstance
        .post(
          "/token",
          qs.stringify({
            grant_type: "client_credentials",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${process.env.REACT_APP_VASTTRAFIK_KEY}`,
            },
          }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  searchLocations = (location: string) => {
    return new Promise<RootObject>((resolve, reject) => {
      axiosInstance
        .get(`/bin/rest.exe/v2/location.name?input=${location}&format=json`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new VastTrafikService();
