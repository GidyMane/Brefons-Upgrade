import React from "react";

export const SubComponentHeader = ({ name }: { name: string }) => {
  return <h2 className="text-lg font-bold text-gray-900">{name}</h2>;
};

export const IndicatorHeader = ({ name }: { name: string }) => {
  return <h3 className="text-md font-semibold text-gray-700">{name}</h3>;
};
