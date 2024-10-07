import { Input } from "antd";

interface IProps {
  placeholder: string;
  className?: string;
  onChange?: () => void;
  type?: "input" | "textArea";
  rows?: number;
  value?: string;
}

const InputCustom = (props: IProps) => {
  const {
    placeholder,
    className,
    onChange,
    type = "input",
    rows = 5,
    value,
  } = props;

  if (type === "textArea") {
    return (
      <Input.TextArea
        rows={rows}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    );
  }

  return (
    <Input
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default InputCustom;
