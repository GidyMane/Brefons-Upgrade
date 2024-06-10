"use client";
import React, { useEffect, useState } from "react";
import { Tabs } from "../Aceternity/tabs";
import OutCome1 from "./OutCome1";
import OutCome2 from "./OutCome2";
import OutCome3 from "./OutCome3";
import OutCome4 from "./OutCome4";
import axios from "axios";

// const tabs = [
//   {
//     title: "Component 1",
//     value: "irrigation",
//     content: <OutCome1 />,
//   },
//   {
//     title: "Component 2",
//     value: "component 2",
//     content: <OutCome2 />,
//   },
//   {
//     title: "Component 3",
//     value: "component 3",
//     content: <OutCome3 />,
//   },
//   {
//     title: "Component 4",
//     value: "component 4",
//     content: <OutCome4 />,
//   },
// ];

const Components = () => {
  const [components, setComponents] = useState([]);
  useEffect(() => {
    const fetchBaseline = async () => {
      //   setLoading(true); // Show loader when fetching data
      await axios
        .get(`/api/components`)
        .then((response) => {
          //   setSubComponent(response?.data?.Components);
          const data = response?.data?.Components?.map((data: any) => ({
            title: `Component ${data?.ComponentCode}`,
            value: data?.id,
            content: <OutCome1 comp_id={data?.id} />,
          }));
          
          setComponents(data);
        })
        .catch((error) => {});
      //   setLoading(false); // Hide loader after data is fetched
    };

    fetchBaseline();
  }, []);
  return (
    <div className="w-full">
      <Tabs
        tabs={components}
        contentClassName="pt-20"
        containerClassName="dark:text-gray-800 backdrop-blur-sm fixed z-[100]"
      />
    </div>
  );
};

export default Components;
