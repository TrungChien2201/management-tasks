import { Spin } from "antd";

interface IProps {
  size?: "large" | "small" | "default" | undefined;
  className?: string;
}
const LoadingCustom = (props: IProps) => {
  const { size = "large", className } = props;

  return <Spin className={className} tip="Loading" size={size}></Spin>;
};

export default LoadingCustom;
