import { Member } from "../interfaces/senateInterfaces";
import { useNavigate } from "react-router-dom";
interface MylistProps {
  loading: boolean;
  data: Member[];
}
export const MyTable = ({ loading, data }: MylistProps) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Partido",
      dataIndex: "party",
      key: "party",
    },
    {
      title: "Genero",
      dataIndex: "gender",
      key: "gender",
    },
  ];
  return (
    <div className="ant-table" style={{ maxHeight: "80%", overflow: "auto" }}>
      <div className="ant-table-container">
        <div className="ant-table-content">
          <table style={{ tableLayout: "auto" }}>
            <colgroup></colgroup>
            <thead className="ant-table-thead">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="ant-table-cell">
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {data.map((row) => (
                <tr
                  key={row.id}
                  data-row-key="1"
                  className="ant-table-row ant-table-row-level-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/about/${row.id}`)}
                >
                  <td className="ant-table-cell">{row?.id} </td>
                  <td className="ant-table-cell">
                    {`${row?.first_name} ${row?.last_name} ${
                      row?.middle_name || ""
                    }`}
                  </td>
                  <td className="ant-table-cell">{row?.party} </td>
                  <td className="ant-table-cell">{row?.gender} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
