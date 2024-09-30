import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

// import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckKesehatanTambahanPage() {
  const {} = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Tambahan Lainnya" />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckKesehatanTambahanPage;
