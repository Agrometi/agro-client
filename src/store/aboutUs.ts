import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { getStatus, createSelectors } from "./helpers";
import { axiosPrivateQuery, axiosPublicQuery } from "@/services/axios";

import {
  AboutUsStateT,
  AboutUsStoreT,
} from "@/interface/store/aboutUs.store.types";

const initialState: AboutUsStateT = {
  aboutUs: "",
  status: getStatus("IDLE"),
  createStatus: getStatus("IDLE"),
};

const useAboutUsStore = create<AboutUsStoreT>()(
  immer((set) => ({
    ...initialState,

    async editAboutUs(args) {
      try {
        set(() => ({ createStatus: getStatus("PENDING") }));

        const { data }: AxiosResponse<{ body: string }> =
          await axiosPrivateQuery.post("/about-us", { body: args.body });

        set(() => ({ createStatus: getStatus("SUCCESS"), aboutUs: data.body }));
      } catch (error) {
        const message = logger(error);
        set(() => ({ createStatus: getStatus("FAIL", message) }));
        throw error;
      }
    },

    async getAboutUs() {
      try {
        set(() => ({ status: getStatus("PENDING") }));

        const { data }: AxiosResponse<{ body: string }> =
          await axiosPublicQuery.get("/about-us");

        set(() => ({
          status: getStatus("SUCCESS"),
          aboutUs: data.body,
        }));
      } catch (error) {
        const message = logger(error);
        set(() => ({ status: getStatus("FAIL", message) }));
        throw error;
      }
    },

    cleanUpAboutUs() {
      set(() => ({
        aboutUs: initialState.aboutUs,
        status: initialState.status,
      }));
    },
  }))
);

export default createSelectors(useAboutUsStore);
