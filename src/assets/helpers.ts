import { CharacterProps } from "./types and interfaces/types";

export function moreVoted(characters: CharacterProps[]): CharacterProps[] {
  const characterCopy = [...characters];
  characterCopy.sort((a: CharacterProps, b: CharacterProps) => {
    return b.votes - a.votes;
  });
  return characterCopy.slice(0, 5);
}
