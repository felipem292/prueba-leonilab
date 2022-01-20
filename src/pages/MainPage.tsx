import { Button, Col, Row } from "antd";
import MyCollapse from "../components/MyCollapse";
import MyfilterField from "../components/MyfilterField";
import { MyTable } from "../components/MyTable";
import { Member } from "../interfaces/senateInterfaces";
import { Checkbox } from "antd";
import { FormFilter } from "../components/FormFilter";
import { useState } from "react";
interface MainPageProps {
  setFilter: (filter: string) => void;
  loading: boolean;
  data: Member[];
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  party: string;
  setParty: React.Dispatch<React.SetStateAction<string>>;
}
const MainPage = ({
  setFilter,
  loading,
  data,
  gender,
  setGender,
  party,
  setParty,
}: MainPageProps) => {
  const [checkElement, setCheckElement] = useState(false);
  function onChange(e: any) {
    // console.log(`checked = ${e.target.checked}`);
    setCheckElement(e.target.checked);
  }
  return (
    <>
      <Row justify="start">
        <MyfilterField setFilter={setFilter} />

        <Checkbox
          onChange={onChange}
          style={{ marginLeft: "1rem", marginTop: "0.2rem" }}
        >
          {checkElement ? "Ocultar filtros" : "Otros filtros"}
        </Checkbox>
      </Row>
      <Row justify="start">
        {checkElement && (
          <FormFilter
            gender={gender}
            setGender={setGender}
            party={party}
            setParty={setParty}
          />
        )}
      </Row>

      <MyTable loading={loading} data={data} />
    </>
  );
};

export default MainPage;
