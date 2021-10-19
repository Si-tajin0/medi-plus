import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthProvider"


// use Auth declare
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;