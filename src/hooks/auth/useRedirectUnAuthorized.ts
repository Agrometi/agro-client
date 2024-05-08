/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logger } from "@/utils";
import { PATHS } from "@/config/paths";
import useCheckIsAuthenticatedUser from "./useCheckIsAuthenticatedUser";

export default function useRedirectUnAuthorized() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const { check } = useCheckIsAuthenticatedUser();

  useEffect(() => {
    (async () => {
      try {
        const { isAuthenticatedUser } = await check();
        if (!isAuthenticatedUser) navigate(PATHS.auth_page);
      } catch (error) {
        logger(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading };
}
