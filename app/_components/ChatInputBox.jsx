"use client"
import { Paperclip } from 'lucide-react'
import React from 'react'
import { Mic } from 'lucide-react'
import { Send } from 'lucide-react'
import AiMultiModels from './AiMultiModels'
function ChatInputBox() {
    return (
            <div className='relative min-h-screen'>
                {/*Page content  */}
            <AiMultiModels/>
            <div/>
            {/*Fixed Chat Input */}
            <div className='fixed bottom-0 left-0 w-full flex justify-center px-4 p-4'>
                <div className='w-full border rounded-xl shadow-md max-w-2xl p-4'>
                    <input type='text' placeholder='Ask me Anything..'
                        className='border-0 outline-none'

                    />
                    <div className='mt-3 flex justify-between items-center'>
                        <button className={''} variant={'ghost'} size={'icon'}>
                            <Paperclip className='h-5 w-5' />
                        </button>
                        <div className='flex gap-5'>
                            <button variant={'ghost'} size={'icon'}><Mic /></button>
                            <button size={'icon'} className={'bg-blue-600'}><Send /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatInputBox