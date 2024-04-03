import { Font, Page, Document, PDFViewer } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";

import styles from "./components/invoiceStyles.ts";
import NotoSansFont from "./fonts/noto-sans.ttf";
import NotoSansFontLight from "./fonts/NotoSansGeorgian-Light.ttf";
import NotoSansFontRegular from "./fonts/NotoSansGeorgian-Regular.ttf";
import NotoSansFontMedium from "./fonts/NotoSansGeorgian-Medium.ttf";
import NotoSansFontBold from "./fonts/NotoSansGeorgian-Bold.ttf";

import ProductsList from "./components/ProductsList.tsx";
import InvoiceHeader from "./components/InvoiceHeader.tsx";
import InvoiceSubHead from "./components/InvoiceSubHead.tsx";
import InvoiceFooter from "./components/InvoiceFooter.tsx";

Font.register({
  family: "NotoSans",
  src: NotoSansFont,
  fonts: [
    {
      fontWeight: "light",
      src: NotoSansFontLight,
    },
    {
      fontWeight: "normal",
      src: NotoSansFontRegular,
    },
    {
      fontWeight: "semibold",
      src: NotoSansFontMedium,
    },
    {
      fontWeight: "bold",
      src: NotoSansFontBold,
    },
  ],
});

const Invoice: React.FC = () => {
  const { state } = useLocation();

  const invoice:
    | undefined
    | {
        invoiceNumber: string;
        orderId: string;
        customerName: string;
        customerPhone: string;
        customerId: string;
        customerAddress: string;
        createdAt: string;
        products: Array<{
          id: string;
          title: string;
          size: string;
          quantity: number;
          price: number;
          thumbnail: string;
          description: string;
        }>;
      } = state?.invoice;

  const priceSum =
    invoice?.products.reduce(
      (acc, product) => (acc += product.quantity * product.price),
      0
    ) || 0;

  return invoice ? (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <InvoiceHeader
            createdAt={invoice.createdAt}
            invoiceNumber={invoice.invoiceNumber}
          />

          <InvoiceSubHead
            customerId={invoice.customerId}
            customerName={invoice.customerName}
            customerPhone={invoice.customerPhone}
            customerAddress={invoice.customerAddress}
          />

          <ProductsList products={invoice.products} />

          <InvoiceFooter priceSum={priceSum} />
        </Page>
      </Document>
    </PDFViewer>
  ) : (
    <div>
      <p>შეკვეთის დადგენა ვერ ხერხდება.</p>
      <p>გთხოვთ დახუროთ გვერდი და თავიდან სცადოთ</p>
    </div>
  );
};

export default Invoice;
