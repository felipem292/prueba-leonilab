import { SenatorState } from "./SenatorProvider";
import { Member } from "../interfaces/senateInterfaces";

type SenatorAction = { type: "SET_SENATOR"; payload: Member[] };
export const senatorReducer = (
  state: SenatorState,
  action: SenatorAction
): SenatorState => {
  switch (action.type) {
    case "SET_SENATOR":
      return { ...state, isLoading: false, senators: action.payload };

    default:
      return state;
  }
};
