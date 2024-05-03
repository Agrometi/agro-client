import { Outlet } from "react-router-dom";

import BlogLayout from "@/components/Dashboard/Blog/BlogLayout";

const DashboardBlogPage: React.FC = () => {
  return (
    <BlogLayout>
      <Outlet />
    </BlogLayout>
  );
};

export default DashboardBlogPage;
