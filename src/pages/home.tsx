import { useEffect, useState } from "react";
import { Catalog } from "../components/catalog";
import { Header } from "../components/header";
import { SideMenu } from "../components/menu";
import { sideMenuItems } from "../data/side-menu";
import { api } from "../lib/axios";

export const HomePage = () => {
  const [games, setGames] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/games");
      setGames(response.data);
    })();
  });

  return (
    <div>
      <Header />
      <SideMenu items={sideMenuItems} />
      <Catalog games={games} />
    </div>
  );
};
