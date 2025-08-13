import { routes } from "@/config/paths";
import { RouterProvider } from "react-router-dom";


export const AppRouter = () => {
  return <RouterProvider router={routes} />;
};
