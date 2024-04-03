import { View, Text } from "@react-pdf/renderer";
import styles from "./invoiceStyles.ts";

type InvoiceFooterT = {
  priceSum: number;
};

const InvoiceFooter: React.FC<InvoiceFooterT> = ({ priceSum }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginTop: "20px",
        justifyContent: "flex-end",
        paddingRight: "20px",
      }}
    >
      <Text style={{ ...styles.noto, ...styles.fontSizeSm, ...styles.bold }}>
        სულ გადასახდელი თანხა:
      </Text>
      <Text style={{ ...styles.noto, ...styles.fontSizeSm, ...styles.bold }}>
        {priceSum}₾
      </Text>
    </View>
  );
};

export default InvoiceFooter;
