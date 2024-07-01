import { useEffect, useState } from "react";
import { IMoviewData } from "../Types";
import { KEY } from "../App";

export function useMovies(query: string) {
  const [movies, setMovies] = useState<IMoviewData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          {
            signal: controller.signal,
          }
        );
        if (!response.ok)
          throw new Error("Something went wrong when fetching movies");
        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setLoading(false);
        setError("");
      } catch (error: any) {
        console.log("error.message: ", error?.message);
        setLoading(false);
        if (error?.name !== "AbortError") {
          setError(error?.message);
        }
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
