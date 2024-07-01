import { useEffect, useState } from "react";
import StarRating from "./Components/StarRating";
import { IMovieDetails, IMoviewData, IWatchedMovie } from "./Types";
import { useMovies } from "./Components/useMovies";
import { useLocalStorageState } from "./Components/useLocalStorageState";
import { useKey } from "./Components/useKey";

const tempMovieData: IMoviewData[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData: IMoviewData[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr: number[]) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const KEY = "eac2c495";
export default function App() {
  // const [watched, setWatched] = useState<IWatchedMovie[]>(() => {
  //   const storedValue = localStorage.getItem("watched");
  //   return storedValue ? JSON.parse(storedValue) : [];
  // });

  const [watched, setWatched] = useLocalStorageState<IWatchedMovie>(
    [],
    "watched"
  );

  const [selectedId, setSelectedId] = useState("");
  const [query, setQuery] = useState("");

  function handleSelectMovie(id: string) {
    setSelectedId((selectedId) => (selectedId === id ? "" : id));
  }

  function handleCloseMovie() {
    setSelectedId("");
  }

  function handleAddWatched(movie: IWatchedMovie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched) => watched.filter((watched) => watched.imdbID !== id));
  }

  const { movies, error, isLoading } = useMovies(query);

  return (
    <>
      <NavBar>
        <>
          <Search query={query} setQuery={setQuery} />
          <NumResults movies={movies} />
        </>
      </NavBar>
      <Main>
        <>
          {/* <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box> */}
          <Box>
            <>
              {isLoading && <Loader />}
              {!isLoading && !error && (
                <MovieList onSelectMovie={handleSelectMovie} movies={movies} />
              )}
              {error && <ErrorMessage message={error} />}
            </>
          </Box>
          <Box>
            <>
              {selectedId ? (
                <MovieDetails
                  selectedId={selectedId}
                  onCloseMovie={handleCloseMovie}
                  onAddWatched={handleAddWatched}
                  watched={watched}
                />
              ) : (
                <>
                  <WatchedSummary watched={watched} />
                  <WatchedMoviesList
                    watched={watched}
                    onDeleteWatched={handleDeleteWatched}
                  />
                </>
              )}
            </>
          </Box>
        </>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="error">
      <span>🛑</span>
      {message}
    </p>
  );
}

function NavBar({ children }: { children: React.ReactElement }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) {
  useEffect(() => {
    const el = document.querySelector<HTMLInputElement>(".search");
    el?.focus();
  }, []);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }: { movies: IMoviewData[] }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }: { children: React.ReactElement }) {
  return <main className="main">{children}</main>;
}

function Box({ children }: { children: React.ReactElement }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: IMoviewData[];
  onSelectMovie: (id: string) => void;
}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          onSelectMovie={() => onSelectMovie(movie.imdbID)}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}

function Movie({
  movie,
  onSelectMovie,
}: {
  movie: IMoviewData;
  onSelectMovie: () => void;
}) {
  return (
    <li onClick={onSelectMovie} key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: IWatchedMovie) => void;
  watched: IWatchedMovie[];
}) {
  const [movie, setMovie] = useState<IMovieDetails>();
  const [isLoading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  function handleAdd() {
    const newWatchedMovie: IWatchedMovie = {
      imdbID: selectedId,
      title: movie?.Title || "",
      year: movie?.Year || "",
      poster: movie?.Poster || "",
      imdbRating: Number(movie?.imdbRating),
      runtime: Number(movie?.Runtime?.split(" ").at(0)),
      userRating: userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await response.json();
      console.log("data: ", data);
      setMovie(data);
      setLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!movie?.Title) return;
    document.title = `Movie | ${movie?.Title}`;

    return () => {
      document.title = "Use popcorn";
    };
  }, [movie?.Title]);

  useKey("Escape", onCloseMovie);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={movie?.Poster} alt={`Poster of the ${movie}`} />
            <div className="details-overview">
              <h2>{movie?.Title}</h2>
              <p>
                {movie?.Released} &bull; {movie?.Runtime}
              </p>
              <p>{movie?.Genre}</p>
              <p>
                <span>⭐️</span>
                {movie?.imdbRating} IMDB rating{" "}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onRatingChange={setUserRating}
                  />
                  <button onClick={handleAdd} className="btn-add">
                    + Add to list
                  </button>
                </>
              ) : (
                <p> You rated this movie {watchedUserRating}</p>
              )}
            </div>
            <p>
              <em>{movie?.Plot}</em>
            </p>
            <p>Starring {movie?.Actors}</p>
            <p>Directed by {movie?.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedSummary({ watched }: { watched: IWatchedMovie[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating || 0));
  const avgUserRating = average(watched.map((movie) => movie.userRating || 0));
  const avgRuntime = average(watched.map((movie) => movie.runtime || 0));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating?.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating?.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({
  watched,
  onDeleteWatched,
}: {
  watched: IWatchedMovie[];
  onDeleteWatched: (id: string) => void;
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          onDeleteWatched={() => onDeleteWatched(movie.imdbID)}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({
  movie,
  onDeleteWatched,
}: {
  movie: IWatchedMovie;
  onDeleteWatched: () => void;
}) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete" onClick={onDeleteWatched}>
          X
        </button>
      </div>
    </li>
  );
}
