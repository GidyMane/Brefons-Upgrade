"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { DataTable } from "./DataTable";
import { columns } from '../subprojects/columns';
import { userColumns } from "./columns";

const PageView8: React.FC = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [pageName, setPageName] = useState<string>("");
  const [pageURL, setPageURL] = useState<string>("");

  const fetchPages = async () => {
    try {
      const response = await axios.get("/api/pages");
      setPages(response.data.pages);
    } catch (error) {
      console.error("Error fetching pages:", error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handlePageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pageName.trim() === "" || pageURL.trim() === "") {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post("/api/pages", { pageName, pageURL });
      toast.success("Page added successfully");
      setPageName("");
      setPageURL("");
      fetchPages();
    } catch (error) {
      console.error("Error adding page:", error);
      toast.error("Failed to add page");
    }
  };

  const handleRemovePage = async (id: number) => {
    try {
      await axios.delete(`/api/pages/${id}`);
      toast.success("Page removed successfully");
      fetchPages();
    } catch (error) {
      console.error("Error removing page:", error);
      toast.error("Failed to remove page");
    }
  };

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Page Management</h2>
      <form onSubmit={handlePageSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Page Name</label>
          <input
            type="text"
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Page URL</label>
          <input
            type="text"
            value={pageURL}
            onChange={(e) => setPageURL(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Page
        </button>
      </form>

      <div>
        <DataTable data={[]} columns={userColumns}/>
      </div>

      {/* <table className="w-full border-collapse mb-4">
        <thead>
          <tr>
            <th className="border-b p-2 text-center">#</th>
            <th className="border-b p-2 text-center">Page Name</th>
            <th className="border-b p-2 text-center">Page URL</th>
            <th className="border-b p-2 text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page, index) => (
            <tr key={page.id}>
              <td className="border-b p-2 text-center">{index + 1}</td>
              <td className="border-b p-2 text-center">{page.pageName}</td>
              <td className="border-b p-2 text-center">{page.pageURL}</td>
              <td className="border-b p-2 text-center">
                <button
                  className="bg-red-500 text-white p-1 rounded"
                  onClick={() => handleRemovePage(page.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <ToastContainer />
    </div>
  );
};

export default PageView8;
