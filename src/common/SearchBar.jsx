import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';// Hero svg icons, tailwind official recommended


const SearchBar = () =>{
    return(
        <div className="block relative">
            <input 
                type="text" 
                className="mt-1 block w-full rounded-md border-transparent drop-shadow-xs focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ps-11" 
                placeholder="Search" 
            />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute inset-y-0 left-3 my-auto text-2xl" aria-hidden="true" />
        </div>
    )
}
export default SearchBar;