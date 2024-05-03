import { PATHS } from "@/config/paths";
import Navigation from "@/components/Dashboard/utils/Navigation";

type BlogLayoutT = {
  children: React.ReactNode;
};

const routes = [
  {
    title: "სტატიები",
    path: PATHS.dashboard_blog_articles_page,
  },
  {
    title: "შექმენი სტატია",
    path: PATHS.dashboard_create_article_page,
  },
];

const BlogLayout: React.FC<BlogLayoutT> = ({ children }) => {
  return (
    <div>
      <Navigation routes={routes} />
      {children}
    </div>
  );
};

export default BlogLayout;
