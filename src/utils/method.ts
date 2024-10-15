
import api from "../api";

export function validatePhoneNumber<T>(_: T, value: string) {
  const cleanedValue = value.replace(/\D/g, ""); // Faqat raqamlarni qoldiramiz
  if (cleanedValue.length !== 12) {
    return Promise.reject(
      new Error("Telefon raqami to'liq kiritilishi kerak!")
    );
  }
  return Promise.resolve();
}

export const CompanyData = async(id: string) => {
  const  {data } = await api.get(`/company/${id}`);
  return data;
};
