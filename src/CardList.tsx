import React, { useContext, useEffect } from "react";
import User from "./User";
import { getProviders } from "./utils/api.ts";
import Card from "./Card.tsx";
import { AreaContext, JobContext, SearchInputContext } from "./App.tsx";

function CardList() {
  const [provider, setProvider] = React.useState<User[]>([]);
  const { searchInput } = useContext(SearchInputContext);
  const { job } = useContext(JobContext);
  const { area } = useContext(AreaContext);
  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProvider(providers);
    };
    fetchProviders();
  }, []);

  return (
    <div className="flex gap-2 items-center flex-wrap">
      {provider
        .filter((provide) =>
          provide.fullname.toLowerCase().includes(searchInput.toLowerCase())
        )
        .filter((provide) => area.includes(provide.area))
        .filter((provide) =>
          job !== "Tout"
            ? provide.job.toLowerCase().includes(job.toLowerCase())
            : true
        )
        .map((provide, index) => (
          <Card key={index} provider={provide} />
        ))}
    </div>
  );
}

export default CardList;
