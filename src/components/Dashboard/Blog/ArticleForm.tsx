import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Controller } from "react-hook-form";

import { useCreateArticleQuery } from "@/hooks/api/blog";

import {
  Dropdown,
  QuillEditor,
  ErrorMessage,
  TextareaField,
  StandSpinner,
} from "@/components/Layouts";
import { ArrowTriangleIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/articleForm.styled";

import { ArticleT } from "@/interface/db/blog.types";

const categoryOptions = [
  { label: "ბლოგი", value: "blog" },
  { label: "პროექტები", value: "projects" },
];

const ArticleForm: React.FC = () => {
  const { state } = useLocation();
  const article: ArticleT | undefined = state?.article;
  const isUpdating = article ? true : false;

  const { form, onCreate, status, onStartUpdate } = useCreateArticleQuery(
    article?._id || ""
  );

  useEffect(() => {
    if (!article) return;

    onStartUpdate({
      title: article.title,
      body: article.body,
      category: article.category,
    });
  }, [article]);

  const body = form.getValues("body");

  // lazy load images in quill editor
  useEffect(() => {
    const quill = document.querySelector(".ql-container.ql-snow");
    const timeoutId = setTimeout(() => {
      if (!quill) return;

      const images = Array.from(quill.querySelectorAll("img"));

      if (images.length > 0)
        images.forEach((image) => {
          image.setAttribute("loading", "lazy");
        });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [body]);

  return (
    <Styled.ArticleForm>
      <div className="editor-wrapper">
        <Controller
          name="category"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <Dropdown
              Button={
                <span className="category-btn">
                  {categoryOptions.find(
                    (option) => option.value === field.value
                  )?.label || "კატეგორია"}

                  <ArrowTriangleIcon />
                </span>
              }
              data={categoryOptions.map((option) => ({
                ...option,
                active: field.value === option.value,
                onSelect: () => field.onChange(option.value),
              }))}
              hasError={error ? true : false}
              message={error?.message}
              dropdownClass="category-dropdown"
            />
          )}
        />

        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <TextareaField
              rows={2}
              message={error?.message}
              hasError={error ? true : false}
              fieldProps={field}
              placeholder="სათაური"
              className="title-field"
            />
          )}
        />

        <Controller
          control={form.control}
          name="body"
          render={({ field, fieldState: { error } }) => (
            <QuillEditor
              value={field.value}
              setValue={field.onChange}
              hasError={error ? true : false}
              message={error?.message}
            />
          )}
        />

        {status.error && (
          <ErrorMessage message={status.message} align="center" />
        )}

        <button
          className="publish-btn"
          onClick={onCreate}
          disabled={status.loading}
        >
          {isUpdating ? "განახლება" : "გამოქვეყნება"}
        </button>
      </div>

      {status.loading && <StandSpinner />}
    </Styled.ArticleForm>
  );
};

export default ArticleForm;
