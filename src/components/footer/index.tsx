import { footerItems } from "../../data/footer";
import { Button } from "../button";

const os = ["Windows", "Linux", "Mac"];

export const Footer = () => {
  const plataform = os.find((system) => navigator.userAgent.includes(system));

  return (
    <div
      className="
      mx-6
      bg-no-repeat
      bg-cover
      bg-[url('./assets/footer-background.png')]
      flex
      items-center
      xs:flex-col
      sm:flex-row
      "
    >
      <div>
        <img src="./assets/logo-battle-net.png" className="h-4 mb-8" alt="" />
        <h2 className="font-bold text-3xl mb-8">Baixe agora o battle.net</h2>
        <ul className="text-secundary flex flex-col gap-6">
          {footerItems.map(({ description, icon }) => (
            <li className="flex gap-4">
              <img src={icon} alt="" />
              {description}
            </li>
          ))}
        </ul>
        <div className="my-8">
          <Button>Baixar para o {plataform}</Button>
        </div>
        <div className="flex gap-4">
          <img src="./assets/icons/cellphone.svg" alt="" />
          <span>
            Também disponível como <br />
            <a href="#">aplicativo móvel</a>
          </span>
        </div>
      </div>
      <div className="flex-1">
        <img src="./assets/ilustrations/app.png" alt="" />
      </div>
    </div>
  );
};
