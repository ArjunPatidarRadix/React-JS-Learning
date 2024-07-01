import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { ICity } from "../utils/Types";

const BASE_URL = "http://localhost:8000";

type ICitiesContextType = {
  cities: ICity[];
  isLoading: boolean;
  currentCity: ICity | undefined;
  getCity?: Function;
  createCity?: Function;
  deleteCity?: Function;
  error: String;
};

enum ActionType {
  CITIES_LOADED = "cities/loaded",
  CITY_CREATED = "city/created",
  CITY_DELETED = "city/deleted",
  CITY_LOADED = "city/loaded",

  LOADING = "loading",
  REJECTED = "rejected",
}

interface IAction {
  type: ActionType;
  payload?: any;
}

const CitiesContext = createContext<ICitiesContextType | null>(null);

const initialState: ICitiesContextType = {
  cities: [],
  isLoading: false,
  currentCity: undefined,
  error: "",
};

function reducer(state: ICitiesContextType, action: IAction) {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, isLoading: true };
    case ActionType.CITIES_LOADED:
      return {
        ...state,
        isLoading: false,
      };
    case ActionType.CITY_LOADED:
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case ActionType.CITY_CREATED:
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case ActionType.CITY_DELETED:
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: undefined,
      };
    case ActionType.REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type: " + action.type);
  }
  return state;
}

function CitiesProvider({ children }: { children: ReactNode }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities, setCities] = useState<ICity[]>([]);
  // const [isLoading, setLoading] = useState(true);
  // const [currentCity, setCurrentCity] = useState<ICity>();

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: ActionType.LOADING });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data: ICity[] = await res.json();
        console.log("data:: ", data);
        dispatch({ type: ActionType.CITIES_LOADED, payload: data });
      } catch (error) {
        dispatch({
          type: ActionType.REJECTED,
          payload: "There was an error loading cities",
        });
        // alert("There was an error loading data");
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: number) {
    if (Number(id) === currentCity?.id) return;
    dispatch({ type: ActionType.LOADING });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data: ICity = await res.json();
      console.log("data:: ", data);
      dispatch({ type: ActionType.CITY_LOADED, payload: data });
    } catch (error) {
      dispatch({
        type: ActionType.REJECTED,
        payload: "There was an error loading city",
      });
      // alert("There was an error loading data");
    }
  }

  async function createCity(newCity: ICity) {
    dispatch({ type: ActionType.LOADING });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data: ICity = await res.json();
      console.log("data:: ", data);
      // setCities((prevCity) => [...prevCity, newCity]);
      dispatch({ type: ActionType.CITY_CREATED, payload: data });
    } catch (error) {
      // alert("There was an error loading data");
      dispatch({
        type: ActionType.REJECTED,
        payload: "There was an error creating city",
      });
    }
  }

  async function deleteCity(id: number) {
    dispatch({ type: ActionType.LOADING });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const data: ICity = await res.json();
      console.log("data:: ", data);
      dispatch({ type: ActionType.CITY_DELETED, payload: id });
      // setCities((prevCity) => prevCity.filter((city) => city.id !== id));
    } catch (error) {
      // alert("There was an error deleteing city");
      dispatch({
        type: ActionType.REJECTED,
        payload: "There was an error deleting city",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext) as ICitiesContextType;
  if (context === undefined)
    throw new Error("CitiesContext is used outside of the CitiesProvider");

  return context;
}

export { CitiesProvider, useCities };
