import React from "react";
import { Link } from "react-router-dom";

export default function EventGridCard(props) {
  const { cardData = [] } = props;

  if (!Array.isArray(cardData)) {
    return <div>No event data available.</div>;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {cardData.map((item, index) => {
        if (!item || typeof item !== "object") return null;

        const {
          _id,
          image,
          title = "No Title",
          date = "N/A",
          time = "N/A",
          location = "N/A",
          price = "Free",
          ticketsLeft = 0,
        } = item;

        const formattedDate = new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        return (
          <Link
            to={`/events/${_id}`}
            className="col-md-4 mb-4 text-decoration-none text-dark"
            key={index}
          >
            <div className="card h-100 shadow-sm">
              <img src={image} className="card-img-top" alt="image failed" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-1">
                  <strong>Date:</strong> {formattedDate}
                  <br />
                  <strong>Time:</strong> {time}
                  <br />
                  <strong>Location:</strong> {location}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ₹{price}
                  <br />
                  <small className="text-muted">
                    Tickets Left: {ticketsLeft}
                  </small>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
