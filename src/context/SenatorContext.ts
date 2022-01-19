import { createContext } from "react";
import { Member } from "../interfaces/senateInterfaces";

export interface SenatorContextProps {
  isLoading: boolean;
  senators?: Member[];
}

export const SenatorContext = createContext<SenatorContextProps>(
  {} as SenatorContextProps
);
