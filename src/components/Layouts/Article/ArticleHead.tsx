import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { getTimeString } from "@/utils";

import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

import { ArticleT } from "@/interface/db/blog.types";

type ArticleHeadT = {
  article: ArticleT;
  root: "dashboard" | "client";
  onDelete: (slug: string) => void;
};

const ArticleHead: React.FC<ArticleHeadT> = ({ article, root, onDelete }) => {
  const handleDelete = () => onDelete(article._id);

  return (
    <div className="article-head">
      <span>{getTimeString(article.createdAt || "")}</span>

      {root === "dashboard" && (
        <>
          <button onClick={handleDelete}>
            <DeleteIcon />
          </button>

          <Link state={{ article }} to={PATHS.dashboard_create_article_page}>
            <EditIcon />
          </Link>
        </>
      )}
    </div>
  );
};

export default ArticleHead;
