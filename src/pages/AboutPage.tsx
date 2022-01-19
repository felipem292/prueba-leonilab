import { Descriptions, Badge } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { SenatorContext } from "../context";
import { useContext } from "react";
import { Member } from "../interfaces/senateInterfaces";

// import {useParams} from ‘react-router-dom’;
const AboutPage = () => {
  const { isLoading, senators } = useContext(SenatorContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = senators?.filter((senator: Member) => senator.id === id);
  // console.log(candidate);
  return (
    <>
      <Button
        type="primary"
        onClick={() => navigate("/")}
        icon={<LeftOutlined />}
      >
        Ver Senadores
      </Button>
      <Descriptions
        title={`Información del senador ${candidate[0]?.first_name} ${candidate[0]?.last_name}`}
        bordered
      >
        <Descriptions.Item label="Nombre">
          {`${candidate[0]?.first_name} ${candidate[0]?.last_name}`}
        </Descriptions.Item>
        <Descriptions.Item label="Partido">
          {candidate[0]?.party}
        </Descriptions.Item>
        <Descriptions.Item label="Genero">
          {candidate[0]?.gender}
        </Descriptions.Item>
        <Descriptions.Item label="Facebook">
          {candidate[0]?.facebook_account}
        </Descriptions.Item>
        <Descriptions.Item label="Youtube" span={2}>
          {candidate[0]?.youtube_account}
        </Descriptions.Item>
        <Descriptions.Item label="Url" span={3}>
          {candidate[0]?.url}
        </Descriptions.Item>
        <Descriptions.Item label="Votos">
          {candidate[0]?.total_votes}
        </Descriptions.Item>
        <Descriptions.Item label="Votos Perdidos">
          {candidate[0]?.missed_votes}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Estado">
          {candidate[0]?.state}
        </Descriptions.Item>
        <Descriptions.Item label="Perfil">
          {candidate[0]?.rss_url}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default AboutPage;
