"use client"
import Navbar from "@/app/components/Navbar";
import styles from "../styles.module.css";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {IServiceCardProps} from "@/app/components/ServicesCard";
import {EmblaCarousel} from "@/app/components/Carousel";
import {GenericVignette} from "@/app/components/GenericVignette/GenericVignette";
import useAppContext from "@/contexts/AppContext";
import {PageButton} from "@/app/components/PageButton/PageButton";
import {PageSectionTitle} from "@/app/components/PageSection/PageSectionTitle";
import {PageSectionSubTitle} from "@/app/components/PageSection/PageSectionSubTitle";
import {useTranslations} from 'next-intl';
import ContactForm from "@/app/components/ContactForm";


const navigation = [
    {name: 'Home', href: '#section_home'},
    {name: 'Services', href: '#section_services'},
    {name: 'About', href: '#section_about'},
    {name: 'Tools', href: '#section_tools'},
    {name: 'Partners', href: '#section_partners'},
]
export default function Home() {
    const [current, setCurrent] = useState<string>("#section_home");
    const {services, setServices} = useAppContext();

    const t = useTranslations('Main');


    useEffect(() => {
        getData().then((data) => {
            setServices(data);
        });

        const sections = document.querySelectorAll("section[id], header[id]");
        window.addEventListener("scroll", navHighlighter);

        function navHighlighter() {
            let scrollY = window.scrollY;
            sections.forEach((current: any) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
                const sectionId = current.getAttribute("id");
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    setCurrent("#" + sectionId);
                }
            });
        }

        return () => {
            window.removeEventListener("scroll", navHighlighter);
        };
    }, []);


    return (
        <>
            <header id="section_home" className="relative p-0 md:pt-[50%] pt-[722px] h-full">
                <div className="bg-[#001853] bg-image-numbers w-full h-full absolute pt-[1.5rem] top-0 left-0 m-0">
                    <Navbar navigation={navigation} current={current}/>
                    <div
                        className="absolute items-end rotate-180 bottom-[-4rem] left-[20%] -z-10 hidden sm:block w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[5rem] lg:h-[5rem]">
                        <span className={`${styles.rounded_triangle}`}></span>
                    </div>
                    <div className="flex md:justify-between flex-col md:flex-row h-full mt-[4rem] overflow-hidden">
                        <div className="w-full h-full flex flex-col items-start gap-6 p-5 lg:p-20 justify-center">
                            <h1 className="font-sans sm:text-4xl md:text-3xl lg:text-6xl text-2xl  font-extrabold text-white">Es
                                tiempo <br/> de maquetar </h1>
                            <p className="text-white font-sans text-lg sm:text-xl md:text-sm lg:text-xl">Debes usar
                                NextJS y Tailwind CSS . Cada sección de la página debe ser un componente individual. Usa
                                el módulo next-intl para internacionalización. Usa la imaginación para desarrollar el
                                responsive de la versión móvil.
                            </p>

                        </div>
                        <div
                            className="relative bottom-[3%] md:bottom-[-5%] lg:bottom-[-10%] xl:bottom-[-12%] -right-[5%] sm:-right-[25%] md:right-0 w-full h-full ">
                            <Image src="/images/hero1.svg" alt="Hero Image" fill style={{scale: "105%"}}/>
                        </div>
                    </div>
                </div>

            </header>
            <main className="container mx-auto p-4">
                <section id="section_services" className="h-auto pt-0 md:pt-[6.5rem]">
                    <div className="flex flex-col md:flex-row md:gap-x-8 w-full h-full">
                        <div className="w-full md:w-1/2">
                            <PageSectionTitle title="Servicios" />
                            <PageSectionSubTitle subtitle="Esta info te llega desde un servicio externo" />
                            <p className="text-xl font-sans mt-5">Consultando el servicio en
                                https://react-frontend.pages.dev/slides.json, debes usar Context para enviar los datos
                                que necesitas en la sección de abajo. A la derecha tiene un slide o carrusel.</p>

                            <PageButton
                                value={<>Ver más
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                                    </svg>
                                </>}
                                otherClasses="text-2xl mt-6"
                            />
                        </div>
                        <div className="w-full md:w-1/2 mt-0 md:mt-0">
                            <EmblaCarousel items={services || []}/>
                        </div>
                    </div>
                </section>
                <section id="section_about" className="  pt-0 md:pt-[6.5rem]">
                    <div className="flex flex-col-reverse md:flex-row md:gap-x-8 w-full h-full">
                        <div className="w-full md:h-[600px] sm:h-[600]  md:w-1/2 relative mt-20 md:mt-20">
                            <Image src="/images/about.png" alt="AboutUs Image" width={600} height={600}/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <PageSectionTitle title="Sobre Nosotros" otherClasses="text-end" />
                            <PageSectionSubTitle subtitle={t("About.Subtitle")} otherClasses="text-end" />
                            <p className="text-xl font-sans text-end mt-5">Usted debe tener un sólido conocimiento de
                                HTML y CSS. Debe comprender la arquitectura de componentes de React. Debe tener buena
                                atención al detalle, organización del código, habilidades de comunicación efectiva y
                                capacidad para trabajar en equipo.</p>
                            <div className="w-full mt-5 flex flex-col gap-3">
                                {services?.map((item: IServiceCardProps) => (
                                    <div key={item.id} className="flex items-center justify-end gap-3">
                                        <p className="font-sans">{item.title}</p>
                                        <GenericVignette borderColor="border-[#3D93FF]" bgColor="bg-white"
                                                         dotColor="bg-[#3D93FF]"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section_tools" className="h-auto min-h-[40rem] pt-0 md:pt-[6.5rem]">
                    <div className="flex flex-col-reverse md:flex-row md:gap-x-8 w-full h-full">
                        <div className="w-full md:w-1/2">
                            <PageSectionTitle title="Herramientas" otherClasses="text-start" />
                            <PageSectionSubTitle subtitle={t("About.Subtitle")} otherClasses="text-start" />
                            <p className="text-xl font-sans text-start mt-5">Usted debe tener un sólido conocimiento de
                                HTML y CSS. Debe comprender la arquitectura de componentes de React. Debe tener buena
                                atención al detalle, organización del código, habilidades de comunicación efectiva y
                                capacidad para trabajar en equipo.</p>
                            <div className="w-full mt-5 flex flex-col gap-3">
                                {services?.map((item: IServiceCardProps) => (
                                    <div key={item.id} className="flex items-center justify-end gap-3">
                                        <p className="font-sans">{item.title}</p>
                                        <GenericVignette borderColor="border-[#3D93FF]" bgColor="bg-white"
                                                         dotColor="bg-[#3D93FF]"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:h-[600px] sm:h-[600]  md:w-1/2 relative mt-20 md:mt-20">
                            <Image src="/images/about.png" alt="AboutUs Image" width={600} height={600}/>
                        </div>
                    </div>
                </section>
                <section id="section_partners" className="h-auto min-h-[40rem] pt-[6.5rem]">
                    <div className="flex flex-col-reverse md:flex-row md:gap-x-8 w-full h-full">
                        <div className="w-full h-[600px] sm:h-[600]  md:w-1/2 relative mt-20 md:mt-20">
                            <Image src="/images/about.png" alt="AboutUs Image" width={600} height={600}/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <PageSectionTitle title="Socios" otherClasses="text-end" />
                            <PageSectionSubTitle subtitle={t("About.Subtitle")} otherClasses="text-end" />
                            <p className="text-xl font-sans text-end mt-5">Usted debe tener un sólido conocimiento de
                                HTML y CSS. Debe comprender la arquitectura de componentes de React. Debe tener buena
                                atención al detalle, organización del código, habilidades de comunicación efectiva y
                                capacidad para trabajar en equipo.</p>
                            <div className="w-full mt-5 flex flex-col gap-3">
                                {services?.map((item: IServiceCardProps) => (
                                    <div key={item.id} className="flex items-center justify-end gap-3">
                                        <p className="font-sans">{item.title}</p>
                                        <GenericVignette borderColor="border-[#3D93FF]" bgColor="bg-white"
                                                         dotColor="bg-[#3D93FF]"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section_contact_us"  className="h-screen pt-[6.5rem]">
                    <div className="flex flex-col-reverse md:flex-row md:gap-x-8 w-full h-full">
                        <div className="w-full md:w-1/2">
                            <PageSectionTitle title="Contactanos" otherClasses="text-start" />
                            <PageSectionSubTitle subtitle={t("About.Subtitle")} otherClasses="text-start" />
                            <p className="text-xl font-sans text-start mt-5">Usted debe tener un sólido conocimiento de
                                HTML y CSS. Debe comprender la arquitectura de componentes de React. Debe tener buena
                                atención al detalle, organización del código, habilidades de comunicación efectiva y
                                capacidad para trabajar en equipo.</p>
                            <div className="w-full mt-5 flex flex-col gap-3">
                                {services?.map((item: IServiceCardProps) => (
                                    <div key={item.id} className="flex items-center justify-start gap-3">
                                        <p className="font-sans">{item.title}</p>
                                        <GenericVignette borderColor="border-[#3D93FF]" bgColor="bg-white"
                                                         dotColor="bg-[#3D93FF]"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=" w-full h-[600px] sm:h-[600]  md:w-1/2 relative mt-0  md:mt-20">
                            <ContactForm/>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

async function getData() {
    const response = await fetch("https://react-frontend.pages.dev/slides.json");
    console.log("RESPONSE: ", response);
    return response.json();
}





