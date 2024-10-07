import { ITask, ITaskParams } from "@utils/interface";
import { Card, Col, Row, notification } from "antd";
import { useEffect, useState } from "react";

import {
  addNewTask,
  deleteTask,
  searchListTasks,
  updateTask,
} from "@/api/task";
import ButtonCustom from "@/components/base/Button";
import { PlusOutlined } from "@ant-design/icons";
import { AddNewTaskModal } from "../AddNewTaskModal";
import { SearchForm } from "../SearchForm";
import TaskList from "../TaskList";

const ManagementTasksList = () => {
  const [listTasks, setListTasks] = useState<ITask[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState<ITask>();
  const [params, setParams] = useState<ITaskParams>({
    taskName: "",
    status: null,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = (param: ITaskParams): void => {
    setParams(param);
  };

  const handleRemoveTask = async (item: ITask) => {
    const res = await deleteTask(item.id as string);
    if (res) {
      notification.success({ message: "Delete the task successfully" });
      fetchListTasks();
    }
  };

  const handleToggleModal = (item?: ITask): void => {
    setIsOpenModal(!isOpenModal);
    if (item?.id && !isOpenModal) {
      setIsEdit(true);
      setTaskEdit(item);
      return;
    }

    if (!isOpenModal) {
      setIsEdit(false);
      setTaskEdit(undefined);
    }
  };

  const fetchListTasks = async () => {
    setLoading(true);
    const res = await searchListTasks(params);
    setLoading(false);
    setListTasks(res as ITask[]);
  };

  const handleSubmit = async (value: ITaskParams) => {
    if (taskEdit && taskEdit?.id) {
      const res = await updateTask(taskEdit?.id, value as ITask);
      if (res) {
        notification.success({
          message: `Update ${taskEdit?.taskName} successfully!`,
        });
        setTaskEdit(undefined);
      }
    } else {
      const res = await addNewTask(value as ITask);
      if (res) {
        notification.success({
          message: `Add new ${taskEdit?.taskName} successfully!`,
        });
      }
    }

    setIsOpenModal(false);
    setIsEdit(false);
    fetchListTasks();
  };

  useEffect(() => {
    fetchListTasks();
  }, [params.taskName, params.status]);

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col md={{ span: 23 }} lg={{ span: 20 }} xl={{ span: 18 }}>
        <Card>
          <SearchForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col md={{ span: 23 }} lg={{ span: 20 }} xl={{ span: 18 }}>
        <Card
          title={<div className="text-left">Management Task List</div>}
          extra={
            <div>
              <ButtonCustom
                color="primary"
                onClick={handleToggleModal}
                icon={<PlusOutlined />}
              >
                Add new
              </ButtonCustom>
            </div>
          }
        >
          <TaskList
            loading={loading}
            items={listTasks}
            onRemoval={handleRemoveTask}
            onToggle={handleToggleModal}
          />

          <AddNewTaskModal
            item={taskEdit as ITask}
            handleSubmit={handleSubmit}
            handleClose={handleToggleModal}
            isAddNew={!isEdit}
            isOpen={isOpenModal}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ManagementTasksList;
