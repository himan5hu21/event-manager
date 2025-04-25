import React from "react";

export default function Dashboard() {
  const dashboardStatus = [
    {
      name: "Total Tickets",
      value: 100,
      class: "total",
    },
    {
      name: "Open Tickets",
      value: 50,
      class: "open",
    },
    {
      name: "Closed Tickets",
      value: 50,
      class: "close",
    },
  ];

  return (
    <div className="p-5">
      <h1 className="fs-4 fw-bold">Dashboard</h1>

      <div className="container mt-3">
        <div className="row gap-5 ">
          {dashboardStatus.map((item, index) => (
            <div
              className={`col card justify-content-center shadow-sm ${item.class}`}
              key={index}
            >
              <div className="p-3">
                <h1 className="fs-5 m-0">{item.name}</h1>
                <p className="fs-3 fw-bold m-0">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
