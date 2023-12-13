import React from "react";

async function getCharacter(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Something went wrong');
  }
}

const character = async ({ params: { characterId } }) => {
  const character = await getCharacter(characterId);

  return (
    <div className="p-[24px]">
      <h1 className="mb-[24px] text-[40px]">Character Details:</h1>
      <div className="flex gap-[20px] rounded-[8px] bg-[#FAFAFA] shadow-2xl mx-auto p-3 max-w-fit w-full">
        <img src={character?.image} />
        <div className="font-medium flex flex-col gap-[10px] mt-[40px] text-[24px]">
          <p>Name: {character?.name}</p>
          <p>Gender: {character?.gender}</p>
          <p>Status: {character?.status}</p>
          <p>Species: {character?.species}</p>
          <p>Location: {character?.location?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default character;
