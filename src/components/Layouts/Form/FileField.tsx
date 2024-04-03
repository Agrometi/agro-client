import { useRef } from "react";

import * as Styled from "./form.styled";
import { CloseIcon, PlayIcon } from "@/components/Layouts/Icons";

import { HookFormFileFieldT } from "@/interface/form.types";

type SingleFileT = string | File | Blob;
type MultipleFileT = Array<string> | Array<File> | Array<Blob>;

type FileFieldT = {
  label: string;
  anotation: string;
  hasError?: boolean;
  message: string;
  multiple?: boolean;
  accept?: string;
  fieldProps: HookFormFileFieldT;
  value: string | string[];
  onRemoveFile: (src: SingleFileT) => void;
};

const FileField: React.FC<FileFieldT> = (props) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const doesValueExists =
    (Array.isArray(props.value) && props.value.length > 0) ||
    (!Array.isArray(props.value) && props.value);

  return (
    <Styled.FileField data-input-file>
      <label htmlFor="form-file--upload" className="form__input-file--label">
        {props.label ? props.label : "აირჩიეთ ფაილი"}
      </label>

      {doesValueExists && (
        <InputFileFrame
          value={props.value}
          multiple={props.multiple || false}
          onRemoveFile={props.onRemoveFile}
        />
      )}

      <input
        hidden
        type="file"
        ref={fileRef}
        accept={props.accept || "*"}
        multiple={props.multiple}
        id="form-file--upload"
        onChange={props.fieldProps.onChange}
      />

      {props.anotation && !doesValueExists && (
        <label className="anotation-label" htmlFor="form-file--upload">
          {props.anotation}
        </label>
      )}

      {props.hasError && <p>{props.message}</p>}
    </Styled.FileField>
  );
};

export default FileField;

type InputFileFrameT = {
  multiple: boolean;
  value: SingleFileT | MultipleFileT;
  onRemoveFile: (src: SingleFileT) => void;
};

function InputFileFrame({ multiple, value, onRemoveFile }: InputFileFrameT) {
  return (
    <div
      className={`chosen-assets__review-box ${
        multiple ? "multiple" : "single"
      }`}
    >
      {multiple ? (
        (value as Array<string>)
          .slice(0, 10)
          .map((url: string, index: number) => (
            <AssetFigure
              key={`asset-to-upload__${index}`}
              url={url}
              index={index}
              onRemoveFile={onRemoveFile}
              assetsCount={Array.isArray(value) ? value.length : 0}
            />
          ))
      ) : (
        <AssetFigure url={value as SingleFileT} onRemoveFile={onRemoveFile} />
      )}
    </div>
  );
}

type AssetFigureT = {
  url: SingleFileT;
  index?: number;
  assetsCount?: number;
  onRemoveFile: (src: SingleFileT) => void;
};

function AssetFigure({ url, index, assetsCount, onRemoveFile }: AssetFigureT) {
  const onHandleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemoveFile && onRemoveFile(url);
  };

  const isFile = (v: any) => v instanceof File;
  const isVideo = (v: any) =>
    (isFile(v) && v.type.startsWith("video/")) ||
    (typeof v === "string" && v.endsWith(".mp4"));

  return (
    <figure className="chosen-assets__review-box--fig" key={`file-${index}`}>
      {isVideo(url) ? (
        <>
          <span className="play">
            <PlayIcon />
          </span>
          <video
            src={
              isFile(url) ? URL.createObjectURL(url as any) : (url as string)
            }
          />
        </>
      ) : (
        <img
          src={isFile(url) ? URL.createObjectURL(url as any) : (url as string)}
          alt="uploading file"
        />
      )}

      <button
        className={`remove-asset--btn ${
          assetsCount && assetsCount > 10 && index === 9 ? "hide-remove" : ""
        }`}
        onClick={onHandleRemove}
      >
        <CloseIcon />
      </button>

      {assetsCount && assetsCount > 10 && index === 9 && (
        <span className="extra-assets__layout">+{assetsCount - 10}</span>
      )}
    </figure>
  );
}
