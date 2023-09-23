import React from "react";
import {useSelector} from 'react-redux';
import { BellIcon } from '@heroicons/react/24/solid'; // Hero svg icons, tailwind official recommended
import SearchBar from "../../common/SearchBar";
import ProfileMenu from "./ProfileMenu";

const Header = () =>{

    const pageTitle = useSelector(state => state.CommonReducer.pageTitle); // Get state from store

    return(
        <div className='pt-1 pb-3 md:py-7 px-5 md:px-0 -mx-5 md:mx-0 sticky md:relative top-0 z-20 bg-white md:bg-transparent drop-shadow-xs md:shadow-none'>
            <div className="flex items-center">
                <div className="flex-initial 2xl:w-5/12 hidden md:block mr-4 lg: mr-10">
                    <h1 className="font-medium text-2xl text-neutral-800 whitespace-nowrap text-ellips overflow-hidden">{pageTitle}</h1> {/* Page title dynamically display here */}
                </div>
                
                <form className="flex-initial w-full 2xl:w-7/12 ps-12 md:ps-0">
                    <SearchBar />
                </form>
                <div className="flex-initial ps-4 lg:ps-10 flex items-center justify-end">
                    <div className="relative w-5">
                        <BellIcon className="-mr-1 h-6 w-6 text-2xl cursor-pointer" aria-hidden="true" />
                        <span 
                            className="absolute bg-red-600 text-xs rounded-full w-3 h-3 leading-none text-white text-center -right-1 -top-1"
                        >
                            <small className="block my-px">3</small>
                        </span>
                    </div>
                    <div className="ml-6 w-20">
                        <ProfileMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;