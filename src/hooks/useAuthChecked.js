import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../redux/features/auth/authSlice";
import { useCheckExpire } from "./useCheckExpire";
import { useIsExistQuery } from "../redux/features/auth/authApi";

export const useAuthChecked = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [req, setReq] = useState(true);
  // const [email, setEmail] = useState("");
  // const { isSuccess } = useIsExistQuery(email, { skip: req });
  const dispatch = useDispatch();
  // const isExpire = useCheckExpire();
  // if (!isExpire) {
  //   dispatch(userLoggedOut());
  //   localStorage.setItem("auth", "");
  // }
  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        // setEmail(auth.user.email);
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: { ...auth.user },
          })
        );
        setReq(true);
        // console.log(isSuccess);
      }
    }
    setIsChecking(false);
    // }, [dispatch, isSuccess]);
  }, [dispatch]);
  return isChecking;
};
