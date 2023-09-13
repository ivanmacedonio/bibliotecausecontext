import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
///el contexto es una forma de pasar props implicitamente
///con appcontext podemos pasar items y metodos a toda la app

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export const Store = ({children}) => {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    const temp = [...items];
    temp.unshift(item);
    setItems([...temp]);
  };

  const getItem = (id) => {
    const item = items.find((item) => item.id === id);
    return item;
  };

  const updateItem = (item) => {
    const index = items.findIndexdex((i) => i.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };
  };
  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
///todo lo que este dentro del provider va a tener acceso a appcontext
///en value especificamos que metodos o objetos vamos a proveer 

export function useAppContext(){
    return useContext(AppContext)
}
///retornamos el contexto indicado dentro del hook