import { Layout } from "antd";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { LeonilabApp } from "../LeonilabApp";
import { Member } from "../interfaces/senateInterfaces";
import MyfilterField from "../components/MyfilterField";
import { MyTable } from "../components/MyTable";
const { Header, Content, Footer } = Layout;
// interface Props {
//   children: React.ReactNode;
// }
interface Props {
  loading: boolean;
  data: Member[];
  setFilter: (filter: string) => void;
}
export const AntdLayout = ({ loading, data, setFilter }: Props) => {
  //   useEffect(() => {
  //     fetch("https://api.propublica.org/congress/v1/116/senate/members.json", {
  //       headers: {
  //         "x-api-key": "PHk17xIOVlB9j8m2pqiSswTYh9ZNUno7m38F77lk",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //       });
  //   }, []);
  return (
    <Layout className="layout">
      <Header style={{ textAlign: "center", color: "#fff" }}>
        <div className="logo" />

        <h1 style={{ color: "#fff" }}>LeonilabApp</h1>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Routes>
            <Route path={"/about:id"} element={<h2>asdasdasdasd</h2>} />
            <Route
              path="/"
              element={
                <>
                  <MyfilterField setFilter={setFilter} />
                  <MyTable loading={loading} data={data} />
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
