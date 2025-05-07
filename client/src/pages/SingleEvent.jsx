import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/api/events/${id}`);
        setEvent(res.data.event);
      } catch (err) {
        setError("Event not found" + "error: " + err);
      }
    };

    fetchEvent();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!event) return <div>Loading...</div>;

  const {
    image,
    title,
    date,
    time,
    location,
    price,
    ticketsLeft,
    description,
  } = event;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="card m-5">
      <img
        src={image}
        className="card-img-top"
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="row g-3">
          <p className="card-text col-md-6 mb-0">
            <strong>Date:</strong> {formattedDate}
          </p>
          <p className="card-text col-md-6 mb-0">
            <strong>Time:</strong> {time}
          </p>
          <p className="card-text col-12 my-0">
            <strong>Location:</strong> {location}
          </p>
          <p className="card-text col-md-6 my-0">
            <strong>Price:</strong> ₹{price}
          </p>
          <p className="card-text col-md-6 my-0">
            <strong>Tickets Left:</strong> {ticketsLeft}
          </p>
          <p className="card-text col-12 my-0">
            <strong>Description:</strong>{" "}
            {description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
