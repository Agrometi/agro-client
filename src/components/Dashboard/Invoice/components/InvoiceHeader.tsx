import { View, Image, Text } from "@react-pdf/renderer";

import { getTimeString } from "@/utils";
import styles from "./invoiceStyles.ts";

type InvoiceHeaderT = {
  createdAt: string;
  invoiceNumber: string;
};

const InvoiceHeader: React.FC<InvoiceHeaderT> = ({
  createdAt,
  invoiceNumber,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.headerLeftFig}>
          <Image
            src="http://localhost:5173/icon-72x72.png"
            style={styles.headerLeftFigImg}
          />
        </View>

        <View>
          <View style={{ ...styles.flexRow, ...styles.fontSizeSm }}>
            <Text style={styles.noto}>ინვოისის ნომერი:</Text>
            &nbsp;
            <Text>{invoiceNumber}</Text>
          </View>

          <View style={{ ...styles.flexRow, ...styles.fontSizeSm }}>
            <Text style={styles.noto}>შეკვეთის თარიღი:</Text>
            &nbsp;
            <Text>{getTimeString(createdAt, "dayMonthYearConfig")}</Text>
          </View>
        </View>
      </View>

      <View style={styles.invoiceHeaderRight}>
        <Image
          src="/assets/text-logo.png"
          style={styles.invoiceHeaderRightImg}
        />
      </View>
    </View>
  );
};

export default InvoiceHeader;
