import { useContext } from "react";
import { AttendantContext } from "../providers/AttendantProvider";

export function useAttendants() {
  const context = useContext(AttendantContext);

  return context;
}
