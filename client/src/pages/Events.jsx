import React from "react";
import EventGridCard from "../components/EventGridCard";

export default function Events() {
  const cardData = [
    {
      title: "Card title",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Card title",
      description: "This is a short card.",
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Card title",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Card title",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="m-5">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 w-50"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-search" type="submit">
          Search
        </button>
      </form>

      <div className="mt-5">
        <EventGridCard cardData={cardData} />
      </div>
    </div>
  );
}
