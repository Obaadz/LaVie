import { FC, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/userReducer";
import getTokenFromCookies from "../utils/getTokenFromCookies";
import getUserFromToken from "../utils/getUserFromToken";

type Props = {
  children: ReactNode;
};

const LoadUser: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser(getUserFromToken(getTokenFromCookies())));
  }, [dispatch]);

  return <>{children}</>;
};

export default LoadUser;
