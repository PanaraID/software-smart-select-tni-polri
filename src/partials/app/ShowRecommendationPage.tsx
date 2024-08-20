import PAGES from "../../finals/basic/PAGES.ts";

import Recommendation1 from "../../pages/result/recomendations/Recommendation1.tsx";

type PropsType = {
  page: PAGES;
};

function ShowResultPage(props: PropsType) {
  switch (props.page) {
    case PAGES.RECOMMENDATION_1:
      return <Recommendation1 />;
  }
}

export default ShowResultPage;
