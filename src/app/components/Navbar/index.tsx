"use client";
import {Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {PageButton} from "@/app/components/PageButton/PageButton";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";
import {useState} from "react";
import Link from "next/link";

export interface INavbarItem {
    name: string;
    href: string;
}

export interface INavbarProps {
    navigation: INavbarItem[];
    current: string;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({navigation, current}: INavbarProps) {
    const t = useTranslations('Navbar');
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    console.log("LOCALE: ", locale)
    return (
        <Disclosure as="nav" className={`h-[86px] flex items-center  transition ease-in-out duration-500 ${current === navigation[0].href ? "bg-white" : "bg-[#2E53A3]/30"} transition-colors rounded shadow w-[95%] left-[2%] fixed z-50 backdrop-blur-sm`}>
            {({ open }) => (
                <>
                    <div className=" px-2 sm:px-6 lg:px-8 w-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure as="div" className="relative z-50">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className="flex items-center focus:outline-none"
                                                onClick={() => setIsOpen(!isOpen)}
                                            >
                                                <Bars3Icon
                                                    className={`${open ? 'transform rotate-180' : ''} w-10 h-10 ml-1`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel
                                                className={`${
                                                    open ? 'block' : 'hidden'
                                                } absolute left-0 w-[250px] mt-2 py-2  rounded shadow-lg bg-white`}
                                            >
                                                {navigation.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className={classNames(
                                                            current === item.href  ? 'text-[#2E53A3] font-bold' : 'text-black hover:text-gray-600',
                                                            'block rounded-md px-3 py-2 text-base font-medium uppercase font-inter'
                                                        )}
                                                        aria-current={current === item.href  ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4 ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    current === item.href ? 'text-[#2E53A3] font-bold' : 'text-black hover:text-gray-600',
                                                    'rounded-md px-0 lg:px-3 py-2 text-sm font-medium uppercase font-inter'
                                                )}
                                                aria-current={current === item.href ? 'page' : undefined}
                                            >
                                                {t(item.name)}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link href={'/#section_contact_us'}>
                                <PageButton value={t("Contact")} otherClasses="me-3 md:me-6" />
                                </Link>
                                <LocaleSwitcher />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
