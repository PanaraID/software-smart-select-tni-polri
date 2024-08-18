import { createContext } from "react";

import PAGES from "../finals/basic/PAGES";

import MATRA from "../finals/MATRA.ts";
import BUTA_WARNA from "../finals/BUTA_WARNA.ts";
import MINUS from "../finals/MINUS.ts";

type AppContextType = {
  // Basic
  page: PAGES;
  setPage: (page: PAGES) => void;

  matra: keyof typeof MATRA | undefined;
  setMatra: (matra: MATRA) => void;

  butaWarna: keyof typeof BUTA_WARNA | undefined;
  setButaWarna: (matra: BUTA_WARNA) => void;

  minus: keyof typeof MINUS | undefined;
  setMinus: (matra: MINUS) => void;
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
