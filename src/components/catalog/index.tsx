import { GameType } from "../../types";
import { Card } from "../card";

type Props = {
  games: Array<GameType>;
};

export const Catalog = ({ games }: Props) => {
  return (
    <div className="flex justify-center w-full">
      <ul
        className="
        grid
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6"
      >
        {games.map((game, index) => (
          <li>
            <Card {...game} key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};
