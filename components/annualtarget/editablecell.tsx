import React, { useState } from "react";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
}: {
  value: any;
  row: { index: number };
  column: { id: string };
  updateData: (rowIndex: number, columnId: string, value: any) => void;
}) => {
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    updateData(index, id, value);
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
    />
  );
};

export default EditableCell;
