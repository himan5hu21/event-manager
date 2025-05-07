import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import EventGridCard from "../components/EventGridCard";
import axios from "axios";

export default function Home() {
  const [tech, setTech] = useState([]);
  const [cultural, setCultural] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [workshop, setWorkshop] = useState([]);
  const [exhibition, setExhibition] = useState([]);
  const [sport, setSport] = useState([]);
  const [festival, setFestival] = useState([]);

  useEffect(() => {
    const fetchEvents = async (categoryName) => {
      try {
        const res = await axios.get(`/api/events/byCategory/${categoryName}`);
        return res.data.events;
      } catch (err) {
        console.error(`Failed to fetch ${categoryName} events`, err);
        return [];
      }
    };

    const fetchData = async () => {
      const [
        techEvents,
        culturalEvents,
        comedyEvents,
        workshopEvents,
        exhibitionEvents,
        sportEvents,
        festivalEvents,
      ] = await Promise.all([
        fetchEvents("tech"),
        fetchEvents("cultural"),
        fetchEvents("comedy"),
        fetchEvents("workshop"),
        fetchEvents("exhibition"),
        fetchEvents("sport"),
        fetchEvents("festival"),
      ]);

      setTech(techEvents);
      setCultural(culturalEvents);
      setComedy(comedyEvents);
      setWorkshop(workshopEvents);
      setExhibition(exhibitionEvents);
      setSport(sportEvents);
      setFestival(festivalEvents);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Carousel />
      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Tech Event</h1>
        {tech.length > 0 ? <EventGridCard cardData={tech} /> : <NoEvents />}
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Cultural Event</h1>
        {cultural.length > 0 ? (
          <EventGridCard cardData={cultural} />
        ) : (
          <NoEvents />
        )}
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">
          Comedy & Entertainment Event
        </h1>
        {comedy.length > 0 ? <EventGridCard cardData={comedy} /> : <NoEvents />}
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">
          Workshop & Seminars Event
        </h1>
        {workshop.length > 0 ? (
          <EventGridCard cardData={workshop} />
        ) : (
          <NoEvents />
        )}
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">
          Exhibitions & Displays Event
        </h1>
        {exhibition.length > 0 ? (
          <EventGridCard cardData={exhibition} />
        ) : (
          <NoEvents />
        )}
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Sport Event</h1>
        {sport.length > 0 ? <EventGridCard cardData={sport} /> : <NoEvents />}
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Festival Event</h1>
        {festival.length > 0 ? (
          <EventGridCard cardData={festival} />
        ) : (
          <NoEvents />
        )}
      </div>
    </div>
  );
}

const NoEvents = () => {
  return (
    <div className="mx-5">
      <h1 className="mt-5 mb-3 text-center fs-3">No Events</h1>
    </div>
  );
};
