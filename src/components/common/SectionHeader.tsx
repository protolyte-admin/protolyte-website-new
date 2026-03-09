import type { JSX } from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  centered?: boolean;
  dark?: boolean;
}

function SectionHeader({ label, title, centered = false, dark = false }: SectionHeaderProps): JSX.Element {
  const classNames = [styles.wrapper, centered && styles.centered].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <p className={styles.label}>{label}</p>
      <h2 className={[styles.title, dark && styles.titleDark].filter(Boolean).join(" ")}>{title}</h2>
    </div>
  );
}

export default SectionHeader;
