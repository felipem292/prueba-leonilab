import { List } from "antd";
import { Member } from "../interfaces/senateInterfaces";

interface MylistProps {
  loading: boolean;
  data: Member[];
}
export const MyList = ({ loading, data }: MylistProps) => {
  return (
    <List
      style={{ maxHeight: "100%", overflow: "auto" }}
      header={<div>Lista de Senadores</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{ cursor: "pointer" }}
          onClick={() => console.log(item.last_name)}
        >
          {`${item.first_name} ${item.last_name} ${item.middle_name || ""}`}
        </List.Item>
      )}
    />
  );
};
