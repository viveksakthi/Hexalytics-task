import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { HomeIcon, ChartBarIcon, DocumentChartBarIcon, LinkIcon, ClockIcon, EnvelopeIcon, PaperAirplaneIcon, Cog6ToothIcon, MoonIcon } from "@heroicons/react/24/outline"; // Hero svg icons, tailwind official recommended
import LogoRedingtontext from '../assets/logo-redington-text.png';


const Sidebar = () =>{
    
    const [sidebarOpen,setSidebarOpen] = useState(false);    

    // OnHover opent sidebar menu
    const handleSidebarOpen = () =>{
        setSidebarOpen(!sidebarOpen);
    }
    
    const pageTitle = useSelector(state => state.CommonReducer.pageTitle);  // Get state from store
    const pageDasboard = useSelector(state => state.CommonReducer.pageDasboard);  

    // Menu data
    const sideMenu = [
        {name: 'Home', url: '/home', svg: <HomeIcon className="w-5 h-5" aria-hidden="true" /> },
        {name: 'Dashboard', url: '/', svg: <ChartBarIcon className="w-5 h-5" aria-hidden="true" /> },
        {name: 'Reports', url: '/reports', svg: <DocumentChartBarIcon className="w-5 h-5" aria-hidden="true" /> },
        {name: 'Inbound Job', url: '/inbound-job', svg: <LinkIcon className="w-5 h-5" aria-hidden="true" /> },
        {name: 'Timeline', url: '/timeline', svg: <ClockIcon className="w-5 h-5" aria-hidden="true" /> },
        {name: 'Mailbox', url: '/mailbox', svg: <EnvelopeIcon className="w-5 h-5" aria-hidden="true" /> },
        {name: 'Messages', url: '/messages', svg: <PaperAirplaneIcon className="w-5 h-5" aria-hidden="true" /> },
    ];

    // Menu list
    const sideMenuList = sideMenu.map((item,index)=>{
        return(
            <li key={index.toString()}>
                <Link to={item.url} className={`${ pageTitle === item.name || pageDasboard === item.name ? 'text-white' : ''} flex items-center px-9 py-2 rounded-lg hover:text-white hover:bg-green-600`}>
                    {item.svg}                           
                    <span className="ml-2 md:hidden md:group-hover:block current:block">{item.name}</span>
                </Link>
            </li>
        );
    });

    return(
        <>
            <button 
                type="button" 
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden fixed z-20 top-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 '
                onClick={handleSidebarOpen}
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside 
                id="default-sidebar" 
                className={`${sidebarOpen ? 'transform-none' : '-translate-x-full'} fixed top-0 md:top-4 bottom-0 md:bottom-4 left-0 md:left-5 z-40 transition-transform  md:translate-x-0  text-gray-500 w-64 md:w-24 md:hover:w-64 md:current:w-64 group`}
                
            >
                <div className="h-full px-6 py-4 overflow-y-auto md:rounded-lg bg-zinc-950 flex flex-col">
                    <div className="mb-6 -mx-1">
                        <svg width="52" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="46" cy="6" r="6" fill="#F6F7FC" fillOpacity="0.3"/>
                            <circle cx="26" cy="6" r="6" fill="#F6F7FC" fillOpacity="0.6"/>
                            <circle cx="6" cy="6" r="6" fill="#F6F7FC" fillOpacity="0.8"/>
                        </svg>
                    </div>
                    <div className="logo flex px-2 mb-6 items-end">
                        <span className="flex-initial">
                            <svg width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2609 31.884L8.4058 26.3768L0 30.4348V42.029L7.53623 46.0869V37.971L18.2609 31.884Z" fill="#5BB559"/>
                                <path d="M13.3333 26.6666L23.4782 32.4637L33.0435 27.2464V16.2319L23.4782 11.0145V21.7391L13.3333 26.6666Z" fill="#5BB559"/>
                                <path d="M33.0435 47.8261V27.2464L11.3043 39.1304V59.4203L33.0435 47.8261Z" fill="#026939"/>
                                <path d="M0 30.4348V10.7246L20 0L20.2899 20.5797L0 30.4348Z" fill="#019049"/>
                            </svg>
                        </span>
                        <span className="flex-initial md:hidden md:group-hover:block ml-2 mb-3">
                            <img src={LogoRedingtontext} alt="Redington" />
                        </span>
                    </div>
                    <ul className="flex flex-col flex-1" style={{minWidth: '42px'}}>
                        <li>
                            <ul className="space-y-1 -mx-6">
                                {sideMenuList} {/* Menu List */}
                            </ul>
                        </li>
                        <li className="mt-auto">
                            <ul className="space-y-1 border-t border-solid -mx-6 pt-4">
                                <li>
                                    <a 
                                        href="#" 
                                        className="flex items-center px-9 py-2 rounded-lg hover:text-white hover:bg-green-600
                                    ">
                                        <Cog6ToothIcon className="w-5 h-5" aria-hidden="true" />                            
                                        <span className="ml-2 md:hidden md:group-hover:block current:block">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        className="flex items-center px-9 py-2 rounded-lg hover:text-white hover:bg-green-600"
                                    >
                                        <MoonIcon className="w-5 h-5" aria-hidden="true" />                     
                                        <span className="ml-2 md:hidden md:group-hover:block current:block">Change to Dark</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </aside>
            {sidebarOpen && <div onClick={handleSidebarOpen} class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30 cursor-pointer"></div> }
        </>
    );
}
export default Sidebar;