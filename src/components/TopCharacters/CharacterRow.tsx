import { CharacterProps } from "../../assets/types and interfaces/types";

type CharacterRowProp = {
  item: CharacterProps;
  index: number;
};

export function CharacterRow({ item, index }: CharacterRowProp) {
  const { name, skillSet, votes } = item;
  const classColor = index % 2 === 0 ? "dark" : "light";
  return (
    <>
      <tr className={classColor}>
        <td>{name}</td>
        <td>{skillSet.join(",")}</td>
        <td>{votes}</td>
      </tr>
    </>
  );
}
