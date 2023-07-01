"use client";

import {useRouter} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next-intl/client';
import {useTransition} from 'react';
import Image from "next/image";

export default function LocaleSwitcher() {
    const t = useTranslations('Navbar');
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toLng = locale === "en" ? "es" : "en";
    function changeLang() {
        if (isPending) return;
        startTransition(() => {
            router.replace(`/${toLng}${pathname}`);
        });
    }
    return (
        <Image className='cursor-pointer' onClick={changeLang} src={`images/flags/${toLng==='es'?'en':'es'}.svg`} alt={t("FlagImage")}  width={27} height={18}/>
    );
}
