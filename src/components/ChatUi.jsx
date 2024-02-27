import React from 'react'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'
import ChatStart from './ChatStart';
import ChatEnd from './ChatEnd';

export default function ChatUi() {
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex flex-col'>
            {/* text render, waiting for state look like */}
            <ChatStart />
            <ChatEnd />
            <form onSubmit={handleSubmit} className='flex gap-4 fixed left-12 right-12 bottom-12'>
                <Input></Input>
                <Button bg="blue" color="white">Send</Button>
            </form>
        </div>
    )
}