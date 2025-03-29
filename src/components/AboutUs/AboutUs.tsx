import { useGetAboutUs } from "@/hooks/api/aboutUs";

import {
  ContactSection,
  QuillEditor,
  ErrorMessage,
  RelativeSpinner,
  Header,
} from "@/components/Layouts";
import * as Styled from "./aboutUs.styled";
import AboutUsHeader from "./components/AboutUsHeader";

const AboutUs: React.FC = () => {
  const { data, status } = useGetAboutUs();

  return (
    <Styled.AboutUs>
      <Header />

      <AboutUsHeader />

      {!status.loading && !status.error && (
        <div className="about-us__body">
          <QuillEditor value={data} readonly={true} />

          <ContactSection />
        </div>
      )}

      {status.error && <ErrorMessage message={status.message} />}

      {status.loading && <RelativeSpinner />}
    </Styled.AboutUs>
  );
};

export default AboutUs;
