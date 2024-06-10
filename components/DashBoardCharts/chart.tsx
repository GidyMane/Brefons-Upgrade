"use client"
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    "indicator": "Health and Market Access Infrastructure",
    "constructed": 3,
    "rehabilitated": 21
  },
  {
    "indicator": "Hay stores/sheds",
    "constructed": 2,
    "rehabilitated": 7
  },
  {
    "indicator": "Veterinary Laboratories",
    "constructed": 1,
    "rehabilitated": 2
  },
  {
    "indicator": "Livestock Sale Yards/Markets",
    "constructed": 3,
    "rehabilitated": 12
  },
  {
    "indicator": "Access Roads",
    "constructed": 10,
    "rehabilitated": 5
  }
];

const Chart: React.FC = () => (
  <ResponsiveBar
    data={data}
    keys={['constructed', 'rehabilitated']}
    indexBy="indicator"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode="grouped"
    colors={{ scheme: 'category10' }}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -45,
      legend: 'Infrastructure',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Number of Infrastructure',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    animate={true}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'top-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default Chart;
