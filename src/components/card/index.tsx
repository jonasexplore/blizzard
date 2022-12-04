import { useRef, useState } from "react";
import { GameType } from "../../types";

const defaultStyle = {
  transform: `rotateY(0deg) rotateX(0deg)`,
  filter: "brightness(1)",
};

export const Card = ({ image, name, category }: GameType) => {
  const card = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>(defaultStyle);

  const handleMap = (
    val: number,
    minA: number,
    maxA: number,
    minB: number,
    maxB: number
  ) => {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  };

  const handleMouse = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let imgRect = card?.current?.getBoundingClientRect();
    let width = imgRect?.width;
    let height = imgRect?.height;
    let mouseX = event.nativeEvent.offsetX;
    let mouseY = event.nativeEvent.offsetY;
    let rotateY = handleMap(mouseX, 0, height ?? 180, -10, 10);
    let rotateX = handleMap(mouseY, 0, width ?? 250, 10, -10);
    let brightness = handleMap(mouseY, 0, (width ?? 250) * 1.5, 1.5, 0.5);

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      filter: `brightness(${brightness})`,
    });
  };

  return (
    <div
      className="rounded-md"
      ref={(div) => {
        card.current = div;
      }}
      id="card"
      onMouseMove={(event) => handleMouse(event)}
      onMouseLeave={(event) => {
        setStyle(defaultStyle);
      }}
      style={{
        transition: "all 250ms ease-out",
        perspective: "600px",
      }}
    >
      <img
        id="card-image"
        className="mb-6 rounded-md max-w-xs max-h-[400px]"
        style={{
          transition: "all 250ms ease-out",
          ...style,
        }}
        src={image}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  );
};
