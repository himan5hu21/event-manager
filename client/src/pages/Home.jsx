import React from "react";
import Carousel from "../components/Carousel";
import EventGridCard from "../components/EventGridCard";

export default function Home() {
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
    <div>
      <Carousel />
      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Tech Event</h1>
        <EventGridCard cardData={cardData} />
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Cultural Event</h1>
        <EventGridCard cardData={cardData} />
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">
          Comedy & Entertainment Event
        </h1>
        <EventGridCard cardData={cardData} />
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">
          Workshop & Seminars Event
        </h1>
        <EventGridCard cardData={cardData} />
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">
          Exhibitions & Displays Event
        </h1>
        <EventGridCard cardData={cardData} />
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Sport Event</h1>
        <EventGridCard cardData={cardData} />
      </div>

      <div className="mx-5">
        <h1 className="mt-5 mb-3 text-center text-color">Festival Event</h1>
        <EventGridCard cardData={cardData} />
      </div>
    </div>
  );
}
