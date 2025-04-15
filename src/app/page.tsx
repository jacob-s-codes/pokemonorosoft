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
    <div className="bg-midyellow h-screen">
      <div className="pt-36 ml-8">
        <h2 className="text-9xl font-extrabold text-center"><span className="text-red">Pokemon</span> or <span className="text-blue">Software?</span></h2>
        <ul className="text-center text-5xl font-bold uppercase border-2 border-black max-w-2xl mx-auto mt-24 py-24 rounded-lg">
          <li>{data.name}</li>
        </ul>
      </div>
      <div className="mt-36 w-full flex justify-center items-center gap-x-12">
        <button className="border-2 border-black hover:bg-blue hover:cursor-pointer hover:text-white px-4 py-2 rounded-lg text-2xl uppercase" id="pokemon"><img src="/pokemonlogo.png" alt="" className="w-32"/></button>
        <button className="border-2 border-black px-4 py-2 hover:bg-blue hover:cursor-pointer hover:text-white rounded-lg text-2xl uppercase" id="software"><img src="/wwwlogo.png" alt="" className="w-32"/></button>
      </div>

      
    </div>
  );
}
