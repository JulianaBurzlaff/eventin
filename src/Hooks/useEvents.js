import { useContext } from "react";
import { EventContext } from "../providers/EventProvider";

export function useEvents() {
  const context = useContext(EventContext);

  return context;
}
