import { memo } from "react";

import { useCreateComboContext } from "@/Providers/useProviders";

import {
  TextField,
  TextareaField,
  ErrorMessage,
  StandSpinner,
} from "@/components/Layouts";
import * as Styled from "./styles/createComboForm.styled";
import { MediaIcon, CloseIcon } from "@/components/Layouts/Icons";

type CreateComboFormT = {
  hidden: boolean;
};

const CreateComboForm: React.FC<CreateComboFormT> = memo(({ hidden }) => {
  const {
    title,
    onTitleChange,
    description,
    onDescriptionChange,
    price,
    onPriceChange,
    addedExistingAssets,
    onStartSelectMedia,
    newAssets,
    onRemoveNewAsset,
    onChooseNewAsset,
    errorMessage,
    onPublish,
    status,
  } = useCreateComboContext();

  return (
    <Styled.CreateComboForm
      className="create-combo__form-box"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <TextField
        label="სათაური"
        fieldProps={{
          name: "title",
          onChange: (e) =>
            onTitleChange(e as React.ChangeEvent<HTMLInputElement>),
          value: title,
        }}
        hasError={false}
        message=""
      />

      <TextareaField
        label="აღწერა"
        fieldProps={{
          name: "title",
          onChange: (e) =>
            onDescriptionChange(e as React.ChangeEvent<HTMLInputElement>),
          value: description,
        }}
        hasError={false}
        message=""
        rows={6}
      />

      <TextField
        label="ფასი"
        type="number"
        fieldProps={{
          name: "title",
          onChange: (e) =>
            onPriceChange(e as React.ChangeEvent<HTMLInputElement>),
          value: price.toString(),
        }}
        hasError={false}
        message=""
      />

      {addedExistingAssets.length > 0 && (
        <div className="chosen-existing--assets__review">
          {addedExistingAssets.slice(0, 5).map((asset, index) => (
            <figure key={asset}>
              {asset.endsWith(".webp") ? (
                <img
                  src={asset}
                  alt={asset}
                  title={asset}
                  loading="eager"
                  width={50}
                />
              ) : (
                <video
                  src={asset}
                  width="100%"
                  loop={true}
                  muted={true}
                  autoPlay={true}
                />
              )}
              {addedExistingAssets.length > 5 && index === 4 && (
                <span>+{addedExistingAssets.length - 5}</span>
              )}
            </figure>
          ))}
        </div>
      )}

      <button
        className="create-combo__form-btn media"
        onClick={onStartSelectMedia}
      >
        აირჩიე მედია ფაილები არსებულიდან
        <MediaIcon />
      </button>

      {newAssets.length > 0 && (
        <div className="chosen-existing--assets__review">
          {newAssets.slice(0, 5).map((asset, index) => (
            <figure key={`new-asset--${index}`}>
              <img
                src={URL.createObjectURL(asset)}
                alt="new asset"
                title="new asset"
                loading="eager"
                width={50}
              />

              {addedExistingAssets.length > 5 && index === 4 && (
                <span>+{addedExistingAssets.length - 5}</span>
              )}

              <button onClick={() => onRemoveNewAsset(index)}>
                <CloseIcon />
              </button>
            </figure>
          ))}
        </div>
      )}

      <label htmlFor="combo-file" className="media create-combo__form-btn">
        დაამატე ახალი მედია ფაილი
        <MediaIcon />
        <input
          type="file"
          accept="image/*"
          hidden={true}
          id="combo-file"
          multiple={true}
          onChange={onChooseNewAsset}
        />
      </label>

      {errorMessage && <ErrorMessage message={errorMessage} align="center" />}

      <button className="create-combo__form-btn publish" onClick={onPublish}>
        გამოქვეყნება
      </button>

      {status.loading && <StandSpinner />}
    </Styled.CreateComboForm>
  );
});

export default CreateComboForm;
