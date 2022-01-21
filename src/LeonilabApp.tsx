import { AntdLayout } from "./layout/AntdLayout";
import { BrowserRouter } from "react-router-dom";
import SenatorProvider from "./context/SenatorProvider";

export const LeonilabApp = () => {
  return (
    <SenatorProvider>
      <BrowserRouter>
        <AntdLayout />
      </BrowserRouter>
    </SenatorProvider>
  );
};
