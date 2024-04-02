import { CharacterProps } from "../../assets/types and interfaces/types";

export function Card({ item }: { item: CharacterProps }) {
  return (
    <div className="card" key={item.name}>
      <div className="card-titles">
        <h3>{item.name}</h3>
        {item.nickName != "" ? <h4>{item.nickName}</h4> : ""}
      </div>
      <img src={item.imgUrl} alt="" />
      <p>{item.description}</p>
    </div>
  );
}
