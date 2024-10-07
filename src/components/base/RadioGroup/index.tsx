import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface IProps {
  onChangeEvent?: (e: RadioChangeEvent) => void;
  options: { label: string; value: string | number | boolean }[];
  value?: string | number | boolean;
}

const RadioGroupCustom = (props: IProps) => {
  const { onChangeEvent, options, value } = props;

  const onChange = (e: RadioChangeEvent) => {
    if (onChangeEvent instanceof Function) {
      onChangeEvent(e);
    }
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {options.map((v, index) => (
        <Radio key={index} value={v.value}>
          {v.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroupCustom;
