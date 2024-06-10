import React from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Usermanagement from '@/components/usermanagement/settings';
export const revalidate = 0;
const page = async() => {
  
  return (
    <div className='w-full'>
        <div className='flex items-center justify-center mt-4 text-gray-900'>
          <Usermanagement/>
        </div>

    </div>
  )
}

export default page