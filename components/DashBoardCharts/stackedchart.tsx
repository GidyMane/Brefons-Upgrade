"use client"
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const StackedBarChart = () => {
    const data = [
        {
            category: 'Water Pan',
            achieved: 245,
            target: 800
        },
        {
            category: 'Irrigation',
            achieved: 454,
            target: 840
        },
        {
            category: 'Pastures',
            achieved: 453,
            target: 5000
        },
        {
            category: 'Rangelands',
            achieved: 453,
            target: 5000
        }
    ];

    return (
        <div style={{ height: '300px' }}>
            <ResponsiveBar
                data={data}
                keys={['achieved', 'target']}
                indexBy="category"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors={['#4CAF50', '#FFC107']}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Area (HA)',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20
                    }
                ]}
                animate={true}
            />
        </div>
    );
};

export default StackedBarChart;
