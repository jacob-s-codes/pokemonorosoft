// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const getPokemon = async () => {
  const rand = Math.floor(Math.random()*100+1);
  const api = "https://pokeapi.co/api/v2/pokemon/" + rand.toString();
  const res = await fetch(api);
  

  return res.json();
}

export default async function Home() {

  const data = await getPokemon();


  return (
    <div className="">
      <div className="mt-36 ml-8">
        <h2 className="text-5xl font-extrabold"><span className="text-melon">Pokemon</span> or <span className="text-white">Software?</span></h2>
      </div>
    </div>
  );
}
