import React from "react";
import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";
import { Book } from "../components/Book";
export const Index = () => {
  const store = useAppContext();

  return (
    <>
      <Link to="/create">Create</Link>
      <div>
        {store.items.map((item) => (
          <Book key={item.id} item={item}></Book>
        ))}
      </div>
    </>
  );
};
