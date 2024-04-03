import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useAppUIContext } from "@/Providers/useProviders";

import { Button } from "@/components/Layouts";
import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

import { CategoryT } from "@/interface/db/category.types";

type CategoryCardT = {
  category: CategoryT;
  deleteCategoryQuery: (categoryId: string) => Promise<void>;
};

const CategoryCard: React.FC<CategoryCardT> = ({
  category,
  deleteCategoryQuery,
}) => {
  const navigate = useNavigate();

  const onEdit = () =>
    navigate(
      `${PATHS.dashboard_create_category_page}?category=${category._id}`,
      { state: { category } }
    );

  const { activateDialog } = useAppUIContext();

  const onStartDelete = () =>
    activateDialog({
      target: "<CATEGORY>",
      message: "Are you sure you want to delete this category ?",
      onConfirm: () => deleteCategoryQuery(category._id),
      title: "Delete Category",
      type: "danger",
    });

  return (
    <li className="category-item">
      <p>{category.title}</p>

      <div className="category-item__actions">
        <Button onClick={onStartDelete} show="danger" fillType="outlined">
          <DeleteIcon />
        </Button>

        <Button onClick={onEdit} fillType="outlined">
          <EditIcon />
        </Button>
      </div>
    </li>
  );
};

export default CategoryCard;
