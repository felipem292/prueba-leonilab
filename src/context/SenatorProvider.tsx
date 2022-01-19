import React, { useReducer } from "react";
import { Member } from "../interfaces/senateInterfaces";
import { SenatorContext } from "./SenatorContext";
import { senatorReducer } from "./senatorReducer";
export interface SenatorState {
  isLoading: boolean;
  senators?: Member[];
}
const INITIAL_STATE: SenatorState = {
  isLoading: true,
  senators: [],
};
interface Props {
  children: JSX.Element | JSX.Element[];
}
const [state, dispatch] = useReducer(senatorReducer, INITIAL_STATE);
const SenatorProvider = ({ children }: Props) => {
  return (
    <SenatorContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </SenatorContext.Provider>
  );
};

export default SenatorProvider;
