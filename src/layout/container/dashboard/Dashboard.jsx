import React, { Fragment, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Tab } from '@headlessui/react';
import DailyDashboard from './DailyDashboard'; // Daily Dashbord Tab content

// Tab menu
const tabMenu = [
  'Daily Dashboard',
  'Summary',
  'Employee Dashboard', 
  'Metric View', 
  'Drill Down', 
  'Detailed View', 
  'Geospatial'
]

// Tab menu list
const TabList = tabMenu.map((item)=>{
  return(
    <Tab key={item.toString()} as={Fragment}>
      {({ selected }) => (
        <button
          className={
            `${selected ? 'bg-zinc-800 text-white rounded-md drop-shadow-lg hover:bg-zinc-800' : 'bg-indigo-50 whitespace-nowrap text-ellipsis overflow-hidden hover:bg-white'} px-2 md:px-4 py-2.5 outline-none h-16 lg:h-auto `
          }
        >
          {item}
        </button>
      )}
    </Tab>
  );
});

const Dashboard = () =>{

  const dispatch = useDispatch();

  useEffect(()=>{
    setTimeout(()=>{
        dispatch({
            type: 'DASHBOARD', 
            payload: {
                pageTitle: "Operations Dashboard"
            }
        }); // Dispatch the page title to reducer
    }, 500);
},[]);
  

  return(
      <>
        <Tab.Group>

          {/* Tab list section */}
          <Tab.List className="gap-x-1 flex mb-5 mt-4 md:mt-0">
            {TabList}
          </Tab.List>

          {/* Tab content section */}
          <Tab.Panels>

            <Tab.Panel>
              <DailyDashboard /> {/* Daily Dashboard Tab content*/}
            </Tab.Panel>

            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
            <Tab.Panel>Content 4</Tab.Panel>
            <Tab.Panel>Content 5</Tab.Panel>
            <Tab.Panel>Content 6</Tab.Panel>
            <Tab.Panel>Content 7</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </>
    );
}
export default Dashboard;