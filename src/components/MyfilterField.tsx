import { Input } from "antd";

const { Search } = Input;

interface Props {
  setFilter: (value: string) => void;
}
const MyfilterField = ({ setFilter }: Props) => {
  const onSearch = (value: string) => {
    setFilter(value);
  };
  return (
    // <Space direction="vertical">
    <Search
      placeholder="Buscar..."
      onSearch={onSearch}
      style={{ width: 200, marginBottom: "1rem" }}
    />
  );
};

export default MyfilterField;
