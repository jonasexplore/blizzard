import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Collapsible from "@radix-ui/react-collapsible";
import { GameMenuItems } from "../../data/games-menu";
import { Button } from "../button";

const NavigationMenuList = () => (
  <NavigationMenu.List className="flex justify-between items-center xs:flex-col md:flex-row">
    <div className="flex flex-1 gap-8 xs:flex-col md:flex-row">
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Jogos</NavigationMenu.Trigger>
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
                  <div className="flex flex-col text-center items-center w-28">
                    <img className="w-16" src={image} alt="" />
                    <span>{name}</span>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="bg-[#15171B] h-16 flex flex-wrap gap-16 justify-center">
            <div className="flex gap-2 items-center">
              <img src="./assets/icons/menu.svg" alt="menu" width={8} />
              <a href="#" className="font-bold">
                Ver todos jogos
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="./assets/icons/logo.svg" alt="menu" width={24} />
              <a href="#" className="font-bold">
                Aplicativo Battle.net
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="./assets/icons/downloads.svg" alt="menu" width={24} />
              <a href="#" className="font-bold">
                Downloads
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="./assets/icons/chat.svg" alt="menu" sizes="24" />
              <a href="#" className="font-bold">
                Fóruns dos jogos
              </a>
            </div>
          </div>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Esportes</NavigationMenu.Trigger>
        <NavigationMenu.Content
          className="
          bg-background
            absolute
            w-full
            left-0
            top-0
            -z-10
            h-[640px]"
        >
          <div>Teste 2</div>
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
