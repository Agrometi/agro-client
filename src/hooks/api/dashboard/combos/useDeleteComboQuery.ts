import { comboStore } from "@/store";

export default function useDeleteComboQuery() {
  const status = comboStore.use.deleteStatus();
  const deleteCombo = comboStore.use.delete();

  const deleteComboQuery = async (comboId: string) =>
    await deleteCombo({ comboId });

  return { deleteComboQuery, status };
}
