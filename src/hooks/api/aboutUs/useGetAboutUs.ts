import { useEffect } from "react";

import { aboutUsStore } from "@/store";

export default function useGetAboutUs() {
  const get = aboutUsStore.use.getAboutUs();
  const cleanUp = aboutUsStore.use.cleanUpAboutUs();

  const status = aboutUsStore.use.status();
  const data = aboutUsStore.use.aboutUs();

  useEffect(() => {
    get();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
