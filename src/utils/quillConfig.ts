import { QuillOptions, Quill } from "react-quill";

const FONT_FAMILY = ["Arial", "Tahoma", "Georgia", "Impact", "Verdana"];

const Font = Quill.import("attributors/style/font");
Font.whitelist = FONT_FAMILY;
Quill.register(Font, true);

const quillConfig: QuillOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, false, 3] }],
      // [{ font: Font.whitelist }],
      ["blockquote"],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["bold", "italic", "underline", "strike"],
      [{ align: ["center", "right", "justify"] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      // [{ script: ["sub", "super"] }],
      [{ direction: "rtl" }, "clean"],
    ],
    clipboard: {
      matchVisual: true,
    },
  },
  theme: "snow",
  formats: [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "align",
    "custom-block",
    // "font",
    "color",
    "background",
  ],
};

export default quillConfig;
