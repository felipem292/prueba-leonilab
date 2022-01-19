import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { Member } from "../interfaces/senateInterfaces";
import MyfilterField from "../components/MyfilterField";
import { MyTable } from "../components/MyTable";
import AboutPage from "../pages/AboutPage";
import { useContext, useEffect, useState } from "react";
import { SenatorContext } from "../context";
const { Header, Content, Footer } = Layout;
// interface Props {
//   children: React.ReactNode;
// }

export const AntdLayout = () => {
  const { isLoading, senators } = useContext(SenatorContext);
  const [filter, setFilter] = useState("");

  if (isLoading) {
    return <div>Loading</div>;
  }

  const crearLista = () => {
    const nuevaLista = senators?.filter((senator: Member) => {
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
        <div className="site-layout-content">
          <Routes>
            <Route path={"/about/:id"} element={<AboutPage />} />
            <Route
              path="/"
              element={
                <>
                  <MyfilterField setFilter={setFilter} />
                  <MyTable loading={isLoading} data={filterdData} />
                </>
              }
            />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Prueba para Leonilab</Footer>
    </Layout>
  );
};
