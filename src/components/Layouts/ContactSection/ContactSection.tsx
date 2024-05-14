import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS_AND_ZIP,
} from "@/config/config";

import {
  LocationIcon,
  EmailIcon,
  ViberIcon,
  WhatsUpIcon,
  PhoneIcon,
  FacebookIcon,
} from "@/components/Layouts/Icons";
import * as Styled from "./contactSection.styled";

type ContactT = {};

const ContactSection: React.FC<ContactT> = () => {
  const COMPANY_PHONE_INDEXED = COMPANY_PHONE.replace(/-/g, "")
    .split(" ")
    .join("");

  const COMPANY_PHONE_SHORT = COMPANY_PHONE_INDEXED.replace("+995", "");

  return (
    <Styled.ContactSection>
      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <LocationIcon />
        </span>

        <div className="contact-box__detail">
          <span>{COMPANY_ADDRESS_AND_ZIP}</span>
        </div>
      </div>

      <a href={`mailto:${COMPANY_EMAIL}`} className="contact-box col-2">
        <span className="contact-box__icon">
          <EmailIcon />
        </span>

        <div className="contact-box__detail">
          <span>{COMPANY_EMAIL}</span>
        </div>
      </a>

      <a href={`tel:${COMPANY_PHONE_INDEXED}`} className="contact-box col-2">
        <span className="contact-box__icon">
          <PhoneIcon />
        </span>

        <div className="contact-box__detail">
          <span>{COMPANY_PHONE}</span>
        </div>
      </a>

      <a
        href={`https://wa.me/${COMPANY_PHONE_SHORT}`}
        referrerPolicy="no-referrer"
        target="_blank"
        className="contact-box col-2"
      >
        <span className="contact-box__icon">
          <WhatsUpIcon />
        </span>

        <div className="contact-box__detail">
          <span>WhatsApp</span>
        </div>
      </a>

      <a
        href={`viber://chat?number=${COMPANY_PHONE_SHORT}`}
        referrerPolicy="no-referrer"
        target="_blank"
        className="contact-box col-2"
      >
        <span className="contact-box__icon">
          <ViberIcon />
        </span>

        <div className="contact-box__detail">
          <span>Viber</span>
        </div>
      </a>

      <a
        className="contact-box col-2"
        href="https://www.facebook.com/agrometi"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <span className="contact-box__icon">
          <FacebookIcon />
        </span>

        <div className="contact-box__detail">
          <span>Facebook</span>
        </div>
      </a>
    </Styled.ContactSection>
  );
};

export default ContactSection;
