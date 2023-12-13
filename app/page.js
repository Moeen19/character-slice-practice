import { data } from "autoprefixer";
import { cache } from "react";
import Image from "next/image";
import Link from "next/link";

// async function getCharacters() {
//   const response = await fetch(
//     "https://rickandmortyapi.com/api/character/1,2,3,4"
//   );
//   if (response.status === 200) {
//     const data = await response.json();
//     console.log(data);
//     const characters = await data;
//     // console.log(characters)
//     // console.log(characters);
//     return characters;
//   } else {
//     throw new Error("Something went wrong!");
//   }
// }

export default async function Home() {
  // const charArr = await getCharacters();

  return (
    <main className="px-[96px] py-[32px]">
      <Link href='/1'>
        <div className="mb-[28px] mx-auto max-w-fit">
          <h1 className="font-medium text-[36px] mb-[8px] leading-[40px]">
            Rick and Morty Characters
          </h1>
          <p className="font-medium text-[20px text-center">
            Click to go to characters page!
          </p>
        </div>
      </Link>
      {/* <div>
        <button>Previous</button>
        <button>next</button>
      </div>

      <div className="grid gap-[28px] grid-cols-2">
        {charArr?.map((char, index) => {
          return (
            <Link key={index} href={`/character/${char.id}`}>
              <div
                className="bg-[#F3F4F6] rounded-[8px] cursor-pointer gap-[20px] w-full flex p-[16px]"
                key={index}
              >
                <img className="max-w-[300px] w-full" src={char.image} />
                <p className="font-bold text-[24px]">{char.name}</p>
              </div>
            </Link>
          );
        })}
      </div> */}
    </main>
  );
}
