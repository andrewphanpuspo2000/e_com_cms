import { useDispatch } from "react-redux";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";

import CategoryPieChart from "./CategoryPieChart";

export const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="d-flex">
        <CategoryPieChart />
      </div>
    </AdminLayout>
  );
};
