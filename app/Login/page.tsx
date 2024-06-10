import Login from '@/components/login'
import { getServerSession } from 'next-auth'
import React, { Suspense } from 'react'

const page = async() => {
  return (
    <div>
      <Suspense>
        <Login />
      </Suspense>
    </div>
  )
}

export default page
