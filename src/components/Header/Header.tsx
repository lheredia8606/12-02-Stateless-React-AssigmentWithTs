import "./header.css";
import { Component, ReactNode } from "react";
import { navLinks } from "../../assets/data";
import { HeaderListItems } from "./HeaderListItem";

export class Header extends Component {
  render(): ReactNode {
    return (
      <>
        <header>
          <h1>Fullmetal Alchemist</h1>
          <nav>
            {navLinks.map((element: string) => {
              return <HeaderListItems key={element} itemName={element} />;
            })}
          </nav>
        </header>
      </>
    );
  }
}
