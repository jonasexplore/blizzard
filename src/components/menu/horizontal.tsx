import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Collapsible from "@radix-ui/react-collapsible";
import { GameMenuItems } from "../../data/games-menu";
import { Button } from "../button";
import { SubmenuGamesItems } from "../../data/submenu-games";
import { SubmenuSports } from "../../data/submenu-sports";

const NavigationMenuList = () => (
  <NavigationMenu.List
    className="
      flex
      justify-between
      items-center
      xs:flex-col
      md:flex-row"
  >
    <div className="flex flex-1 gap-8 xs:flex-col md:flex-row">
      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="flex gap-4 items-center">
          Jogos{" "}
          <img
            src="./assets/icons/arrow.svg"
            alt=""
            className="header-option"
          />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content
          className="
          bg-background
            absolute
            w-full
            left-0
            top-0
            -z-10
            h-[640px]
            flex
            flex-col
            justify-between
            "
        >
          <div className="mx-6 flex flex-1 justify-center items-center">
            <ul className="grid sm:grid-cols-3 md:grid-cols-6 gap-16">
              {GameMenuItems.map(({ name, image }) => {
                return (
                  <li
                    className="
                      flex
                      flex-col
                      text-center
                      items-center
                      w-28
                      cursor-pointer"
                  >
                    <img className="w-16" src={image} alt="" />
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul
            className="
            bg-foreground
              h-16
              flex
              flex-wrap
              gap-16
              justify-center"
          >
            {SubmenuGamesItems.map(({ image, label, width }, index) => (
              <li key={index} className="flex gap-2 items-center">
                <img src={image} alt="menu" width={width} />
                <a href="#" className="font-bold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="flex gap-4 items-center">
          Esportes{" "}
          <img
            src="./assets/icons/arrow.svg"
            alt=""
            className="header-option"
          />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content
          className="
          bg-background
            absolute
            w-full
            left-0
            top-0
            -z-10
            h-[640px]
            flex
            flex-col
            justify-between
            "
        >
          <div className="mx-6 flex flex-1 justify-center items-center">
            <ul className="flex gap-16">
              {SubmenuSports.map(({ image, title }, index) => (
                <li key={index} className="w-44 text-center cursor-pointer">
                  <img src={image} alt="" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="
            bg-foreground
              h-16
              flex
              flex-wrap
              gap-16
              justify-center"
          >
            <div className="flex gap-2 items-center">
              <img src="./assets/icons/torneio.svg" alt="menu" />
              <a href="#" className="font-bold">
                Torneios da comunidade
              </a>
            </div>
          </div>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>Loja</NavigationMenu.Item>
      <NavigationMenu.Item>Notícias</NavigationMenu.Item>
      <NavigationMenu.Item>Suporte</NavigationMenu.Item>
    </div>
    <div className="flex gap-4 justify-end">
      <Button variant="secondary">Criar conta</Button>
      <Button icon={<img src="./assets/icons/user.svg" />}>Logar</Button>
    </div>
  </NavigationMenu.List>
);

export const HorizontalMenu = () => {
  return (
    <NavigationMenu.Root>
      <Collapsible.Root className="xs:block md:hidden">
        <Collapsible.Trigger className="z-10">
          <img src="./assets/icons/navbar.svg" alt="" />
        </Collapsible.Trigger>
        <Collapsible.Content className="bg-background w-full -z-10 absolute left-0 top-0 p-6">
          <NavigationMenuList />
        </Collapsible.Content>
      </Collapsible.Root>
      <div className="xs:hidden md:block">
        <NavigationMenuList />
      </div>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};
