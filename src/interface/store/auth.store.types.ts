import { UserT } from "@/interface/db/user.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { SignInArgsT } from "@/interface/db/auth.types";

type AuthStateT = {
  user: UserT;
  status: LoadingStatusT;
};

type AuthActionsT = {
  login: (args: SignInArgsT) => Promise<void>;
  logout: () => Promise<void>;
  cleanUpStatus: () => void;
};

type AuthStoreT = AuthStateT & AuthActionsT;

export type { AuthStoreT, AuthStateT };
