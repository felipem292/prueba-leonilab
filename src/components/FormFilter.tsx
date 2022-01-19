import Select from "antd/lib/select";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
interface FormFilterProps {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  party: string;
  setParty: React.Dispatch<React.SetStateAction<string>>;
}
export const FormFilter = ({
  gender,
  setGender,
  party,
  setParty,
}: FormFilterProps) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  return (
    <>
      <Form.Item>
        <Select
          value={gender}
          style={{ width: "auto", minWidth: 120 }}
          onChange={(value) => setGender(value)}
        >
          <Option value="todos">Todos los generos</Option>
          <Option value="M">M</Option>
          <Option value="F">F</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Select
          value={party}
          style={{ width: "auto", minWidth: 120 }}
          onChange={(value) => setParty(value)}
        >
          <Option value="todos">Todos los partidos</Option>
          <Option value="R">R</Option>
          <Option value="D">D</Option>
        </Select>
      </Form.Item>

      <Button
        htmlType="button"
        onClick={() => {
          setGender("todos");
          setParty("todos");
        }}
      >
        Reset
      </Button>
    </>
  );
};
