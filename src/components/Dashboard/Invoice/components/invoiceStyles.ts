import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
    fontFamily: "NotoSans",
  },

  page: {
    color: "black",
  },

  //** Utils */
  noto: {
    fontFamily: "NotoSans",
    fontWeight: "light",
  },

  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",
  },

  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "6px",
  },

  fontSizeSm: {
    fontSize: "11px",
  },

  bold: {
    fontWeight: "bold",
  },

  normal: {
    fontWeight: "normal",
  },

  textCenter: {
    textAlign: "center",
  },

  //** Invoice Header */
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #404040",
    padding: "10px",
    paddingBottom: "20px",
    fontSize: "16px",
  },

  headerLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  headerLeftFig: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerLeftFigImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  invoiceHeaderRight: {
    display: "flex",
    alignItems: "center",
  },

  invoiceHeaderRightImg: {
    width: "110px",
    objectFit: "contain",
  },

  //** Sub Header */
  subHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    borderBottom: "1px solid #404040",
    padding: "20px 10px",
  },

  //** Products List */
  productsListWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "0 0 30px 0",
    borderBottom: "1px solid #404040",
  },

  productsListHead: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },

  productsListTr: {
    borderBottom: "1px solid #D9D9D9",
    padding: "10px 20px",
    margin: "0 20px",
  },

  productsDetailsBox: {},

  productDescriptionBox: {
    borderTop: "1px solid #D9D9D9",
    marginTop: "10px",
    padding: "10px 20px 10px 20px",
  },

  productsListTd: {
    fontFamily: "NotoSans",
    fontWeight: "light",
    fontSize: "11px",
    textAlign: "center",
  },
});

export default styles;
