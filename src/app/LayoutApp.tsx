import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const headerStyle: React.CSSProperties = {
  textAlign: "start",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "start",
  height: "100%",
  paddingInline: 48,
  backgroundColor: "white",
};

export const LayoutApp = () => {
  return (
    <Layout>
      <Header style={headerStyle}>Санечкины расчетики</Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  );
};
