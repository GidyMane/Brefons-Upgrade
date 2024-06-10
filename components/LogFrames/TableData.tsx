"use client";
import React, { useState, ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { setIndicator } from "../../Redux/Slices/IndicatorSlice";

// Define the interface for the data rows
interface DataRow {
  id: string;
  ActivityName: string;
  UnitOfMeasurement: string;
  period: string;
  Agency: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TableData({ data }: { data: DataRow[] }) {
  const [editId, setEditId] = useState<string | null>(null);
  const [editRow, setEditRow] = useState<Partial<DataRow>>({});
  const dispatch = useDispatch();

  const handleViewClick = (row: DataRow) => {
    // Define what happens when the View button is clicked
  
    dispatch(
      setIndicator({
        isOpen: true,
        data: { ...row },
      })
    );
  };

  const handleEditClick = (row: DataRow) => {
    setEditId(row.id);
    setEditRow({ ...row });
  };

  const handleCancelClick = () => {
    setEditId(null);
    setEditRow({});
  };

  const handleSaveClick = async (id: string) => {
    await axios
      .put(`/api/activity/${id}`, editRow)
      .then(() => {
        toast.success("Activity updated");
        setEditId(null);
        setEditRow({});
      })
      .catch((error) => {
        toast.error("Failed to update activity");
      });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditRow((prevRow) => ({ ...prevRow, [name]: value }));
  };

  const handleDeleteClick = async (id: string) => {
    await axios
      .delete(`/api/activity/${id}`)
      .then(() => {
        toast.success("Activity deleted");
      })
      .catch((error) => {
        toast.error("Failed to delete activity");
      });
  };

  return (
    <div className="w-full overflow-x-auto">
      <TableContainer component={Paper}>
        <Table className="min-w-full" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Activity Name</StyledTableCell>
              <StyledTableCell>Unit of Measurement</StyledTableCell>
              <StyledTableCell>Frequency</StyledTableCell>
              <StyledTableCell>Responsible Agency</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <StyledTableRow key={row.id}>
                {editId === row.id ? (
                  <>
                    <StyledTableCell component="th" scope="row">
                      <TextField
                        name="ActivityName"
                        value={editRow.ActivityName || ""}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        name="UnitOfMeasurement"
                        value={editRow.UnitOfMeasurement || ""}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        name="period"
                        value={editRow.period || ""}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        name="Agency"
                        value={editRow.Agency || ""}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="flex flex-col md:flex-row">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleSaveClick(row.id)}
                          className="mb-2 md:mb-0 md:mr-2"
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={handleCancelClick}
                          className="md:ml-2"
                        >
                          Cancel
                        </Button>
                      </div>
                    </StyledTableCell>
                  </>
                ) : (
                  <>
                    <StyledTableCell component="th" scope="row">
                      {row.ActivityName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.UnitOfMeasurement}</StyledTableCell>
                    <StyledTableCell align="right">{row.period}</StyledTableCell>
                    <StyledTableCell align="right">{row.Agency}</StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="flex flex-col md:flex-row">
                        <Button
                          variant="contained"
                          color="info"
                          onClick={() => handleViewClick(row)}
                          className="mb-2 md:mb-0 md:mr-2"
                        >
                          View
                        </Button>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => handleEditClick(row)}
                          className="mb-2 md:mb-0 md:mr-2"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDeleteClick(row.id)}
                          className="md:ml-2"
                        >
                          Delete
                        </Button>
                      </div>
                    </StyledTableCell>
                  </>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer />
    </div>
  );
}

export default TableData;
