import React from "react";

export default function EventGridCard(props) {
  const { cardData } = props;

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {cardData.map((item, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100 shadow-sm">
            <img src={item.src} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text mb-1">
                <strong>Date:</strong> May 15, 2025
                <br />
                <strong>Time:</strong> 10:00 AM
                <br />
                <strong>Location:</strong> Silver Oak University Auditorium
              </p>
              <p className="card-text">
                <strong>Price:</strong> ₹150
                <br />
                <small className="text-muted">Tickets Left: 200</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
