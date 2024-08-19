import { createContext } from "react";
import AppContextType from "./AppContextType.ts";

const AppContext = createContext({} as AppContextType);

export default AppContext;
