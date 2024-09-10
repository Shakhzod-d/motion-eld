import { useSelector } from "react-redux";
import { MapArticle } from "../../components/shared";
import { ArticleMapItem } from "../../utils/constants";
import { Map, Wrapper } from "./logs-map-styled";
import { RootState } from "../../store/store";

export function LogsMap() {
  const sidebarActive = useSelector((state:RootState)=>state.booleans.sidebarActive)
  return (
    <Wrapper>
      <MapArticle data={ArticleMapItem} search={true} width={"350px"}/>
      <Map $active={sidebarActive}>
        <iframe
          src="https://yandex.uz/map-widget/v1/?um=constructor%3A31d0b3b1d6458e4ef408bb6eeb5c3278cc2ff150ae9b84e02b99e2ae3c9872b6&amp;source=constructor"
          width={"100%"}
          height={"100%"}
        ></iframe>
      </Map>
    </Wrapper>
  );
}
