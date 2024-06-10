"use client"
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const CropProductivityChart = () => {
  const data = [
    { crop: 'Maize', productivity: 500 },
    { crop: 'Banana', productivity: 789 },
    { crop: 'Cow pea', productivity: 230 },
    { crop: 'Sorghum', productivity: 165 },
    { crop: 'Water Melon', productivity: 450 },
    { crop: 'Tomato', productivity: 980 },
    { crop: 'Fodder', productivity: 678 },
  ];

  return (
    <div style={{ height: '300px' }}>
      <h2>Crop Productivity Chart</h2>
      <ResponsiveBar
        data={data}
        keys={['productivity']}
        indexBy="crop"
        margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: 'Crops',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Productivity (Tons/Ha)',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
      />
    </div>
  );
};

export default CropProductivityChart;
