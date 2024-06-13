import { useEffect, useState } from "react";
import style from "./style.module.scss";

interface Data {
  name: string;
  url: string;
}

const Cards = () => {
  const [item, setItem] = useState<Data[] | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setItem(data.results));
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <main className={style.main}>
      {item.map((item) => (
        <div key={item.name} className={style.main_card}>
          <img src={item.url} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </main>
  );
};

export default Cards;
