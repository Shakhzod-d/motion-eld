import { useQuery, UseQueryOptions } from "react-query";
import { AxiosResponse } from "axios";
import api from "../api";

const errMessage = ["Unauthorized 1", "Unauthorized"];
const useApi = <Data = any, Error = any>(
  url: string,
  params: object = {},
  options: UseQueryOptions<AxiosResponse<Data>, Error> = {}
) =>
  // @ts-ignore
  useQuery([url, params], async () => api.get<Data>(url, { params }), {
    ...options,
    onError: (err) => {
      if (errMessage.includes(err.message)) {
        window.location.reload();
      }
    },
  });

export default useApi;
