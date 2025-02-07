'use client';
import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import Image from 'next/image';
import AidNetlogo from "@public/Aid_Net_logo.png"

const Navbar = () => {
    const account = useActiveAccount();

    return (
        <nav className="sticky top-0  bg-slate-800 border-b-2 border-black z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center">
                        <div className="flex items-center space-x-3">
                            <Image 
                                src={AidNetlogo} 
                                alt="AidNet Logo" 
                                width={60} 
                                height={60} 
                                style={{
                                    filter: "drop-shadow(0px 0px 24px #a726a9a8)",
                                }}
                            />
                            <h1 className="text-3xl font-bold text-slate-100">Aid<span className="text-red-500">Net.</span> </h1>
                            <div className="flex space-x-4 ">
                                <Link href={'/'}>
                                    <p className="rounded-md px-3 py-2 text-md  font-bold text-slate-100">Campaigns</p>
                                </Link>
                                {account && (
                                    <Link href={`/dashboard/${account?.address}`}>
                                        <p className="rounded-md px-3 py-2 text-md font-bold text-slate-100">Dashboard</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ConnectButton 
                            client={client}
                            theme={lightTheme()}
                            detailsButton={{
                                style: {
                                    maxHeight: "50px",
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;