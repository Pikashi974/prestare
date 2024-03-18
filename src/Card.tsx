import React from "react";
import Provider from "./User.tsx";

function Card({ provider }: { provider: Provider }) {
  let telLink = `tel:${provider.tel}`;
  let mailLink = `mailto:${provider.email}`;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={provider.img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{provider.fullname}</h2>
        <div className="badge badge-secondary">{provider.job}</div>
        <a href={mailLink}>{provider.email}</a>
        <div className="card-actions justify-end">
          <a className="badge badge-outline" href={telLink}>
            {provider.tel}
          </a>
          <div className="badge badge-outline">{provider.area}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
