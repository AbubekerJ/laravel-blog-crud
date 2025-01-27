import React from 'react';
import { Head, Link } from '@inertiajs/react';


const TestReact = ({ person }) => {
    return (
        <>
        <Head title='test react'/>
            <div className='flex flex-col items-center justify-start bg-gray-400 p-10 gap-5'>
                <p>TestReact </p>
            {person.map((x, index) => (
                <ul key={index} className='bg-red-400' >
                    <li className='underline'>
                    <Link href={route('testReact.show', { id: x.id })}> <h1>{x.name}</h1>
                    </Link> 
        
                    </li>
                    <li><p>Job: {x.job}</p></li>
                    <li><p>Age: {x.age}</p>
                    </li>
                    <li>
                    <p>Id: {x.id}</p>
                    
                    
                    </li>
                
                </ul>
                
            ))}
            </div>
            
        </>
    );
};

export default TestReact;
