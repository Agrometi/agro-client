import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { categoryStore } from "@/store";
import useCategoryForm from "@/utils/validations/dashboard/CategorySchema";

import { CategoryT } from "@/interface/db/category.types";

export default function useCreateCategoryQuery() {
  const form = useCategoryForm();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [candidateCategoryId, setCandidateCategoryId] = useState("");

  const status = categoryStore.use.createStatus();
  const create = categoryStore.use.create();
  const update = categoryStore.use.update();

  const onStartUpdate = (category: CategoryT) => {
    form.reset({ title: category.title });
    setCandidateCategoryId(category._id);
  };

  const createCategoryQuery = form.handleSubmit(async (values) => {
    if (candidateCategoryId) {
      await update({
        data: values,
        params: { categoryId: candidateCategoryId },
      });

      navigate(pathname);
    } else await create(values);

    form.reset({ title: "" });
  });

  return { form, status, onStartUpdate, createCategoryQuery };
}
