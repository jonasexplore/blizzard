import { Button } from "../button";
import { HorizontalMenu } from "../menu/horizontal";

export const Header = () => {
  return (
    <div
      className="
      z-10
      flex
      w-full
      h-24
      border-b
      border-b-white
      border-opacity-10"
    >
      <div
        className="
        flex
        gap-16
        items-center
        w-full
        xs:justify-between
        md:justify-start"
      >
        <div>
          <img src="./assets/logo-blizzard.png" alt="Logo da Blizzard" />
        </div>
        <div className="xs:flex-grow-0 md:flex-1">
          <HorizontalMenu />
        </div>
      </div>
    </div>
  );
};
