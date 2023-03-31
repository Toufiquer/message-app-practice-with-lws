import { useSelector } from "react-redux";
export const useAuthInStore = () => {
  const { accessToken } = useSelector((state) => state.auth);
  if (accessToken) {
    return true;
  } else {
    return false;
  }
};
