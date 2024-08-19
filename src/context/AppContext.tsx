import { createContext } from "react";

import PAGES from "../finals/basic/PAGES";

import MATRA from "../finals/MATRA.ts";
import BUTA_WARNA from "../finals/BUTA_WARNA.ts";
import MINUS from "../finals/MINUS.ts";

type AppContextType = {
  // Basic
  page: PAGES;
  setPage: (page: PAGES) => void;

  matra: MATRA | undefined;
  setMatra: (matra: MATRA) => void;

  butaWarna: BUTA_WARNA | undefined;
  setButaWarna: (butaWarna: BUTA_WARNA) => void;

  minus: MINUS | undefined;
  setMinus: (minus: MINUS) => void;
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
