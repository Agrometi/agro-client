import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useEditAboutUs } from "@/hooks/api/dashboard/aboutUs";

import {
  QuillEditor,
  ErrorMessage,
  EmptyMessage,
  Button,
  RelativeSpinner,
} from "@/components/Layouts";
import { EditIcon } from "@/components/Layouts/Icons";
import * as Styled from "./aboutUs.styled";
import { useGetAboutUs } from "@/hooks/api/aboutUs";

type AboutUsT = {
  allowActions?: boolean;
  isEditing: boolean;
};

const AboutUs: React.FC<AboutUsT> = ({ isEditing, allowActions = false }) => {
  const navigate = useNavigate();

  const onToggleEdit = () =>
    navigate(
      isEditing
        ? PATHS.dashboard_about_us_page
        : PATHS.dashboard_edit_about_us_page
    );

  const { data, status } = useGetAboutUs();
  const { onEdit, status: createStatus } = useEditAboutUs();

  const [quillValue, setQuillValue] = useState("");
  const onHandleEdit = () => onEdit({ body: quillValue });

  const loading = status.loading || createStatus.loading;
  const hasError = status.error || createStatus.error;
  const message = status.message || createStatus.message;

  useEffect(() => {
    if (!data) return;
    setQuillValue(() => data);
  }, [data]);

  return (
    <Styled.AboutUs>
      {!loading && !hasError && (
        <>
          {allowActions && (
            <button
              onClick={onToggleEdit}
              className={`edit-btn ${isEditing ? "cancel" : ""}`}
            >
              {isEditing ? <span>უკან დაბრუნება</span> : <EditIcon />}
            </button>
          )}

          <QuillEditor
            value={quillValue}
            setValue={setQuillValue}
            readonly={!isEditing}
          />

          {allowActions && isEditing && (
            <Button
              onClick={onHandleEdit}
              style={{ width: "100%", padding: "1rem 0" }}
            >
              გამოქვეყნება
            </Button>
          )}
        </>
      )}

      {status.status === "SUCCESS" && !data && !isEditing && (
        <>
          <EmptyMessage message="' ჩვენს შესახებ '  ტექსტი არ არის დამატებული" />

          <Button
            onClick={onToggleEdit}
            show="primary"
            style={{ margin: "0 auto" }}
          >
            დამატება
          </Button>
        </>
      )}

      {hasError && <ErrorMessage message={message} />}

      {loading && <RelativeSpinner />}
    </Styled.AboutUs>
  );
};

export default AboutUs;
