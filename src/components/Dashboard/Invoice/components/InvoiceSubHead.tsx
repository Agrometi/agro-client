import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS_AND_ZIP,
  COMPANY_BANK_NUMBER,
} from "@/config/config";

import styles from "./invoiceStyles.ts";
import { View, Text } from "@react-pdf/renderer";

type InvoiceSubHeadT = {
  customerName: string;
  customerPhone: string;
  customerId: string;
  customerAddress: string;
};

const InvoiceSubHead: React.FC<InvoiceSubHeadT> = ({
  customerId,
  customerName,
  customerPhone,
  customerAddress,
}) => {
  return (
    <View style={{ ...styles.subHead }}>
      <View style={{ ...styles.flexCol }}>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm, ...styles.bold }}>
          კომაპანია:
        </Text>
        <Text
          style={{ ...styles.fontSizeSm, ...styles.normal, ...styles.noto }}
        >
          {COMPANY_NAME}
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          {COMPANY_ADDRESS_AND_ZIP}
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          ტელ:&nbsp;{COMPANY_PHONE}
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          თიბისი ბანკი:&nbsp;{COMPANY_BANK_NUMBER}
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          ელ-ფოსტა:&nbsp;{COMPANY_EMAIL}
        </Text>
      </View>

      <View style={{ ...styles.flexCol }}>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm, ...styles.bold }}>
          მომხმარებელი:
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          {customerName}
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          {customerAddress}
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          +995 {customerPhone.slice(0, 3)}-{customerPhone.slice(3, 5)}-
          {customerPhone.slice(5, 7)}-{customerPhone.slice(7, 9)}
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          {customerId}
        </Text>
      </View>
    </View>
  );
};

export default InvoiceSubHead;
