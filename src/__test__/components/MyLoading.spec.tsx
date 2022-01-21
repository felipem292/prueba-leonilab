import { MyTable } from "../../components/MyTable";
import "@testing-library/jest-dom";
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import { MyLoading } from "../../components/MyLoading";
import { RenderResult } from "@testing-library/react";

let documentBody: RenderResult;
describe("<MyLoading />", () => {
  beforeEach(() => {
    documentBody = render(<MyLoading />);
  });

  it("should render correctly", () => {
    expect(documentBody).toMatchSnapshot();
  });
  it("shows Espere por favor", () => {
    expect(documentBody.getByText("Espere por favor")).toBeInTheDocument();
  });
});
