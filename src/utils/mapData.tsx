import { HiPhone } from "react-icons/hi2";
import { ObjType } from "../types/helper.type";
import { IoMdMail } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { useDate } from "../hooks/useDate";

function calculateDaysBetweenDates(startDate: string): number {
  // Sana: ISO formatidagi satrni Date ob'ektiga o'zgartirish
  const start = new Date(startDate);
  const endDate = new Date();
  // Har ikkala sana orasidagi farqni millisekundlarda hisoblash
  const differenceInTime = endDate.getTime() - start.getTime();

  // Millisekundlarni kunlarga o'zgartirish (millisekund -> sekund -> soat -> kun)
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays == 0 ? 1 : differenceInDays;
} // 3 kun

// Test qilish
export const mapUserData = (data: ObjType[]) => {
  return data?.map((item) => {
    const role = item["role"] as ObjType;
    const daysBetween = calculateDaysBetweenDates(String(item.updatedAt));
    return {
      _id: item._id,
      name: {
        label: `${item.firstName} ${item.lastName}`,
        img: "/company-logo.png",
        data: [{ id: 1, text: item.email }],
      },
      updated: { label: `${daysBetween} day ago` },
      carrier: {
        label: item.companyName,
      },
      status: {
        label: "Active",
      },

      role: {
        label: role["roleName"],
      },
      edit: { label: "Edit" },
    };
  });
};

export const mapCompanies = (data: ObjType[]) => {
  return data?.map((item) => {
    const createdAt = useDate(item && item?.createdAt);
    const edited = useDate(item && item.updatedAt);
    return {
      id: item._id,
      name: {
        label: item.companyName,
        img: "/company-logo.png",
        data: [
          { id: 1, text: item.phone, icon: <HiPhone /> },
          { id: 2, text: "support@asritsolutions.com", icon: <IoMdMail /> },
        ],
      },
      status: { label: item.isActive ? "Active" : "notActive" },
      contact: {
        label: "",
        data: [
          { id: 1, text: "Farmon Muhammadiyev (Owner)", icon: <RiUser3Fill /> },
          { id: 2, text: " (318) 818-0000", icon: <HiPhone /> },
          { id: 3, text: "zavajan96@gmail.com", icon: <IoMdMail /> },
        ],
      },
      created: {
        label: "",
        data: [
          { id: 1, text: `Created: ${createdAt}`, icon: "" },
          { id: 2, text: `Edited: ${edited}`, icon: "" },
        ],
      },
      edit: { label: "Edit" },
    };
  });
};

export const companyDrivers = (data: ObjType[]) => {
  return data.map((item,i) => {
    return {
      id: i,
      f_name: item.firstName,
      l_name: item.lastName,
      u_name: item.username,
      co_driver: "",
      vehicle: item.vehicleId,
      driver_Type: "",
      app_version: "4.6.7",
      documents: "Not uploaded",
      activated: "2024-03-02",
      device_info: item.deviceInfo,
      action: "",
    };
  });
};


