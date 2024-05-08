import { QuillOptions, Quill } from "react-quill";

const FONT_SIZE = [
  "8px",
  "9px",
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "42px",
  "54px",
  "68px",
  "84px",
  "98px",
];

const FONT_FAMILY = ["Arial", "Tahoma", "Georgia", "Impact", "Verdana"];

const Size = Quill.import("formats/font");
Size.whitelist = FONT_SIZE;
Quill.register(Size, true);

const Font = Quill.import("attributors/style/font");
Font.whitelist = FONT_FAMILY;
Quill.register(Font, true);

const quillConfig: QuillOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }, { font: Font.whitelist }],
      ["blockquote"],
      ["link", "image", "video"],
      ["bold", "italic", "underline", "strike"],
      [{ align: ["center", "right", "justify"] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      // [{ color: [] }, { background: [] }],
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
    "size",
    "align",
    "custom-block",
    "font",
  ],
};

export default quillConfig;
