import { MyTable } from "../../components/MyTable";
import "@testing-library/jest-dom";
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import { MyLoading } from "../../components/MyLoading";
import { RenderResult } from "@testing-library/react";
import { Gender, Member } from "../../interfaces/senateInterfaces";
import { BrowserRouter } from "react-router-dom";

let documentBody: RenderResult;
describe("<MyTable />", () => {
  beforeEach(() => {
    documentBody = render(
      <BrowserRouter>
        <MyTable loading={false} data={[]} />
      </BrowserRouter>
    );
  });
  it("should render a table", () => {
    expect(documentBody.getByRole("table")).toBeInTheDocument();
  });
});
