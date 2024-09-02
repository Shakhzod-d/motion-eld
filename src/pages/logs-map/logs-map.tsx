import { MapArticle } from "../../components/shared";
import { ArticleMapItem } from "../../utils/constants";
import { Map, Wrapper } from "./logs-map-styled";

export function LogsMap() {
  return (
    <Wrapper>
      <MapArticle data={ArticleMapItem} search={true} width={"350px"}/>
      <Map>
        <iframe
          src="https://yandex.uz/map-widget/v1/?um=constructor%3A31d0b3b1d6458e4ef408bb6eeb5c3278cc2ff150ae9b84e02b99e2ae3c9872b6&amp;source=constructor"
          width={"100%"}
          height={"100%"}
        ></iframe>
      </Map>
    </Wrapper>
  );
}
