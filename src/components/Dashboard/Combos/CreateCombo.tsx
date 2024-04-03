import { useMemo } from "react";

import { useSearchParams } from "@/hooks/utils";
import { useCreateComboContext } from "@/Providers/useProviders";

import FilterProvider from "@/Providers/FilterProvider";

import * as UI from "./components";
import { Modal } from "@/components/Layouts";
import * as Styled from "./styles/createCombo.styled";
import { PublishIcon } from "@/components/Layouts/Icons";
import { useEffect } from "react";

const CreateCombo: React.FC = () => {
  const { getParam, setParam, removeParam } = useSearchParams();

  const { cleanUpForm } = useCreateComboContext();

  const isSelectingMedia = getParam("media") === "1";
  const isPublishing = getParam("publish") === "1";

  const onOpenComboModal = () => setParam("publish", "1");
  const onCloseComboModal = () => removeParam("publish");

  useEffect(() => {
    return () => {
      cleanUpForm();
    };
  }, []);

  const memorisedFilterableKeys = useMemo(() => ["search"], []);

  return (
    <>
      <Styled.CreateCombo>
        <FilterProvider filterableKeys={memorisedFilterableKeys}>
          <UI.ItemToChooseRow />
        </FilterProvider>

        <UI.ChosenItemsRow />

        <UI.ComboActiveItem />

        <button onClick={onOpenComboModal} className="combo-modal__toggle-btn">
          <PublishIcon />
        </button>
      </Styled.CreateCombo>

      <Modal open={isPublishing} onClose={onCloseComboModal}>
        <Styled.CreateComboModal>
          <UI.ChooseThumbnails hidden={isSelectingMedia ? false : true} />
          <UI.CreateComboForm hidden={isSelectingMedia ? true : false} />
        </Styled.CreateComboModal>
      </Modal>
    </>
  );
};

export default CreateCombo;
