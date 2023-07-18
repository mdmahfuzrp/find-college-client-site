import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HiOutlineBell } from 'react-icons/hi'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const NavBar = () => {
    return (
        <div>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-white">
                    {({ open }) => (
                        <>
                            <div className="">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-12"
                                                src={logo}
                                                alt="House Hunter"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">

                                                <Link className="text-[var(--primary-color)] hover:bg-[var(--opacity-color)] hover:text-(--primary-color)] rounded-md px-3 py-2 text-sm font-medium">
                                                    Home
                                                </Link>
                                                <Link className="text-[var(--primary-color)] hover:bg-[var(--opacity-color)] hover:text-(--primary-color)] rounded-md px-3 py-2 text-sm font-medium">
                                                    Houses
                                                </Link>
                                                <Link className="text-[var(--primary-color)] hover:bg-[var(--opacity-color)] hover:text-(--primary-color)] rounded-md px-3 py-2 text-sm font-medium">
                                                    About
                                                </Link>
                                                <Link className="text-[var(--primary-color)] hover:bg-[var(--opacity-color)] hover:text-(--primary-color)] rounded-md px-3 py-2 text-sm font-medium">
                                                    Contact
                                                </Link>
                                                <Link className="text-[var(--primary-color)] hover:bg-[var(--opacity-color)] hover:text-(--primary-color)] rounded-md px-3 py-2 text-sm font-medium">
                                                    Faq
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="rounded-full bg-white p-1 text-gray-400 hover:text-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-color)]"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-color)]">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src="https://i.ibb.co/CQzrrxt/download.jpg" alt="" />
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
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            <Link className="block px-4 py-2 text-sm text-[var(--primary-color)] hover:bg-[var(--opacity-color)] hover:text-[var(--primary-color)]">
                                                                Dashboard
                                                            </Link>
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            <Link className="block px-4 py-2 text-sm text-[var(--primary-color)] hover:bg-[var(--opacity-color)] hover:text-[var(--primary-color)]">
                                                                Logout
                                                            </Link>
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-[var(--primary-color)] p-2 text-gray-300 hover:bg-[var(--hover-color)] hover:text-white focus:outline-none">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <IoMdClose className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <IoMdMenu className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    <Disclosure.Button
                                        as="a"
                                        className="text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white cursor-pointer 
                                                block rounded-md px-3 py-2 text-base font-medium ">
                                        <Link>
                                            Home
                                        </Link>
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        className="text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white cursor-pointer 
                                                block rounded-md px-3 py-2 text-base font-medium">
                                        <Link>
                                            Houses
                                        </Link>
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        className="text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white cursor-pointer 
                                                block rounded-md px-3 py-2 text-base font-medium">
                                        <Link>
                                            About
                                        </Link>
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        className="text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white cursor-pointer 
                                                block rounded-md px-3 py-2 text-base font-medium">
                                        <Link>
                                            Contact
                                        </Link>
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        className="text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white cursor-pointer 
                                                block rounded-md px-3 py-2 text-base font-medium">
                                        <Link>
                                            Faq
                                        </Link>
                                    </Disclosure.Button>
                                </div>
                                <div className="border-t border-[var(--primary-color)] pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/CQzrrxt/download.jpg" alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-[var(--primary-color)] font-medium leading-none">Mahfuz</div>
                                            <div className="text-sm font-medium leading-none text-[var(--hover-color)]">mahfuzrpsmorg@gmail.com</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-color)]"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        <Disclosure.Button
                                            as="a"
                                            className="block rounded-md px-3 py-2 text-base font-medium text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white cursor-pointer"
                                        >
                                            <Link>Dashboard</Link>
                                        </Disclosure.Button>
                                        <Disclosure.Button
                                            as="a"
                                            className="block rounded-md px-3 py-2 text-base font-medium text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white cursor-pointer"
                                        >
                                            <Link>Logout</Link>
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default NavBar;