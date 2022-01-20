import { Layout } from "antd";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import { SenatorContext } from "../context";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Member } from "../interfaces/senateInterfaces";
import { MyLoading } from "../components/MyLoading";
const { Header, Content, Footer } = Layout;

export const AntdLayout = () => {
  const { isLoading, senators } = useContext(SenatorContext);
  const [filter, setFilter] = useState("");
  const [gender, setGender] = useState("");
  const [party, setParty] = useState("");

  if (isLoading) {
    return <MyLoading />;
  }

  const crearLista = () => {
    console.log(gender, party);
    const nuevaLista = senators
      ?.filter((senator: Member) => {
        if (filter !== "") {
          return (
            senator?.first_name.includes(filter)! ||
            senator?.last_name?.includes(filter) ||
            senator?.gender?.includes(filter) ||
            senator?.id?.includes(filter) ||
            senator?.party?.includes(filter)
          );
        }
        return senator;
      })
      .filter((senator: Member) => {
        if (gender !== "todos" && gender.length) {
          return senator.gender === gender;
        }
        return senator;
      })
      .filter((senator: Member) => {
        if (party !== "todos" && party.length) {
          return senator.party === party;
        }
        return senator;
      });

    return nuevaLista;
  };
  let filterdData = [];
  filterdData = !isLoading && crearLista();
  return (
    <Layout className="layout">
      <Header style={{ textAlign: "center", color: "#fff" }}>
        <div className="logo" />

        <h1 style={{ color: "#fff" }}>LeonilabApp</h1>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ maxHeight: "100%", overflow: "auto" }}
        >
          <Routes>
            <Route path={"/about/:id"} element={<AboutPage />} />
            <Route
              path="/"
              element={
                <MainPage
                  setFilter={setFilter}
                  loading={isLoading}
                  data={filterdData}
                  gender={gender}
                  setGender={setGender}
                  party={party}
                  setParty={setParty}
                />
              }
            />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Prueba para Leonilab</Footer>
    </Layout>
  );
};
