import { LoadingStatusT } from "@/interface/store/common.types";
import { EditAboutUsArgsT } from "@/interface/API/aboutUs.api.types";

type AboutUsStateT = {
  aboutUs: string;
  status: LoadingStatusT;
  createStatus: LoadingStatusT;
};

type AboutUsActionsT = {
  getAboutUs: () => Promise<void>;
  editAboutUs: (args: EditAboutUsArgsT) => Promise<void>;
  cleanUpAboutUs: () => void;
};

type AboutUsStoreT = AboutUsStateT & AboutUsActionsT;

export type { AboutUsStateT, AboutUsStoreT };
