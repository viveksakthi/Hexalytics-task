import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'; // Hero svg icons, tailwind official recommended

const ChartActionMenu = () => {
    return(
        <Menu as="div">
            <div>
                <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold hover:drop-shadow-xs  hover:bg-gray-50">
                <EllipsisVerticalIcon className="h-7 w-7 cursor-pointer" aria-hidden="true" />
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
                            <span
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} w-full px-4 py-2 text-sm flex items-center`}
                            >
                            Menu 1
                            </span>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <span
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} w-full px-4 py-2 text-sm flex items-center`}
                            >
                            Menu 2
                            </span>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
            </Transition> 
        </Menu>
    )
}
export default ChartActionMenu;