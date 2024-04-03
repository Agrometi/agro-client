import { NODE_MODE } from "@/config/env";

export default function logger(error: any): string {
  const message = error?.response?.data?.message || error?.message || "";

  NODE_MODE === "DEV" && console.log({ error, message });

  return message;
}
