import { Descriptions, Badge } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

// import {useParams} from ‘react-router-dom’;
const AboutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Button
        type="primary"
        onClick={() => navigate("/")}
        icon={<LeftOutlined />}
      >
        Ver Senadores
      </Button>
      <Descriptions title="Informacion del senador" bordered>
        <Descriptions.Item label="Nombre">Nombre senador</Descriptions.Item>
        <Descriptions.Item label="Partido">Partido</Descriptions.Item>
        <Descriptions.Item label="Genero">Genero</Descriptions.Item>
        <Descriptions.Item label="Facebook">
          Cuenta de facebook
        </Descriptions.Item>
        <Descriptions.Item label="Usage Time" span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="Running" />
        </Descriptions.Item>
        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default AboutPage;
