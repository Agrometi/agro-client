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

      <a
        href={`mailto:${COMPANY_EMAIL}`}
        className="contact-box col-2"
        title="ელ-ფოსტის გაგზავნა Agrometi-სთვის"
        aria-label="მიწერეთ ელ-ფოსტა Agrometi-ს"
      >
        <span className="contact-box__icon">
          <EmailIcon />
        </span>

        <div className="contact-box__detail">
          <span>{COMPANY_EMAIL}</span>
        </div>
      </a>

      <a
        href={`tel:${COMPANY_PHONE_INDEXED}`}
        className="contact-box col-2"
        title="დაურეკეთ Agrometi-ს მობილურის-ის საშუალებით"
        aria-label="დაურეკეთ Agrometi-ს მობილურის-ის საშუალებით"
      >
        <span className="contact-box__icon">
          <PhoneIcon />
        </span>

        <div className="contact-box__detail">
          <span>{COMPANY_PHONE}</span>
        </div>
      </a>

      <a
        target="_blank"
        referrerPolicy="no-referrer"
        className="contact-box col-2"
        href={`https://wa.me/${COMPANY_PHONE_SHORT}`}
        title="დაურეკეთ Agrometi-ს WhatsApp-ის საშუალებით"
        aria-label="დაურეკეთ Agrometi-ს WhatsApp-ის საშუალებით"
      >
        <span className="contact-box__icon">
          <WhatsUpIcon />
        </span>

        <div className="contact-box__detail">
          <span>WhatsApp</span>
        </div>
      </a>

      <a
        target="_blank"
        referrerPolicy="no-referrer"
        className="contact-box col-2"
        title="დაურეკეთ Agrometi-ს viber-ის საშუალებით"
        aria-label="დაურეკეთ Agrometi-ს viber-ის საშუალებით"
        href={`viber://chat?number=${COMPANY_PHONE_SHORT}`}
      >
        <span className="contact-box__icon">
          <ViberIcon />
        </span>

        <div className="contact-box__detail">
          <span>Viber</span>
        </div>
      </a>

      <a
        target="_blank"
        referrerPolicy="no-referrer"
        className="contact-box col-2"
        title="ნახეთ Agrometi-ს facebook-ის გვერდი"
        aria-label="ნახეთ Agrometi-ს facebook-ის გვერდი"
        href="https://www.facebook.com/agrometi"
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
