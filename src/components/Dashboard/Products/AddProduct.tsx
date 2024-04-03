import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useSearchParams } from "@/hooks/utils";
import { useGetCategoriesQuery } from "@/hooks/api/dashboard/categories";
import { useCreateProductQuery } from "@/hooks/api/dashboard/products";

import * as Form from "@/components/Layouts/Form";
import * as Styled from "./styles/addProduct.styled";
import { CloseIcon, PlusIcon } from "@/components/Layouts/Icons";
import { Button, StandSpinner, ErrorMessage } from "@/components/Layouts";

import { ProductT } from "@/interface/db/product.types";

const AddProduct: React.FC = () => {
  const { state } = useLocation();
  const { getParam } = useSearchParams();

  const form = useCreateProductQuery();

  const isEditing = getParam("product");
  const candidateProduct: ProductT | undefined = state?.product;

  useEffect(() => {
    if (isEditing && candidateProduct) form.onStartUpdate(candidateProduct);
  }, [isEditing, candidateProduct]);

  // ========== CATEGORY SUGGESTIONS ==========
  const { data: categories, status: categoriesStatus } =
    useGetCategoriesQuery();

  const categoryOptions = useMemo(
    () => categories.map((c) => ({ title: c.title, value: c._id })),
    [categories]
  );

  return (
    <Styled.AddProduct>
      <Form.FormTitle
        path={PATHS.dashboard_your_products_page}
        title={isEditing ? "პროდუქტის რედაქტირება" : "პროდუქტის დამატება"}
      />

      <form>
        <Controller
          control={form.form.control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <Form.TextField
              label="სათაური"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Controller
          control={form.form.control}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <Form.TextareaField
              rows={4}
              label="აღწერა"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Controller
          control={form.form.control}
          name="price"
          render={({ field, fieldState: { error } }) => (
            <Form.TextField
              label="ფასი"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Controller
          name="category"
          control={form.form.control}
          render={({ field }) => (
            <Form.SelectField
              label="კატეგორია"
              value={field.value}
              placeholder="მიუთითე კატეგორია"
              options={categoryOptions}
              loading={categoriesStatus.loading}
              onSelect={(v) => field.onChange(v)}
            />
          )}
        />

        {form.sizesField.fields.map((sizeField, index) => (
          <div
            key={sizeField.id}
            className={`size-field__block ${index === 0 ? "first" : ""}`}
          >
            <Controller
              name={`sizes.${index}.size`}
              control={form.form.control}
              render={({ field, fieldState: { error } }) => (
                <Form.TextField
                  fieldProps={field}
                  message={error?.message || ""}
                  hasError={error ? true : false}
                  label={index === 0 ? "ზომა" : ""}
                  placeholder={index > 0 ? "ზომა" : ""}
                />
              )}
            />

            {form.sizesField.fields.length > 1 && (
              <button
                className="remove-field__btn"
                onClick={(e) => {
                  e.preventDefault();
                  form.onRemoveSizeField(index);
                }}
              >
                <CloseIcon />
              </button>
            )}
          </div>
        ))}

        <button
          onClick={form.onAppendSizeField}
          className="add-size--field__btn"
        >
          <PlusIcon />
          ზომის ველის დამატება
        </button>

        <Controller
          control={form.form.control}
          name="assets"
          render={({ field, fieldState: { error } }) => (
            <Form.FileField
              label="მულტიმედია"
              multiple={true}
              value={field.value}
              onRemoveFile={form.onRemoveFile}
              message={error?.message || ""}
              anotation="მიუთითეთ მულტიმედია"
              hasError={error ? true : false}
              fieldProps={{ ...field, onChange: form.onFileChange }}
            />
          )}
        />

        {form.status.error && (
          <ErrorMessage message={form.status.message} align="center" />
        )}

        <Button onClick={form.onCreateQuery} disabled={form.status.loading}>
          {isEditing ? "რედაქტირება" : "დამატება"}
        </Button>
      </form>

      {form.status.loading && <StandSpinner />}
    </Styled.AddProduct>
  );
};

export default AddProduct;
