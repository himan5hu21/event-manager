import React, { useEffect, useState } from "react";
import EventGridCard from "../components/EventGridCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvent,
  searchEvent,
  selectEventError,
  selectEventLoading,
  selectEvents,
} from "../store/event/eventSlice";

export default function Events() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const loading = useSelector(selectEventLoading);
  const error = useSelector(selectEventError);

  useEffect(() => {
    dispatch(getAllEvent());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query || query.trim() === "") {
      return;
    }
    dispatch(searchEvent(query));
  };

  return (
    <div className="m-5">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 input-search"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="btn btn-search" type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-5">
        <EventGridCard cardData={events} />
      </div>
    </div>
  );
}
