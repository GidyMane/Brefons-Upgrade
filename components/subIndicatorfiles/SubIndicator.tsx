import React from 'react';
import { Button } from '../ui/button';
import { DataTable } from './SubIndicatorTable';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import { toggleSubIndicator } from '../../Redux/Slices/SubIndicatorSlice';
import EditSubIndicator from './EditSubIndicator';
import { subIndicatorColumns, subIndicators } from './columns';
import { toggleViewSubIndicator } from '../../Redux/Slices/IndicatorTableSlice';

const SubIndicatorView = () => {
    const isEdit = useSelector((state: RootState) => state.subIndicatorSlice.isEdit);
    const dispatch = useDispatch();

    const handleBackClick = () => {
        dispatch(toggleViewSubIndicator());
    };

    return (
        <div className='mt-4 bg-white rounded-md p-4 flex flex-col gap-2'>
            <div className='my-4 flex justify-between items-center'>
                <h2 className='tracking-tight text-xl leading-tight text-balance font-bold'>Manage Subindicators</h2>
                <Button 
                    variant={"ghost"} 
                    className='hover:bg-green-400 hover:text-white text-sm tracking-tight leading-tight' 
                    onClick={handleBackClick}
                >
                    Back to indicator
                </Button>
            </div>

            <div>
                <h2 className='text-xl tracking-tight leading-tight text-balance mt-4'>View Sub indicators</h2>

                {/* edit sub indicator */}
                <Sheet open={isEdit} onOpenChange={() => { dispatch(toggleSubIndicator()) }}>
                    <SheetContent className='z-[110] overflow-y-scroll'>
                        <SheetHeader>
                            <SheetTitle>Edit your Subindicator</SheetTitle>
                            <SheetDescription>
                                <EditSubIndicator />
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

                

                {/* table comes here */}
                <DataTable columns={subIndicatorColumns} data={subIndicators} />
            </div>
        </div>
    );
};

export default SubIndicatorView;
