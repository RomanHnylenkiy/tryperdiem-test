import { useSelector } from "react-redux";

import { useState } from "react";
import { authSelectors } from "@/bus/auth";

export const useData = () => {
  const userInfo = useSelector(authSelectors.getUserInfo);

  const [showModal, setShowModal] = useState<boolean>(false);

  return { userInfo, showModal, setShowModal };
};
