export const Header = () => {
  return (
    <div
      className="
      flex
      justify-between
      h-24
      items-center
      border-b
      border-b-white
      border-opacity-10"
    >
      <div className="flex gap-16">
        <div>
          <img src="./assets/logo-blizzard.png" alt="Logo da Blizzard" />
        </div>

        <ul className="flex gap-8">
          <li>Jogos</li>
          <li>Esportes</li>
          <li>Loja</li>
          <li>Notícias</li>
          <li>Suporte</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <button>Criar conta</button>
        <button>Logar</button>
      </div>
    </div>
  );
};
