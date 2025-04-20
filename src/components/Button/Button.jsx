import styles from './Button.module.css';

export function Button({
  children,
  size = 'small',
  variant = 'primary',
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
