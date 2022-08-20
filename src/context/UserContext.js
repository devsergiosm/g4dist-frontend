import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [username, setUsername] = useState('');

    const handleUsername = (e) => setUsername(e)

    const data = {username, handleUsername};

    return (
        <UserContext.Provider value = {data}>{children}</UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;