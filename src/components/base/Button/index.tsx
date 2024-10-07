import { Button } from "antd";
import { ReactElement, ReactNode } from "react";
import './style.css';

type NewType = any;

interface IProps {
  children: ReactNode | ReactElement | string;
  color?: string;
  size?: "small" | "middle" | "large";
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (v: NewType) => void;
}

const ButtonCustom = (props: IProps) => {
  const {
    children,
    color = "primary",
    size,
    icon,
    className,
    type = 'button',
    onClick
  } = props;

  const generateClassName = (color: string) => {
    if (className) return className;

    switch (color) {
      case "green":
        return "btn-custom-green";

      case "yellow":
        return "btn-custom-yellow";

      default:
        return;
    }
  };

  return (
    <Button
      icon={icon}
      size={size}
      onClick={onClick}
      htmlType={type}
      className={generateClassName(color)}
      type={color as NewType}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
