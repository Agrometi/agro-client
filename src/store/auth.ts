import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

import { AxiosResponse } from "axios";
import { RouterHistory } from "@/config/config";
import { PATHS } from "@/config/paths";
import { logger, LocaleStorage as s } from "@/utils";
import { createSelectors, getStatus } from "./helpers";
import { axiosPublicQuery, axiosPrivateQuery } from "@/services/axios";

import * as AuthAPI_T from "@/interface/db/auth.types";
import { AuthStoreT, AuthStateT } from "@/interface/store/auth.store.types";

const initialState: AuthStateT = {
  status: getStatus("IDLE"),

  user: {
    _id: "",
    email: "",
    avatar: "",
    fullname: "",
  },
};

const useAuthStore = create<AuthStoreT>()(
  devtools(
    immer(
      persist(
        (set) => ({
          ...initialState,

          login: async (args) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              const { data }: AxiosResponse<AuthAPI_T.LoginResponseT> =
                await axiosPublicQuery.post(`/auth/signin`, args);

              const { user, accessToken } = data;

              s.setJWT(accessToken);

              set(() => ({ user, status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.dashboard_page);
            } catch (error) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          logout: async () => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPrivateQuery.post(`/auth/logout`);

              s.removeJWT();

              set(() => ({
                user: initialState.user,
                status: getStatus("SUCCESS"),
              }));

              RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          cleanUpStatus: () => {
            set(() => ({ status: initialState.status }));
          },
        }),
        {
          name: "agro_user",
          partialize: (state) => ({ user: state.user }),
        }
      )
    ),
    { name: "authentication" }
  )
);

export default createSelectors(useAuthStore);
