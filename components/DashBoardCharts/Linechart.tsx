"use client"
import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChart = () => {
    const data = [
        {
            id: 'Agriculture and Pastoral Land',
            data: [
                { x: 1, y: 0 },
                { x: 2, y: 1240 },
                { x: 3, y: 5000 }
            ]
        },
        {
            id: 'Innovative Technologies and Practices',
            data: [
                { x: 1, y: 0 },
                { x: 2, y: 2556 },
                { x: 3, y: 5000 }
            ]
        }
    ];

    return (
        <div style={{ height: '300px' }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'linear' }}
                yScale={{ type: 'linear', min: 0, max: 5000 }}
                curve="monotoneX"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Months',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Hectares',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enablePoints={false}
                enableGridX={false}
                enableGridY={false}
                colors={{ scheme: 'category10' }}
                lineWidth={2}
                pointSize={8}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
};

export default LineChart;
