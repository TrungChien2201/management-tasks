import { Col, Form, RadioChangeEvent, Row } from "antd";
import React, { useEffect } from "react";

import InputCustom from "@/components/base/Input";
import ModalCustom from "@/components/base/Modal";
import RadioGroupCustom from "@/components/base/RadioGroup";
import { TASK_STATUS_OPTIONS } from "@/utils/constants";
import { ITask, ITaskParams } from "@utils/interface";

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (val: ITaskParams) => void;
  isAddNew: boolean;
  item: ITask;
}

export const AddNewTaskModal: React.FC<IProps> = (props) => {
  const { isOpen, isAddNew, handleClose, handleSubmit, item } = props;
  const [form] = Form.useForm();
  const options = TASK_STATUS_OPTIONS.filter((v) => v.value !== "");

  const onFinish = (value: ITaskParams) => {
    handleSubmit(value);
    form.resetFields();
  };

  const onChangeEvent = (e: RadioChangeEvent) => {
    form.setFieldsValue({ status: e.target.value });
  };

  const beforeClose = () => {
    form.resetFields();
    handleClose();
  };

  useEffect(() => {
    if (isAddNew) {
      form.setFieldsValue({ status: options[0].value });
    }
  }, [isAddNew, options]);

  useEffect(() => {
    if (item) {
      form.setFieldsValue({ ...item });
    }
  }, [item]);

  return (
    <ModalCustom
      handleSubmit={() => form.submit()}
      handleClose={beforeClose}
      title={isAddNew ? "Add new task" : "Edit task"}
      isOpen={isOpen}
    >
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        className="todo-form mt-3"
      >
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24}>
            <Row gutter={30}>
              <Col md={12}>
                <Form.Item
                  name={"taskName"}
                  label="Task name"
                  className="form-item-custom"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <InputCustom placeholder="Task name" />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Status"
                  name={"status"}
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <RadioGroupCustom
                    onChangeEvent={onChangeEvent}
                    options={options}
                  />
                </Form.Item>
              </Col>
              <Col md={24}>
                <Form.Item
                  label="Description"
                  name={"description"}
                  className="form-item-custom"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <InputCustom type="textArea" placeholder="Description" />
                </Form.Item>
              </Col>
              {/* <ButtonCustom color="default" type="submit">
                <SearchOutlined />
              </ButtonCustom> */}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Row></Row>
          </Col>
        </Row>
      </Form>
    </ModalCustom>
  );
};
