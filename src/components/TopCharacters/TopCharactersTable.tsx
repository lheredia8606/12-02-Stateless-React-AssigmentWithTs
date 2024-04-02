import { moreVoted } from "../../assets/helpers";
import { charactersData } from "../../assets/data";
import { CharacterRow } from "./CharacterRow";
import "./character-ratings.css";

export function TopCharactersTable() {
  const mostVoted = moreVoted(charactersData);
  return (
    <>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody key={9}>
            {mostVoted.map((item, index) => {
              return (
                <>
                  <CharacterRow key={item.name} item={item} index={index} />
                </>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
