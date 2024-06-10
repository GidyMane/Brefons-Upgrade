"use client"
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const LivestockProductivityChart = () => {
  const data = [
    { livestock: 'Indigenous Chicken Meat', productivity: 100 },
    { livestock: 'Milk (Cow)', productivity: 2000 },
    { livestock: 'Milk (Goat)', productivity: 1500 },
    { livestock: 'Milk (Camel)', productivity: 1200 },
    { livestock: 'Camel Meat', productivity: 300 },
    { livestock: 'Goat Meat (Chevon)', productivity: 250 },
    { livestock: 'Honey', productivity: 400 },
    { livestock: 'Beef', productivity: 350 },
  ];

  return (
    <div style={{ height: '300px' }}>
      <h2>Livestock Productivity Chart</h2>
      <ResponsiveBar
        data={data}
        keys={['productivity']}
        indexBy="livestock"
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
          legend: 'Livestock',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Productivity (Tons/Ha or Litres/year)',
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

export default LivestockProductivityChart;
