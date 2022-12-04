import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Banner } from "../components/banner";
import { Catalog } from "../components/catalog";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Section } from "../components/section";
import { api } from "../lib/axios";
import { RootState } from "../store";

export const HomePage = () => {
  const { selectedBanner } = useSelector((state: RootState) => state.banner);

  const [games, setGames] = useState<Array<any>>([]);

  const fetchGames = useCallback(async () => {
    const response = await api.get("/games");
    setGames(response.data);
  }, []);

  useEffect(() => {
    (async () => await fetchGames())();
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="
          bg-no-repeat 
          bg-cover 
          max-h-[768px] 
          w-full 
          transition-all 
          duration-700
        "
        style={{
          backgroundImage: `url(${selectedBanner?.backgroundImage})`,
        }}
      >
        <div className="mx-6 flex items-center justify-center">
          <header className="flex flex-1 flex-col max-w-7xl">
            <Header />
            <Banner {...selectedBanner} />
          </header>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-20 mx-6 my-20">
          <Section />
          <main>
            <Catalog games={games} />
          </main>
        </div>
      </div>
      <div className="max-w-7xl">
        <Footer />
      </div>
    </div>
  );
};
