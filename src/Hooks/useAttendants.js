import { useContext } from "react";
import { AttendantContext } from "../providers/AttendantProvider";

export function useAttendents() {
  const context = useContext(AttendantContext);

  return context;
}
