import { Progress } from '@/components/ui/progress'
import React from 'react'

function UsageCreditProgress() {
    return (
        <div className='p-3 border rounded-2xl mb-5 flex-col gap-2'>
            <h2 className='font-bold text-xl'>Free Plan</h2>
            <p className='text-gray-400'>0/20 Message Used</p>
            <Progress value={33} />
        </div>
    )
}

export default UsageCreditProgress