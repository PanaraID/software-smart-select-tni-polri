import PAGES from "../../finals/basic/PAGES.ts";

import ResultPage from "../../pages/result/ResultPage.tsx";

type PropsType = {
  page: PAGES;
};

function ShowResultPage(props: PropsType) {
  switch (props.page) {
    case PAGES.RESULT:
      return <ResultPage />;
  }
}

export default ShowResultPage;
