import { authStore } from "@/store";

export default function useLogoutQuery() {
  const logout = authStore.use.logout();

  const onLogout = async () => await logout();

  return { onLogout };
}
