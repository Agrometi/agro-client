import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useSearchParams } from "@/hooks/utils";
import { useCreateCategoryQuery } from "@/hooks/api/dashboard/categories";

import {
  Button,
  FormTitle,
  TextField,
  StandSpinner,
  ErrorMessage,
} from "@/components/Layouts";
import * as Styled from "./styles/createCategory.styled";

import { CategoryT } from "@/interface/db/category.types";

const CreateCategory: React.FC = () => {
  const { state } = useLocation();
  const { getParam } = useSearchParams();

  const { form, status, onStartUpdate, createCategoryQuery } =
    useCreateCategoryQuery();

  const isEditing = getParam("category");
  const candidateCategory: CategoryT | undefined = state?.category;

  useEffect(() => {
    if (isEditing && candidateCategory) onStartUpdate(candidateCategory);
  }, [isEditing, candidateCategory]);

  return (
    <Styled.CreateCategory>
      <FormTitle
        path={PATHS.dashboard_your_categories_page}
        title={isEditing ? "კატეგორიის რედაქტირება" : "შექმენი კატეგორია"}
      />

      <form className="create-category__form">
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="სათაური"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Button
          show="secondary"
          disabled={status.loading}
          onClick={createCategoryQuery}
          className="create-category__btn"
        >
          {isEditing ? "რედაქტირება" : "შექმნა"}
        </Button>
      </form>

      {status.loading && <StandSpinner />}

      {status.error && <ErrorMessage message={status.message} align="center" />}
    </Styled.CreateCategory>
  );
};

export default CreateCategory;
