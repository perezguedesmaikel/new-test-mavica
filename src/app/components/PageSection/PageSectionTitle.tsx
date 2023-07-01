interface IPageSectionTitle {
    title:string;
    otherClasses?: string;
}

export const PageSectionTitle = ({title, otherClasses}: IPageSectionTitle) => {
    return (
        <h2 className={`text-2xl font-bold font-sans text-[#3A67CC] uppercase ${otherClasses}`}>
            {title}
        </h2>
    );
}