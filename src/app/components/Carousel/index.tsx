import React, {useCallback, useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {IServiceCardProps, ServiceCard} from "@/app/components/ServicesCard";
import {CustomIconMobile} from "@/app/components/CustomIcons/CustomIconMobile";
import {CustomIconDataConfig} from "@/app/components/CustomIcons/CustomIconDataConfig";
import {CustomIconConfig} from "@/app/components/CustomIcons/CustomIconConfig";
import {GenericVignette} from "@/app/components/GenericVignette/GenericVignette";

export interface IEmblaCarouselProps {
    items: IServiceCardProps[];
}

interface IServiceIcon {
    [x: string]: any;
}

const serviceIcon: IServiceIcon = {
    mobile: <CustomIconMobile/>,
    data_config: <CustomIconDataConfig/>,
    config: <CustomIconConfig/>
};

export const EmblaCarousel = ({items}: IEmblaCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: "center"}, [Autoplay()]);

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        updateCurrent();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext();
        updateCurrent();
    }, [emblaApi]);

    const updateCurrent = useCallback(() => {
        if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi]);


    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", ()=>updateCurrent());
    }, [emblaApi]);

    const handleDotClick = (index: number) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
        updateCurrent();
    };




    return (
        <div className="embla mt-20 ">
            <div className="embla__wrapper">
                <div className="embla__viewport " ref={emblaRef}>
                    <div className="embla__container">
                        {items.map((item) => {
                            return <ServiceCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                                //@ts-ignore
                                icon={serviceIcon[item.icon]}
                            />
                        })}
                    </div>
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
            </button>
            <button className="embla__next" onClick={scrollNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </button>
            <div className="flex items-center justify-center gap-6 w-full">
                {items.map((item, index) => {
                    return <GenericVignette key={index} onClick={()=>handleDotClick(index)} borderColor="border-black" bgColor="bg-[#3D93FF]" dotColor={index === selectedIndex ? "bg-[#2E53A3]" : "bg-white"} />
                })}
            </div>
        </div>
    )
}
