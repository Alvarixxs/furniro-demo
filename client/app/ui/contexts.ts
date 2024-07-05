import {createContext} from "react";
import {AuthContextType} from "@/app/lib/types";

export const AuthContext = createContext<AuthContextType | undefined>(undefined)