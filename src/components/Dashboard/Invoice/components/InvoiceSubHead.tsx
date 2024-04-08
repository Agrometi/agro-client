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
          შპს აგრო-ორნამენტი
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          ქ.ქუთაისი ჟ.შარტავას 10 ს/კ 238775919
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          ტელ:&nbsp;+995 555-14-57-19
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          თიბისი ბანკი:&nbsp;GE42TB7162036050100002
        </Text>
        <Text style={{ ...styles.noto, ...styles.fontSizeSm }}>
          ელ-ფოსტა:&nbsp;agroornament@gmail.com
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
