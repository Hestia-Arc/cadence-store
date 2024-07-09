// import Axios from "axios";
// import Cookies from "js-cookie";

// export const Client = async (params) => {
//   const token = Cookies.get("accessTokenSCA");

//   const { path, method, data, queryParams, contentType } = params;

//   const baseURL = import.meta.env.VITE_PROD_URL;
  
//   const headers = {
//     ...(token && {
//       Authorization: `Bearer ${token}`,
//     }),
//     "Content-Type": contentType ? contentType : "application/json",
//     Accept: "application/json",
//   };

//   let url = `${baseURL}${path}`;

//   const axiosConfig = {
//     method: method,
//     url: url,
//     timeout: 50000,
//     headers: headers,
//     params: queryParams,
//     responseType: "json",
//   };

//   if (method?.toUpperCase() !== "GET") {
//     axiosConfig.data =
//       contentType === "multipart/form-data" ? data : JSON.stringify(data);
//   }

//   try {
//     const response = await Axios(axiosConfig);
//     return response;
//   } catch (error) {
//     console.error("Error in Axios request:", error);
//     throw error;
//   }
// };
