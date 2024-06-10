import React from "react";

interface EditableCellProps {
  value: any;
  row: { index: number };
  column: { id: string };
  updateData: (rowIndex: number, columnId: string, value: any) => void;
  type?: string; // Optional type prop
}

const EditableCell: React.FC<EditableCellProps> = ({
  value,
  row,
  column,
  updateData,
  type = "text", // Default to text input if type is not provided
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData(row.index, column.id, e.target.value);
  };

  if (type === "file") {
    return (
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          updateData(row.index, column.id, file);
        }}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default EditableCell;
