import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.users);//или users

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
