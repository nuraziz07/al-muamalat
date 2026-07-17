import {useContext} from "react";
import {AuthContext} from "@/Providers/AuthContext.tsx";

export const useAuth = () => useContext(AuthContext)