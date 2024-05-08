import { lazy } from "react";

import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import { SuspenseContainer } from "@/components/Layouts";

const Article = lazy(() => import("@/components/Layouts/Article/Article"));

const ArticlePage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <Article root="client" />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default ArticlePage;
