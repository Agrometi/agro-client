import { useNavigate } from "react-router-dom";

import { aboutUsStore } from "@/store";
import { EditAboutUsArgsT } from "@/interface/API/aboutUs.api.types";
import { PATHS } from "@/config/paths";

export default function useEditAboutUs() {
  const navigate = useNavigate();

  const edit = aboutUsStore.use.editAboutUs();
  const status = aboutUsStore.use.createStatus();

  const onEdit = async (args: EditAboutUsArgsT) => {
    await edit(args);
    navigate(PATHS.dashboard_about_us_page);
  };

  return { onEdit, status };
}
