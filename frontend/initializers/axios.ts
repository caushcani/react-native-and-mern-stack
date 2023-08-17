import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig } from "axios";
interface IAxiosRequestConfigRetry extends AxiosRequestConfig {
  _retry: boolean;
  _noAuth: boolean;
}
//TODO: add notification
// const handleResponseMessage = (
//   message: string,
//   notificationType: eNotificationType
// ) => {
//   switch (notificationType) {
//     case eNotificationType.SUCCESS:
//       reduxManager.dispatch(createAlert({ message, timeout: 3000 }));
//       break;
//     case eNotificationType.ERROR:
//       reduxManager.dispatch(
//         createAlert({ message, timeout: 5000, type: eNotificationType.ERROR })
//       );
//       break;
//     default:
//       Error("handleResponseMessage: Notification Type not handled");
//   }
// };
const clearSession = () => {
  AsyncStorage.clear();
};

const getToken = async () => {
  const jwt = await AsyncStorage.getItem("access_token");
  if (jwt) {
    return jwt;
  }
  return null;
};

const axiosInit = async () => {
  axios.defaults.baseURL = `http://192.168.22.57:3001/api/`;
  axios.interceptors.request.use(async (request) => {
    const token = await AsyncStorage.getItem("access_token");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }

    return request;
  });
  axios.interceptors.response.use(null, async (error) => {
    const originalRequest: IAxiosRequestConfigRetry = error.config;
    if (originalRequest._noAuth) {
      throw error.response;
    }
    if (error.response) {
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          //   const res = await AuthManager.refreshToken(
          //     JwtManager.accessToken,
          //     JwtManager.refreshToken
          //   );
          //   if (res && res.accessToken && res.refreshToken) {
          //     originalRequest.headers.Authorization = `Bearer ${res.accessToken}`;
          //     originalRequest.headers['Accept-Language'] = AppStorageManager.getItem('i18nextLng')
          //     return axios(originalRequest);
          //   }
          //   clearSession();
        } catch {
          //   clearSession();
        }
      }
      if (error.response.data?.Message) {
        // handleResponseMessage(
        //   error.response.data?.Message,
        //   eNotificationType.ERROR
        // );
      }
      if (error.response.status === 404) {
        Error("axiosInit: action not found");
      }
    }
  });
};

export default axiosInit;
