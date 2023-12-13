import Link from "next/link";
import Button from "../Components/Button.js";
import PageBtn from "../Components/PageBtn.js";

async function getCharacters(page) {
  let string = [];
  let num = parseInt(page);

  let start = (num - 1) * 4 + 1;
  let end = num * 4;

  for (let i = start; i <= end; i++) {
    string.push(`${i}`);
  }
  string = string.join(",");

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${string}`
  );
  if (response.status === 200) {
    const data = await response.json();
    const characters = await data;
    console.log(page);

    return characters;
  } else {
    throw new Error("Something went wrong!");
  }
}

export default async function Characters({ params: { page } }) {
  const charArr = await getCharacters(page);
  let pages = [];
  for (let i = parseInt(page); i <= parseInt(page) + 5; i++) {
    if(i < 208) {
      pages.push(i);
    }
  }
  return (
    <main className="px-[96px] py-[32px]">
      <div className="mb-[28px]">
        <h1 className="font-medium text-[36px] mb-[8px] leading-[40px]">
          Characters
        </h1>
        <p className="font-medium text-[20px]">Rick and Morty API Slice</p>
      </div>

      <div className="flex justify-between mb-[20px]">
        <Button text="Previous" page={page} />
        <div className="flex gap-[20px]">
          {pages.map((item) => {
            return <PageBtn text={item} />;
          })}
        </div>
        <Button text="Next" page={page} />
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
      </div>
    </main>
  );
}
