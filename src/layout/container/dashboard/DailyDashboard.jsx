import React, { useState } from 'react';
import { FunnelIcon, InformationCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline'; // Hero svg icons, tailwind official recommended
import PerformanceChart from './PerformanceChart'; // Bar chart - Employee performace
import PendingChart from './PendingChart'; // Bar chart - Job pending 
import ChartActionMenu from './ChartActionMenu'; // Chart Dropdown menu
import Category from './Category'; // Category list
import TableList from './TableList'; // Jobs table

const DailyDashboard = () =>{

    const [input, setInput] = useState({
        period: 'daily',
    }); // Fliter form inputs

    const handleOnChange = (event) =>{
        setInput({...input, [event.target.name] : event.target.value});
    }; // Filter input value set on Onchange 

    return(
        <>
            {/* Filter section */}
            <div 
                className='sticky top-20 md:top-2 flex rounded-md bg-white border-blue-50 border drop-shadow-xs mb-5 z-10'
            >
                <div className='bg-violet-200 rounded-l-md w-16 items-center justify-center flex'>
                    <FunnelIcon className="h-full w-6 text-gray-500 text-2xl" aria-hidden="true" />
                </div>
                <div className='px-4 py-2'>
                    <form className='flex space-x-3'>
                        <div className='relative w-40'>
                            <label className="absolute top-1.5 left-3.5 right-3.5 text-xs font-light">Period</label>
                            <select  
                                className='block w-full pt-5 pb-1 px-3.5 border border-blue-50 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 font-medium'
                                name="period"                                
                                onChange={handleOnChange} // Call onchange handler
                            >
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            {/* Category section */}
            <div className="grid grid-cols-1 gap-1 sm:gap-2 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mb-5">
                <Category period={input.period} /> {/* Category list */}
            </div>

            {/* Chart section */}
            <div className='grid grid-cols-1 2xl:grid-cols-2 gap-1 sm:gap-2 lg-3 xl:gap-5 mb-5'>
                <div className='bg-white rounded-md border border-violet-200 drop-shadow-xs p-4 flex flex-col'>
                    <div className='flex justify-between mb-6'>
                    <h3 className='w-3/5 text-lg font-semibold text-neutral-800'>
                        Employee Performance - &nbsp; 
                        <span className='capitalize'>{input.period} </span>
                        Jobs
                        </h3>
                    <div className='flex justify-end items-center gap-2 w-2/5 text-gray-400'>
                        <InformationCircleIcon className="h-7 w-7 cursor-pointer" aria-hidden="true" />
                        <LightBulbIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" />
                        <div>
                        <ChartActionMenu /> {/* Dropdown menu */}
                        </div>
                    </div>                    
                    </div>
                    <div className='md:flex 2xl:flex-1 md:space-x-3'>
                    <div className='w-full md:w-2/3'>
                        <PerformanceChart period={input.period} /> {/* Employee performance chart */}
                    </div>
                    <div className='w-full md:w-1/3 bg-gray-100 p-4 mt-2 md:mt-0 text-xs'>
                        <h4 className='font-semibold mb-4'>Insights</h4>
                        <p className='mb-4'>The requisition approval rate has increased by 10% in comparison to last year.</p>
                        <p>This increase is due to implementing the process of attaching the email communication of approval from the L1 manager of the employee, which has resulted in reduced not important requisitions by 15% and lowered the rejections by the competent authorities.</p>
                    </div>
                    </div>
                </div>
                <div className='bg-white rounded-md border border-violet-200 drop-shadow-xs p-4'>
                    <div className='flex justify-between mb-6'>
                    <h3 className='w-3/5 text-lg font-semibold text-neutral-800'>Job Pendings At Each Stage</h3>
                    <div className='flex justify-end items-center gap-2 w-2/5 text-gray-400'>
                        <InformationCircleIcon className="h-7 w-7 cursor-pointer" aria-hidden="true" />
                        <LightBulbIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" />
                        <div>
                        <ChartActionMenu /> {/* Dropdown menu */}
                        </div>
                    </div>
                    </div>
                    <div className='md:w-2/3 md:mx-auto 2xl:w-full'>
                    <PendingChart period={input.period} /> {/* Job pending chart */}
                    </div>
                </div>
            </div>

            {/* Table section */}
            <div className='bg-white rounded-md border border-violet-200 drop-shadow-xs'>
                <div className='flex justify-between items-center px-4 py-2 border-b border-violet-200'>
                    <div className='flex space-x-3'>
                    <h3 className="text-lg font-semibold text-neutral-800">All Jobs</h3>
                    <span className='bg-blue-50 rounded-full px-2 py-2 text-xs w-24 text-center'>100 users</span>
                    </div>
                    <div className='flex space-x-2.5'>
                    <button className='rounded-md px-4 py-2.5 border border-transparent hover:border-blue-50 shadow-sm bg-royal-voilet-10 hover:bg-white text-white hover:text-zinc-700 font-semibold'>Employee</button>
                    <button className='rounded-md px-4 py-2.5 border border-blue-50 hover:border-transparent shadow-sm bg-white hover:bg-royal-voilet-10 hover:text-white font-semibold'>Jobs</button>
                    </div>
                </div>
                <TableList period={input.period} /> {/* Jobs table */}
            </div>
        </>
    )
}
export default DailyDashboard;
