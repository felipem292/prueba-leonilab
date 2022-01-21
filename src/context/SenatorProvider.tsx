import React, { useEffect, useReducer } from "react";
import { Member } from "../interfaces/senateInterfaces";
import { SenatorContext } from "./SenatorContext";
import { senatorReducer } from "./senatorReducer";
export interface SenatorState {
  isLoading: boolean;
  hasError: boolean;
  senators: Member[];
}
const INITIAL_STATE: SenatorState = {
  isLoading: true,
  hasError: false,
  senators: [],
};
interface Props {
  children: JSX.Element | JSX.Element[];
}

const SenatorProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(senatorReducer, INITIAL_STATE);
  useEffect(() => {
    fetch("https://api.propublica.org/congress/v1/116/senate/members.json", {
      headers: {
        "x-api-key": "PHk17xIOVlB9j8m2pqiSswTYh9ZNUno7m38F77lk",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "SET_SENATOR",
          payload: json.results[0].members,
        });
        // console.log(json?.results[0]?.members);
        // setData(json?.results[0]?.members);
      })
      .catch(() => {
        dispatch({
          type: "SET_ERROR",
          payload: [],
        });
      });
  }, []);
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
