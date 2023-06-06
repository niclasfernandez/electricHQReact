import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
 
    const [user, setUser] = useState({}); 

    const getOneUser =()=>{
        return user
    }

    const setOneUser=(user)=>{
        setUser(user)
    }

  //necesitaba en el caso de actualizar la cantidad, que se ejecute nuevamente setCartProducts
  //para que me vuelva a renderizar el CartWidget. Modificando el array original no lo tomaba
  //por ende tuve que crear una copia del array y llamar al setCartProducts con la copia.
  const data = {getOneUser, setOneUser}  

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export default UserProvider;

export { UserContext };
