import React from 'react'
import { ModeToggle } from '../Layout/ThemeToggler';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../ui/sheet"
import { EditIcon } from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

const AddComponent = () => {
    return (
        <div>
            <Sheet >
                <SheetTrigger><EditIcon className="w-6 h-6 font-bold text-blue-400" /></SheetTrigger>
                <SheetContent side={"right"} className='z-[150]'>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default AddComponent
