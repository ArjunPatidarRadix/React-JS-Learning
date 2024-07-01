export interface ICitiesResponse {
  cities: ICity[];
}

export interface ICity {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: IPosition;
  id?: number;
}

export interface IPosition {
  lat: number;
  lng: number;
}
