import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBanner } from "../../features/banner/banner-slice";
import { RootState } from "../../store";

type Props = {
  items: Array<string>;
};

type ItemProps = {
  item: string;
  isActive: boolean;
  onClick: () => void;
  canClick: boolean;
};

const Item = ({ item, isActive, onClick, canClick }: ItemProps) => {
  const style = isActive ? "mix-blend-normal" : "mix-blend-luminosity";

  return (
    <li
      onClick={canClick ? onClick : undefined}
      className={canClick ? "cursor-pointer" : ""}
    >
      <img src={item} alt="Ícone de um jogo" className={`${style}`} />
    </li>
  );
};

export const SideMenu = ({ items }: Props) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const { banners } = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  return (
    <ul className="flex xs:flex-row lg:flex-col gap-5">
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          isActive={selectedItem === index}
          canClick={index < banners.length}
          onClick={() => {
            dispatch(selectBanner(banners[index]));
            setSelectedItem(index);
          }}
        />
      ))}
    </ul>
  );
};
