import React from "react";
import styles from "./Toast.module.css";

const Toast = ({ show, message, type = "success" }) => {
  if (!show) return null;

  const toastClass = type === "success" ? styles.success : styles.error;
  const iconClass =
    type === "success" ? "fa fa-check-circle" : "fa fa-times-circle";

  return (
    <div className={`${styles.toast} ${toastClass}`}>
      <i className={`${iconClass} ${styles.icon}`} aria-hidden="true"></i>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
