import { CharacterProps } from "../../assets/types and interfaces/types";
import { charactersData } from "../../assets/data";
import { Card } from "./Card";
import "./character-cards.css";
export function CardSection() {
  return (
    <section id="character-cards">
      {charactersData.map((character: CharacterProps) => {
        return <Card key={character.name} item={character} />;
      })}
    </section>
  );
}
