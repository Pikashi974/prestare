import React from "react";
import Provider from "./User.tsx";

function Card({ provider }: { provider: Provider }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={provider.img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{provider.fullname}</h2>
        <div className="badge badge-secondary">{provider.job}</div>
        <p>{provider.email}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{provider.tel}</div>
          <div className="badge badge-outline">{provider.area}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
