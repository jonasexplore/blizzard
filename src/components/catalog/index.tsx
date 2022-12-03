type Props = {
  games: Array<{
    name: string;
    category: string;
    image: string;
  }>;
};

export const Catalog = ({ games }: Props) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {games.map(({ category, image, name }, index) => (
        <li key={index}>
          <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{category}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
