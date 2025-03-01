import styles from "./Button.module.css";

function Button({
  children,
  onClick,
  type,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  type: "primary" | "back" | "position";
}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
