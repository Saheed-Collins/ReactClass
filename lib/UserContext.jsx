import { useContext, useState } from "react";
import { createContext } from "react";

const User = createContext();

const UserContext = ({ children }) => {
  const [product, setproduct] = useState({ title: "lolipop" });
  const [number, setnumber] = useState(1);

  return (
    <User.Provider value={{ product, setproduct, number, setnumber }}>
      {children}
    </User.Provider>
  );
};


export default UserContext;

export const GlobalUserContext = () => {
  return useContext(User);
};
