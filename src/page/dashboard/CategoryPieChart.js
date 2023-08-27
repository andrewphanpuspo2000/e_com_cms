import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { getAllProductsAction } from "../../components/product/productAction";
import { getAllCategoriesAction } from "../../components/category/categoryAction";

function CategoryPieChart() {
  const { category } = useSelector((state) => state.categoryData);
  const { products } = useSelector((state) => state.productsData);
  const [pieData, setPieData] = useState([]);

  const dispatch = useDispatch();
  const mergeData = async () => {
    const categ = products?.map((data, i) => {
      const matchCat = category.find((item) => item._id == data.parentCat);
      if (matchCat) {
        return { ...data, categoryName: matchCat.title };
      }
      return data;
    });
    const roleCounts = categ?.reduce((acc, cat) => {
      const title = cat?.categoryName;
      if (acc[title]) {
        acc[title]++;
      } else {
        acc[title] = 1;
      }
      return acc;
    }, {});

    const data = Object.keys(roleCounts).map((title) => ({
      name: title,
      value: roleCounts[title],
    }));

    setPieData(data);
  };

  // Prepare data for the pie chart

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Customize colors as needed

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllProductsAction());
  }, [dispatch]);

  useEffect(() => {
    if (category.length > 0 && products.length > 0) {
      mergeData();
    }
  }, [category, products]);

  return (
    <>
      {pieData?.length > 0 && (
        <div
          className="d-flex flex-column align-items-center"
          style={{ backgroundColor: "#bec9e7", borderRadius: "10px" }}
        >
          <h6 className="">Number of products with related categories</h6>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      )}
    </>
  );
}

export default CategoryPieChart;
