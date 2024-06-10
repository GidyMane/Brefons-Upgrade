import { Button } from "@/shadcn/ui/button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { toggleEditSubProject } from "@/Redux/Slices/SubProjectSlice";

const EditSubProject = () => {
  const [comp, setComp] = useState("");
  const [component, setComponent] = useState<any[]>([]);
  const rowselected = useSelector((state: RootState) => state.subProject.row);
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [activity, setActivity] = useState("");
  const [budgetedAmount, setBudgetedAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [contractor, setContractor] = useState("");
  const [contractAmount, setContractAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [female, setFemale] = useState("");
  const [male, setMale] = useState("");
  const [longg, setLongg] = useState("");
  const [latitude, setLatitude] = useState("");
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [completionPercentage, setCompletionPercentage] = useState("");
  const [Ward, setWard] = useState("");
  const [Constituency, setConstituency] = useState("");

  const emptyFields = () => toast.error("All the fields are required");
  const updated = () => toast.success("Contract updated");

  useEffect(() => {
    const fetchComponents = async () => {
      await axios
        .get(`/api/countyapi/counties`)
        .then((response) => {
          setComponent(response?.data?.Counties);
        })
        .catch((error) => {});
    };

    fetchComponents();
  }, []);

  useEffect(() => {
    const fetchComponents = async () => {
      await axios
        .get(`/api/contracts/getcontractsbyid/${rowselected}`)
        .then((response: any) => {
          setCode(response?.data?.contracts[0]?.code);
          setActivity(response?.data?.contracts[0]?.activity);
          setBudgetedAmount(response?.data?.contracts[0]?.budget_amount);
          setDescription(response?.data?.contracts[0]?.contract_description);
          setCategory(response?.data?.contracts[0]?.category);
          setContractor(response?.data?.contracts[0]?.contractor);
          setContractAmount(response?.data?.contracts[0]?.contract_amount);
          setStartDate(response?.data?.contracts[0]?.start_date);
          setFemale(response?.data?.contracts[0]?.female);
          setMale(response?.data?.contracts[0]?.male);
          setLongg(response?.data?.contracts[0]?.longitude);
          setLatitude(response?.data?.contracts[0]?.latitude);
          setStatus(response?.data?.contracts[0]?.status);
          setRemarks(response?.data?.contracts[0]?.remarks);
          setCompletionPercentage(
            response?.data?.contracts[0]?.completionPercentage
          );
          setWard(response?.data?.contracts[0]?.ward);
          setConstituency(response?.data?.contracts[0]?.constituency);
        })
        .catch((error) => {});
    };

    fetchComponents();
  }, [rowselected]);

  const updateContract = async (e: any) => {
    e.preventDefault();
    if (
      code.trim().length == 0 ||
      activity.trim().length == 0 ||
      budgetedAmount.length == 0 ||
      description.trim().length == 0 ||
      category.trim().length == 0 ||
      contractor.trim().length == 0 ||
      contractAmount.length == 0 ||
      startDate.trim().length == 0 ||
      female.length == 0 ||
      male.length == 0 ||
      longg.trim().length == 0 ||
      latitude.trim().length == 0 ||
      status.trim().length == 0 ||
      remarks.trim().length == 0 ||
      completionPercentage?.length == 0 ||
      Constituency?.trim().length == 0 ||
      Ward?.trim().length == 0 // Add this condition
    ) {
      emptyFields();
    } else {
      await axios
        .put(`/api/contracts/${rowselected}`, {
          code,
          activity,
          budgetedAmount,
          description,
          category,
          contractor,
          contractAmount,
          startDate,
          female,
          male,
          longg,
          latitude,
          status,
          remarks,
          completion_percentage: completionPercentage,
          constituency: Constituency,
          ward: Ward, // Add this field
        })
        .then((logins) => {
          dispatch(toggleEditSubProject());
          setCode("");
          setActivity("");
          setBudgetedAmount("");
          setDescription("");
          setCategory("");
          setContractor("");
          setContractAmount("");
          setStartDate("");
          setFemale("");
          setMale("");
          setLongg("");
          setLatitude("");
          setStatus("");
          setRemarks("");
          setCompletionPercentage("");
          setConstituency("");
          setWard(""); // Add this line
          updated();
        })
        .catch((error) => {});
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 justify-start items-center">
        <form className="grid md:grid-cols-2 gap-4 my-6">
          {/* <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select County
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 "
              value={comp}
              onChange={(e) => setComp(e.target.value)}
            >
              <option value="">[Select County]</option>
              {component.map((component: any) => (
                <option key={component?.id} value={component?.id}>
                  {component?.county}
                </option>
              ))}
            </select>
          </div> */}

          <div>
            <label
              htmlFor="year-select"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ID{" "}
            </label>
            <input
              id=""
              value={code}
              onChange={(e) => setCode(e?.target?.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contractor{" "}
            </label>

            <input
              type="text"
              value={contractor}
              onChange={(e) => setContractor(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category{" "}
            </label>

            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contact Budget{" "}
            </label>

            <input
              type="number"
              value={budgetedAmount}
              onChange={(e) => setBudgetedAmount(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contract amount{" "}
            </label>

            <input
              type="number"
              value={contractAmount}
              onChange={(e) => setContractAmount(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              contract description
            </label>

            <textarea
              id="message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Start Date{" "}
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Female Estimate{" "}
            </label>

            <input
              type="number"
              value={female}
              onChange={(e) => setFemale(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ward{" "}
            </label>
            <input
              type="text"
              value={Ward}
              onChange={(e) => setWard(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Constituency{" "}
            </label>
            <input
              type="text"
              value={Constituency}
              onChange={(e) => setConstituency(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Longitude{" "}
            </label>

            <input
              type="text"
              value={longg}
              onChange={(e) => setLongg(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Latitude{" "}
            </label>

            <input
              type="text"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Male Estimate{" "}
            </label>

            <input
              type="number"
              value={male}
              onChange={(e) => setMale(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            />
          </div>

          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Completion Percentage{" "}
            </label>

            <input
              type="number"
              value={completionPercentage}
              onChange={(e) => setCompletionPercentage(e.target.value)}
              className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              min="0"
              max="100"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select status
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 "
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                Choose a status
              </option>
              <option value="stalled">stalled</option>
              <option value="cancelled">cancelled</option>
              <option value="ongoing">ongoing</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Activity{" "}
            </label>

            <input
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="bg-gray-50 border disabled:bg-green-300 text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
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
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditSubProject;
