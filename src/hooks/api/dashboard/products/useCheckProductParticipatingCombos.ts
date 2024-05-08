import { useState } from "react";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";

export default function useCheckProductParticipatingCombos() {
  const [loading, setLoading] = useState(false);

  const check = async (
    productId: string
  ): Promise<Array<{ _id: string; title: string }> | undefined> => {
    try {
      setLoading(true);

      const { data }: AxiosResponse<Array<{ _id: string; title: string }>> =
        await axiosPrivateQuery.get(`/products/${productId}/combos`);

      return data;
    } catch (error) {
      logger(error);
    } finally {
      setLoading(false);
    }
  };

  return { check, loading };
}
