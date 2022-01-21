import { SenatorState } from "./SenatorProvider";
import { Member } from "../interfaces/senateInterfaces";

type SenatorAction =
  | { type: "SET_SENATOR"; payload: Member[] }
  | { type: "SET_ERROR"; payload: Member[] };
export const senatorReducer = (
  state: SenatorState,
  action: SenatorAction
): SenatorState => {
  switch (action.type) {
    case "SET_SENATOR":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        senators: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true,
        senators: action.payload,
      };

    default:
      return state;
  }
};
