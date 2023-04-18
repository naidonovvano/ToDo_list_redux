import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.users);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
