// components/DashBoard/InfoSection.tsx
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { DataTable } from "./DataTable";
import { userColumns } from "./columns";

interface User {
  userName: string;
  email: string;
  station: string;
  userGroup: string;
  userLevel: string;
  lastLogin: string;
  capture: string;
}

const Usermanagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"users" | "accessRights">("users");
  const [users, setUsers] = useState([]);
  const [counties, setCounties] = useState<any[]>([]);

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [cornfirmuserPassword, setCornfirmUserPassword] = useState<string>("");
  const [user_name, setUser_name] = useState<string>("");
  const [user_group, setUser_group] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [user_level, setUser_level] = useState<string>("");
  const [user_levels, setUser_levels] = useState([]);
  const [user_groups, setUser_groups] = useState([]);

  const emptyFields = () => toast.error("All the fields are required");
  const notmatch = () => toast.error("passwords do not match");
  const usercreated = () => toast.success("user created");

  const [newUser, setNewUser] = useState<User>({
    userName: "",
    email: "",
    station: "Baringo",
    userGroup: "Administrator",
    userLevel: "County",
    lastLogin: "",
    capture: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      userEmail?.trim()?.length === 0 ||
      userPassword?.trim()?.length === 0 ||
      cornfirmuserPassword?.trim()?.length === 0 ||
      user_name?.trim()?.length === 0 ||
      user_group?.trim()?.length === 0 ||
      county?.trim()?.length === 0 ||
      user_level?.trim()?.length === 0
    ) {
      emptyFields();
    } else {
      if (userPassword?.toLowerCase() !== cornfirmuserPassword?.toLowerCase()) {
        notmatch();
      } else {
        await axios
          .post(`/api/auth/signup`, {
            userEmail: userEmail,
            userPassword: userPassword,
            user_name: user_name,
            station: county,
            user_group: user_group,
            user_level: user_level,
          })
          .then((response) => {
            usercreated();
          })
          .catch((error) => {});
      }
    }
  };

  const handleRemove = (index: number) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    const userToEdit = users[index];
    setNewUser(userToEdit);
    handleRemove(index);
  };

  useEffect(() => {
    const fetchCounties = async () => {
      // setLoading(true);
      await axios
        .get(`/api/countyapi/counties`)
        .then((response) => {
          setCounties(response.data.Counties);
        })
        .catch((error) => {
          console.error(error);
        });
      // setLoading(false);
    };
    const getUsers = async () => {
      await axios
        .get(`/api/getusers`)
        .then((response) => {
          setUsers(response.data.user);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchCounties();
    getUsers();
  }, []);

  useEffect(() => {
    const fetchCounties = async () => {
      // setLoading(true);
      await axios
        .get(`/api/user_levels`)
        .then((response) => {
          setUser_groups(response.data?.user_group);
          setUser_levels(response.data?.user_levels);
        })
        .catch((error) => {
          console.error(error);
        });
      // setLoading(false);
    };

    fetchCounties();
  }, []);

  return (
    <div className="p-4 bg-green-100 rounded-lg shadow-md">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "users"
              ? "bg-green-500 text-white"
              : "bg-green-200 text-green-700"
          }`}
          onClick={() => setActiveTab("users")}
        >
          System Users
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "accessRights"
              ? "bg-green-500 text-white"
              : "bg-green-200 text-green-700"
          }`}
          onClick={() => setActiveTab("accessRights")}
        >
          Access Rights
        </button>
      </div>

      {activeTab === "users" && (
        <>
          <h2 className="text-xl font-bold mb-4">System Users</h2>
          <form
            className="flex flex-col mb-4 w-full max-w-xs mx-auto"
            onSubmit={handleSubmit}
          >
            <label className="mb-1">Username</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your username"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
              className="p-2 border rounded mb-2 w-full"
              required
            />

            <label className="mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="p-2 border rounded mb-2 w-full"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />

            <label className="mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="p-2 border rounded mb-2 w-full"
              required
              value={cornfirmuserPassword}
              onChange={(e) => setCornfirmUserPassword(e.target.value)}
            />

            <label className="mb-1">User Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="p-2 border rounded mb-2 w-full"
              required
            />

            <label className="mb-1">User Group</label>
            <select
              name="userGroup"
              value={user_group}
              onChange={(e) => setUser_group(e.target.value)}
              className="p-2 border rounded mb-2 w-full"
            >
              <option value="">{`[select user group]`}</option>
              {user_groups?.map((component: any) => (
                <option key={component?.id} value={component?.id}>
                  {component?.name}
                </option>
              ))}
            </select>

            <label className="mb-1">User Level</label>
            <select
              name="userLevel"
              value={user_level}
              onChange={(e) => setUser_level(e.target.value)}
              className="p-2 border rounded mb-2 w-full"
            >
              <option value="">{`[select level]`}</option>
              {user_levels?.map((component: any) => (
                <option key={component?.id} value={component?.id}>
                  {component?.levels}
                </option>
              ))}
            </select>

            <label className="mb-1">County</label>
            <select
              name="station"
              className="p-2 border rounded mb-2 w-full"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            >
              <option value="">[Select County]</option>
              {counties.map((county: any) => (
                <option key={county.id} value={county.id}>
                  {county?.county}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded w-1/2 self-center"
            >
              Add User
            </button>
          </form>
          <div className="w-full p-2 bg-white text-black">
            <DataTable columns={userColumns} data={users} />
          </div>
        </>
      )}

      {activeTab === "accessRights" && (
        <>
          <h2 className="text-xl font-bold mb-4">Access Rights</h2>

          {/* Table for User Groups */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">User Groups</h3>
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border-b p-2 text-center">UGROUP</th>
                  <th className="border-b p-2 text-center">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2 text-center">
                    <input
                      type="text"
                      className="p-2 border rounded w-full"
                      value="Administrator"
                      readOnly
                    />
                  </td>
                  <td className="border-b p-2 text-center">
                    <button className="bg-yellow-500 text-white p-1 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-2 text-center">
                    <input
                      type="text"
                      className="p-2 border rounded w-full"
                      value="County Data admin"
                      readOnly
                    />
                  </td>
                  <td className="border-b p-2 text-center">
                    <button className="bg-yellow-500 text-white p-1 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
                {/* Add more user groups as needed */}
              </tbody>
            </table>
          </div>

          {/* Table for User Levels and Pages Access */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              User Levels and Pages Access
            </h3>
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border-b p-2 text-center">User Level</th>
                  <th className="border-b p-2 text-center">Pages Access</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2 text-center">
                    <select className="p-2 border rounded">
                      <option value="County">County</option>
                      <option value="National">National</option>
                    </select>
                  </td>
                  <td className="border-b p-2">
                    <div className="flex flex-col">
                      <label htmlFor="countyPages" className="mb-1">
                        Select Pages for County Level:
                      </label>
                      <div className="flex flex-col space-y-1">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="ml-2">1.0_menu-SysAdmin</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="ml-2">1.1_modMIS_Users</span>
                        </label>
                        {/* Add more pages as needed */}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white p-2 rounded">
                Save Changes
              </button>
              <button className="bg-gray-300 text-gray-700 p-2 rounded">
                Cancel Changes
              </button>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Usermanagement;
