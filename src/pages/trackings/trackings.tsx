import { useSelector } from "react-redux";
import { MapArticle } from "../../components/shared";
import { TrackingsMapItem } from "../../utils/constants";
import { Map, Wrapper } from "./trackings-styled";
import { RootState } from "../../store/store";

export function Trackings() {
  const sidebarActive = useSelector(
    (state: RootState) => state.booleans.sidebarActive
  );
  return (
    <Wrapper>
      <MapArticle data={TrackingsMapItem} search={false} width={"500px"} />
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
