import { Modal } from "antd";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
  children: ReactNode;
  title: string;
  okText?: string;
  width?: number;
}
const ModalCustom = (props: IProps) => {
  const {
    isOpen,
    handleClose,
    handleSubmit,
    children,
    title,
    okText = "Submit",
    width = 700,
  } = props;

  return (
    <>
      <Modal
        width={width}
        title={title}
        open={isOpen}
        onOk={handleSubmit}
        okText={okText}
        onCancel={handleClose}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalCustom;
