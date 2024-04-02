import { Component, ReactNode } from "react";
import { ListItemName } from "../../assets/types and interfaces/interfaces";

export class HeaderListItems extends Component<ListItemName> {
  render(): ReactNode {
    const { itemName } = this.props;
    return (
      <>
        <li key={itemName}>{itemName}</li>
      </>
    );
  }
}
