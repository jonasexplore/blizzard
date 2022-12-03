type Props = {
  items: Array<string>;
};

export const SideMenu = ({ items }: Props) => {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((item, index) => (
        <li key={index}>
          <img src={item} alt="Ícone de um jogo" />
        </li>
      ))}
    </ul>
  );
};
