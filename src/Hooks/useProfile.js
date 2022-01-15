import { createContext, useContext, useState } from "react";


const ProfileConstext = createContext({
    //global state
    username: "",
    signIn:false,
  
    //global method
    setUsername: () => {},
    setSignIn:()=>{},
  
  });

const ProfileProvider = (props) => {
    const [username, setUsername] = useState("Mary");
    const [signIn, setSignIn] = useState(true);

    return(
        <ProfileConstext.Provider
        value={{
            username,
            signIn, 
            setSignIn,
            setUsername
        }}
        {...props}
        />
    )

}

function useProfile() {
    return useContext(ProfileConstext);
}
  
  export { ProfileProvider, useProfile };