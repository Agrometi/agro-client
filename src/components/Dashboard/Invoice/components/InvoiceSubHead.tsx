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
        <Text style={{ ...styles.fontSizeSm, ...styles.normal }}>
          AGRO-ORNAMENT
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          ქ.ქუთაისი შარტავას 2/10 ზიპ - 4600
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          +995 555-14-57-19
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
