import "../style/reset.css";
import "../style/style.css";
import { Header } from "./Header/Header";
import { TopCharactersTable } from "./TopCharacters/TopCharactersTable";
import { CardSection } from "./CardsSection/CardSection";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Header />
      <TopCharactersTable />
      <CardSection />
    </>
  </React.StrictMode>
);
