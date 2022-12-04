export const Section = () => (
  <section className="flex justify-between">
    <div className="flex flex-wrap md:gap-16 lg:gap-36 xs:gap-0">
      <h3 className="uppercase text-secundary xs:hidden md:block">Games</h3>
      <h2 className="text-3xl font-bold">
        Jogos <br />
        exclusivos
      </h2>
      <div className="gap-6 xs:hidden md:flex">
        <img src="./assets/icons/blizzard.svg" alt="blizzard" className="w-5" />
        <img src="./assets/icons/switch.svg" alt="switch" className="w-5" />
        <img src="./assets/icons/xbox.svg" alt="xbox" className="w-5" />
        <img
          src="./assets/icons/playstation.svg"
          alt="playstation"
          className="w-5"
        />
      </div>
    </div>
    <div className="flex gap-2 items-center">
      <img src="./assets/icons/menu.svg" alt="menu" className="w-2" />
      <a href="#" className="text-primary font-bold">
        Ver todos jogos
      </a>
    </div>
  </section>
);
