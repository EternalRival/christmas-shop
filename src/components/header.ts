import { createElement } from "~/utils/create-element";
import styles from "./header.module.css";

export default function Header() {
  return createElement("header", { className: styles["header"] }, ["header"]);
}
