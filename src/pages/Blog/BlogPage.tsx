import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

const Blog = lazy(() => import("@/components/Blog/Blog"));

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet title="Agrometi | ბლოგი" canonical={PATHS.blog_page} />

      <Navigation />

      <SuspenseContainer>
        <Blog />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default BlogPage;
