import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

// Custom typed useSelector hook
export const useAppSelector = <TSelected>(selector: (state: RootState) => TSelected): TSelected =>
  useSelector(selector);

// Custom typed useDispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
