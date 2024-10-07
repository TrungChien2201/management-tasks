import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ITask } from "@utils/interface";
import { Popconfirm, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";

interface IProps {
  items: ITask[];
  onRemoval: (todo: ITask) => void;
  onToggle: (todo: ITask) => void;
  loading: boolean;
}

const TaskList = (props: IProps) => {
  const { items, onRemoval, onToggle, loading } = props;

  return (
    <Table rootClassName="table-custom" dataSource={items} loading={loading}>
      <Column title="Task name" dataIndex="taskName" key="taskName" />
      <Column title="Description" dataIndex="description" key="description" />
      <Column
        title="Status"
        dataIndex="status"
        key="status"
        render={(tag: boolean) => {
          const color = tag ? "success" : "volcano";
          return (
            <Tag className="tag-custom" color={color} key={tag.toString()}>
              {tag ? "Completed" : "Incomplete"}
            </Tag>
          );
        }}
      />
      <Column
        title="Action"
        key="action"
        render={(_: ITask, record: ITask) => (
          <Space size="middle">
            <span onClick={() => onToggle(record)}>
              <EditOutlined className="pointer" />
            </span>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => onRemoval(record)}
              okText="Yes"
              cancelText="No"
            >
              <span>
                <DeleteOutlined className="pointer" />
              </span>
            </Popconfirm>
          </Space>
        )}
      />
    </Table>
  );
};

export default TaskList;
