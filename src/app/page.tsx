// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

import ButtonGame from "./components/ButtonGame";
const getPokemons = async () => {
  const names: string[] = [];

  for (let i = 0; i < 50; i++) {
    const id = Math.floor(Math.random() * 151) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    names.push(data.name);
  }

  return names;
};

export default async function Home() {

  const data = await getPokemons();

  return (
    <div className="bg-midyellow h-screen">
      <h2 className="text-9xl font-extrabold text-center"><span className="text-red">Pokemon</span> or <span className="text-blue">Software?</span></h2>
      {/* <div className="pt-20 ml-8">
        <h2 className="text-9xl font-extrabold text-center"><span className="text-red">Pokemon</span> or <span className="text-blue">Software?</span></h2>
        <ul className="text-center text-5xl font-bold uppercase border-2 border-black max-w-2xl mx-auto mt-24 py-24 rounded-lg">
          <li>{data.name}</li>
        </ul>
      </div> */}
      <ButtonGame pokemonNames={data} />

      <footer className="text-center pb-12  bg-blue">
        <hr />
        <div className="text-xl flex flex-row justify-center items-center gap-x-8 pt-4 text-white">
          <p>Made by <a href="https://github.com/jacob-s-codes" className=" hover:text-red" target="_blank">@jacob-s-codes</a></p>
          <p>All credit for the idea goes to <a href="https://www.youtube.com/shorts/b-CaKFaefAM" className=" hover:text-red" target="_blank">@Mewtru</a></p>

        </div>
      </footer>
    </div>
  );
}
