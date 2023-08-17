
import initStore from "../store/redux/initStore";

const initApp = async () => {
 
  let currentUser= null;
  try {
    // if (JwtManager.accessToken) {
    //   currentUser = await AuthManager.getUserFromToken();
    // }
  } catch (e) {
    console.log("initApp", e);
  }
  const appStore = initStore(currentUser);
  
  return appStore;
};
export default initApp;
