import { Button, Col, Pagination, Row } from "antd";
import MyCollapse from "../components/MyCollapse";
import MyfilterField from "../components/MyfilterField";
import { MyTable } from "../components/MyTable";
import { Member } from "../interfaces/senateInterfaces";
import { Checkbox } from "antd";
import { FormFilter } from "../components/FormFilter";
import { useState } from "react";
import usePagination from "../hooks/usePagination";
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
  const PER_PAGE = 10;
  let [page, setPage] = useState(1);
  const _DATA = usePagination(data, PER_PAGE);
  function onChange(e: any) {
    // console.log(`checked = ${e.target.checked}`);
    setCheckElement(e.target.checked);
  }
  //paginacion

  const count = Math.ceil(data.length / PER_PAGE) * 10;

  const handleChange = (page: number) => {
    setPage(page);
    _DATA.jump(page);
  };

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

      <MyTable loading={loading} data={_DATA.currentData()} />
      <Pagination
        defaultCurrent={1}
        total={count}
        current={page}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default MainPage;
