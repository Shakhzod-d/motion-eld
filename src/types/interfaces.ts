export interface LoginData {
  login: string;
  password: string;
}
export type ISetState<S> = React.Dispatch<React.SetStateAction<S>>;
export type TItemStatus =
  | "on"
  | "dr"
  | "sb"
  | "off"
  | "off_pc"
  | "on_ym"
  | "intermediate"
  | "login"
  | "logout"
  | "power_off"
  | "power_on";
export type RangeLogStatus = "on" | "dr" | "sb" | "off" | "off_pc" | "on_ym";
export interface IOption<T> {
  name: string;
  value: T;
}
export interface IftaReportColumns {
  key: string;
  vehicle: string;
  state: string;
  melis: string;
}
export interface ArticleProps {
  id: number;
  title: string;
  text: string;
  status: string;
  desc: string;
  time?: string;
}


export interface ILog {
  coDriverId: string;
  companyId: string;
  createdAt?: string;
  distance: number;
  document: string;
  driverId: string;
  duration: number;
  end: number;
  engineHours: number;
  hasCycle?: false;
  hasFlag?: false;
  isDeleted?: false;
  isEnded?: true;
  isFirst?: false;
  location: { lat: number; lng: number; name: string; _id?: string };
  notes: string;
  odometer: number;
  serviceId: string;
  start: number;
  status: TItemStatus;
  trailer: string;
  updatedAt?: string;
  vehicleId?: string;
  vehicleUnit?: string;
  __v?: number;
  _id?: string;

  index: number;
  isCropped?: boolean;
  cropPoint?: string;
  isNewLog: boolean;
  rangeVal: [number, number];

  startOdometer?: number;
  endOdometer?: number;
  odometerDuration?: number;
}