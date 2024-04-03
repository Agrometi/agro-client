import { v4 as uuid } from "uuid";

const generateArray = (size: number): Array<string> =>
  Array.from(new Array(size)).map(() => uuid());

export default generateArray;
