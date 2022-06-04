import classes from "./style.module.scss";

export const Button = ({
  children,
  onClick,
  filled,
  outlined,
  style,
  href,
  target,
}) => {
  const classNames = [
    classes.button,
    filled && classes.buttonFilled,
    outlined && classes.buttonOutlined,
  ];

  return href ? (
    <a
      href={href}
      target={target}
      style={style}
      className={classNames.join(" ")}
    >
      {children}
    </a>
  ) : (
    <button style={style} className={classNames.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
