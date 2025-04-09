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
        <h2 className="text-8xl font-extrabold text-center"><span className="text-melon">Pokemon</span> or <span className="text-white">Software?</span></h2>
        <ul>
          <li>{data.name}</li>
        </ul>
      </div>

      <div className="mt-36 w-full flex justify-center items-center gap-x-12">
        <button className="border border-black px-4 py-2 rounded-lg text-2xl uppercase">Pokemon</button>
        <button className="border border-black px-4 py-2 rounded-lg text-2xl uppercase">Software</button>
      </div>
    </div>
  );
}
