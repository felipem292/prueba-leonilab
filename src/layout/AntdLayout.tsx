import { Layout } from "antd";
import { useEffect } from "react";
const { Header, Content, Footer } = Layout;
interface Props {
  children: React.ReactNode;
}

export const AntdLayout = ({ children }: Props) => {
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
        <div className="site-layout-content">{children} </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Prueba para Leonilab</Footer>
    </Layout>
  );
};
