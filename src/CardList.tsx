import React, { useContext, useEffect } from "react";
import User from "./User";
import { getProviders } from "./utils/api.ts";
import Card from "./Card.tsx";
import { SearchInputContext } from "./App.tsx";

function CardList() {
  const [provider, setProvider] = React.useState<User[]>([]);
  const { searchInput } = useContext(SearchInputContext);
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
        .map((provide, index) => (
          <Card key={index} provider={provide} />
        ))}
    </div>
  );
}

export default CardList;
