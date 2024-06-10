import { toggleEditUpdateSubProject } from "@/Redux/Slices/SubProjectSlice";
import { Button } from "@/shadcn/ui/button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

const UpdateContract = () => {
  const [contract_name, setContract_name] = useState("");
  const [code, setCode] = useState("");
  const [contract_cost, setContract_cost] = useState("");
  const [variation_cost, setVariation_Cost] = useState("");
  const [type, setType] = useState("");
  const [total_paid, setTotal_paid] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [remarks, setRemarks] = useState("");
  const rowselected = useSelector((state: RootState) => state.subProject.row);

  const emptyFields = () => toast.error("All the fields are required");
  const updated = () => toast.success("Contract updated");

  useEffect(() => {
    const fetchComponents = async () => {
      await axios
        .get(`/api/contracts/getcontractsbyid/${rowselected}`)
        .then((response: any) => {
          setCode(response?.data?.contracts[0]?.contract_no);
          setContract_name(response?.data?.contracts[0]?.contract_description);
          setContract_cost(response?.data?.contracts[0]?.contract_amount);
          setVariation_Cost(response?.data?.contracts[0]?.variation_cost);
          setTotal_paid(response?.data?.contracts[0]?.total_paid);
          setEnd_date(response?.data?.contracts[0]?.end_date);
          setRemarks(response?.data?.contracts[0]?.remarks);
          setType(response?.data?.contracts[0]?.type);
        })
        .catch((error) => {});
    };

    fetchComponents();
  }, [rowselected]);

  const updateContract = async (e: any) => {
    e.preventDefault();

    await axios
      .put(`/api/contracts/updatescontracts/${rowselected}`, {
        // Add this field
        code,
        contract_name,
        contract_cost,
        type,
        variation_cost,
        end_date,
        remarks,
        total_paid,
      })
      .then((logins) => {
        setCode("");
        setContract_name("");
        setContract_cost("");
        setVariation_Cost("");
        setTotal_paid("");
        setEnd_date("");
        setRemarks("");
        setType("");
        updated();
        dispatch(toggleEditUpdateSubProject());
      })
      .catch((error) => {});
  };

  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-col gap-4 justify-start items-center">
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contract Name{" "}
            </label>

            <input
              type="text"
              value={contract_name}
              onChange={(e) => setContract_name(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contract No{" "}
            </label>

            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contract Cost{" "}
            </label>

            <input
              type="number"
              value={contract_cost}
              onChange={(e) => setContract_cost(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Variation Cost{" "}
            </label>

            <input
              type="number"
              value={variation_cost}
              onChange={(e) => setVariation_Cost(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Type
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5  "
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option selected>Choose a type</option>
              <option value="Grant">Grant</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Total Paid
            </label>

            <input
              type="number"
              value={total_paid}
              onChange={(e) => setTotal_paid(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="year-select"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Estimated End Date{" "}
            </label>
            <input
              id=""
              value={end_date}
              onChange={(e) => setEnd_date(e.target.value)}
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Remarks
            </label>

            <textarea
              id="message"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <div className="col-span-2">
            <Button
              className="w-full bg-green-600 text-gray-900 tracking-tight leading-tight"
              variant={"outline"}
              onClick={(e) => updateContract(e)}
            >
              Update Contracts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContract;
