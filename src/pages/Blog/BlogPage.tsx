import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

const Blog = lazy(() => import("@/components/Blog/Blog"));

const BlogPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <Blog />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default BlogPage;
