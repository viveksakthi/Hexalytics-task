import React, {Fragment} from "react";
import { Menu, Transition } from '@headlessui/react';
import { ArrowRightOnRectangleIcon, ChevronDownIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'; // Hero svg icons, tailwind official recommended

const ProfileMenu = () =>{
    return(
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-3xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 drop-shadow-xs  hover:bg-gray-50">
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} w-full px-4 py-2 text-sm flex items-center`}
                            >
                            <Cog6ToothIcon
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                            />
                            Account settings
                            </a>
                        )}
                    </Menu.Item>
                    <form method="POST" action="#">
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                type="submit"
                                className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} w-full px-4 py-2 text-left text-sm flex items-center`}
                            >                                        
                                <ArrowRightOnRectangleIcon
                                    className="mr-2 h-4 w-4"
                                    aria-hidden="true"
                                />
                                Sign out
                            </button>
                            )}
                        </Menu.Item>
                    </form>
                </div>
                </Menu.Items>
            </Transition> 
        </Menu>
    )
}
export default ProfileMenu;