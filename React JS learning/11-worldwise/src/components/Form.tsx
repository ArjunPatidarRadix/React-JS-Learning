// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ICity } from "../utils/Types";
import { useCities } from "../contexts/CitiesContext";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();

  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setLoadingGeocoding] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(() => {
    async function fetchCityData() {
      if (!lat && !lng) return;
      try {
        setGeocodingError("");
        setLoadingGeocoding(true);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        if (!data.countryCode)
          throw new Error(
            "This doesn't seem to be city. Click somewhere else 😉"
          );
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName || "");
        setEmoji(convertToEmoji(data.countryCode));
        console.log("data:: ", data);
      } catch (error: any) {
        setGeocodingError(error.message);
      } finally {
        setLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cityName && !date && !lat && !lng) return;

    const newCity: ICity = {
      cityName: cityName,
      country: country,
      date: date,
      emoji: emoji,
      notes: notes,
      position: { lat: Number(lat), lng: Number(lng) },
    };

    console.log("newCity::", newCity);
    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoadingGeocoding) return <Spinner />;
  if (!lat && !lng)
    return <Message message={"Start by clicking somewhere on the map"} />;
  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`${styles.form} ${isLoading && styles.loading}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={() => {}} type="primary">
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
