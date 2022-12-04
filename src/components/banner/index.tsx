import { sideMenuItems } from "../../data/side-menu";
import { BannerType } from "../../types";
import { Button } from "../button";
import { SideMenu } from "../menu";

export const Banner = ({
  logo,
  title,
  subtitle,
  buttonText,
  trailerGif,
  trailerImage,
}: BannerType) => {
  return (
    <div className="flex justify-between xs:my-24 lg:my-44 xs:flex-col-reverse lg:flex-row">
      <div className="xs:mt-12 lg:mt-0">
        <SideMenu items={sideMenuItems} />
      </div>

      <div className="flex flex-col max-w-xl">
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <h3 className="mb-8">{subtitle}</h3>
        <div>
          <Button>{buttonText}</Button>
        </div>
      </div>
      <div className="flex lg:flex-col justify-between xs:hidden lg:block">
        <img className="w-64" src={logo} alt="" />
        <span className="text-end mb-4">Assista o trailer</span>
        <img className="w-64" src={trailerImage} alt="" />
      </div>
    </div>
  );
};
