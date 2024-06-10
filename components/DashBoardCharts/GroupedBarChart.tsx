"use client"
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const GroupedBarChart = () => {
    const data = [
        {
            category: 'Livestock markets',
            achieved: 3,
            target: 21
        },
        {
            category: 'Vet diagnostic labs',
            achieved: 2,
            target: 7
        },
        {
            category: 'Border areas',
            achieved: 1,
            target: 2
        }
    ];

    return (
        <div style={{ height: '300px' }}>
            <ResponsiveBar
                data={data}
                keys={['achieved', 'target']}
                indexBy="category"
                layout="horizontal"
                margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
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
                    legend: 'Count',
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

export default GroupedBarChart;
