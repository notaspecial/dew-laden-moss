import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    BellIcon, ChartBarIcon, CurrencyDollarIcon, GiftIcon,
    MenuAlt2Icon, ShoppingBagIcon, TagIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import {SearchIcon} from '@heroicons/react/solid'

const navigation = [
    { name: 'Orders', href: '#', icon: CurrencyDollarIcon, current: true },
    { name: 'Products', href: '#', icon: ShoppingBagIcon, current: false },
    { name: 'Customers', href: '#', icon: UsersIcon, current: false },
    { name: 'Discounts', href: '#', icon: TagIcon, current: false },
    { name: 'Gift Card', href: '#', icon: GiftIcon, current: false },
    { name: 'Settings', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DewLadenMoss({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center space-x-2 px-4">
                                        <svg className="w-6 h-6" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality","fillRule":"evenodd","clipRule":"evenodd"}} viewBox="0 0 1270 1270" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                                            <defs/>
                                            <g id="Layer_x0020_1">
                                                <g id="_2763128350256">
                                                    <rect height="1270" style={{"fill":"#8a9b37"}} width="1270" rx="130.17" ry="147.47"/>
                                                    <rect style={{"fill":"#DCE103"}}  height="170.86" width="172.9" rx="86.45" ry="63.69" x="283.97" y="814.15"/>
                                                    <rect style={{"fill":"#DCE103"}} height="170.86" width="172.9" rx="48.28" ry="35.57" x="548.55" y="549.57"/>
                                                    <rect style={{"fill":"#DCE103"}} height="170.86" width="172.9" rx="86.45" ry="63.69" x="813.13" y="284.99"/>
                                                    <path style={{"fill":"#DCE103"}} d="M283.97 284.99h172.9v170.86h-172.9zM283.97 549.57h172.9v170.86h-172.9z"/>
                                                    <path style={{"fill":"#DCE103"}} d="M548.55 284.99h172.9v170.86h-172.9z"/>
                                                    <path style={{"fill":"#DCE103"}} d="M548.55 814.15h172.9v170.86h-172.9z"/>
                                                    <path style={{"fill":"#DCE103"}} d="M813.13 549.57h172.9v170.86h-172.9zM813.13 814.15h172.9v170.86h-172.9z"/>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="font-medium text-lg">Dew Laden Moss</div>
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                            'mr-4 flex-shrink-0 h-6 w-6'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 ">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow border-r border-brand/10 pt-5 bg-white overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-6 space-x-2">
                            <svg className="w-6 h-6" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality","fillRule":"evenodd","clipRule":"evenodd"}} viewBox="0 0 1270 1270" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                                <defs/>
                                <g id="Layer_x0020_1">
                                    <g id="_2763128350256">
                                        <rect height="1270" style={{"fill":"#8a9b37"}} width="1270" rx="130.17" ry="147.47"/>
                                        <rect style={{"fill":"#DCE103"}}  height="170.86" width="172.9" rx="86.45" ry="63.69" x="283.97" y="814.15"/>
                                        <rect style={{"fill":"#DCE103"}} height="170.86" width="172.9" rx="48.28" ry="35.57" x="548.55" y="549.57"/>
                                        <rect style={{"fill":"#DCE103"}} height="170.86" width="172.9" rx="86.45" ry="63.69" x="813.13" y="284.99"/>
                                        <path style={{"fill":"#DCE103"}} d="M283.97 284.99h172.9v170.86h-172.9zM283.97 549.57h172.9v170.86h-172.9z"/>
                                        <path style={{"fill":"#DCE103"}} d="M548.55 284.99h172.9v170.86h-172.9z"/>
                                        <path style={{"fill":"#DCE103"}} d="M548.55 814.15h172.9v170.86h-172.9z"/>
                                        <path style={{"fill":"#DCE103"}} d="M813.13 549.57h172.9v170.86h-172.9zM813.13 814.15h172.9v170.86h-172.9z"/>
                                    </g>
                                </g>
                            </svg>
                            <div className="font-medium text-lg">Dew Laden Moss</div>
                        </div>
                        <div className="mt-8 flex-grow flex flex-col">
                            <nav className="flex-1 px-4 pb-4 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-brand/10 text-gray-800' : 'text-gray-600 hover:bg-brand/10 hover:text-gray-800',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-5 w-5'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 md:-ml-4 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-14 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="layouts/DewLadenMoss#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
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
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-7 pt-3">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}