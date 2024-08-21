import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

type IClient = {
  method: string;
  path: string;
  data?: any;
  queryParams?: string;
  contentType?: string;
};

export const Client = async (params: IClient) => {
  const token = Cookies.get("accessTokenLecadance");

  const { path, method, data, queryParams, contentType } = params;

  const baseURL = import.meta.env.VITE_DEV_URL;

  const headers = {
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    "Content-Type": contentType ? contentType : "application/json",
    Accept: "application/json",
  };

  let url = `${baseURL}${path}`;

  const axiosConfig: AxiosRequestConfig = {
    method: method,
    url: url,
    timeout: 50000,
    headers: headers,
    params: queryParams,
    responseType: "json",
  };

  if (method?.toUpperCase() !== "GET") {
    axiosConfig.data =
      contentType === "multipart/form-data" ? data : JSON.stringify(data);
  }

  try {
    const response: AxiosResponse = await Axios(axiosConfig);
    return response;
  } catch (error) {
    console.error("Error in Axios request:", error);
    throw error;
  }
};
