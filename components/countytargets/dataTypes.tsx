export type Indicator = {
    id: number;
    description: string;
    newTarget: number;
    youthTarget: number;
    remarks: string;
};

export type SubComponent = {
    id: number;
    title: string;
    indicators: Indicator[];
};
