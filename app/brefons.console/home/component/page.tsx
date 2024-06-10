import InfoSection from '@/components/DashBoard/InfoSection'
import React from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const revalidate = 0;
const page = async() => {
 
  return (
    <div className='w-full'>
      {/* tabs */}
      <div className='mt-4 scroll-pb-16'>
        <InfoSection />

      </div>
    </div>
  )
}

export default page