import PAGES from "../../finals/basic/PAGES.ts";
import MatraPaPKTNI from "../../pages/result/matra/MatraPaPKTNI.tsx";

import ResultPage from "../../pages/result/ResultPage.tsx";

type PropsType = {
  page: PAGES;
};

function ShowResultPage(props: PropsType) {
  switch (props.page) {
    case PAGES.RESULT:
      return <ResultPage />;
    case PAGES.MATRA_PA_PK_TNI:
      return <MatraPaPKTNI />;      
  }
}

export default ShowResultPage;
