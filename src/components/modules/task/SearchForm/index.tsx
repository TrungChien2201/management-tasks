import { SearchOutlined } from "@ant-design/icons";
import { Col, Form, Input, RadioChangeEvent, Row } from "antd";
import React, { useEffect } from "react";

import RadioGroupCustom from "@/components/base/RadioGroup";
import { TASK_STATUS_OPTIONS } from "@/utils/constants";
import ButtonCustom from "@/components/base/Button";

interface IAddTodoFormProps {
  onFormSubmit: ({
    taskName,
    status,
  }: {
    taskName: string;
    status: boolean;
  }) => void;
}

export const SearchForm: React.FC<IAddTodoFormProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      taskName: form.getFieldValue("taskName"),
      status: form.getFieldValue("status"),
    });
  };

  const onChangeEvent = (e: RadioChangeEvent) => {
    form.setFieldsValue({ status: e.target.value });
  };

  useEffect(() => {
    form.setFieldsValue({ status: TASK_STATUS_OPTIONS[0].value });
  }, []);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={24}>
          <Row gutter={30}>
            <Col md={22}>
              <Form.Item
                name={"taskName"}
                // rules={[{ required: true, message: "This field is required" }]}
              >
                <Input placeholder="Task name" />
              </Form.Item>
            </Col>
            <ButtonCustom color="default" type="submit">
              <SearchOutlined />
            </ButtonCustom>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24}>
          <Row>
            <Form.Item
              label="Status"
              name={"status"}
              // rules={[{ required: true, message: "This field is required" }]}
            >
              <RadioGroupCustom
                onChangeEvent={onChangeEvent}
                options={TASK_STATUS_OPTIONS}
              />
            </Form.Item>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
