import { Dispatch } from '@reduxjs/toolkit';

class ReduxManager {
    dispatch: Dispatch<any> | undefined;
  }
  const reduxManager = new ReduxManager();
  export default reduxManager;
