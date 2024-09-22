import { CustomTable } from "../../components/shared";
import { trackingData, trackingHeader } from "../../utils/constants";


export function Trackings() {
  return <CustomTable data={trackingData} columns={trackingHeader} />;
}
