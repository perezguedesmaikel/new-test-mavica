interface IPageSectionSubTitle {
    subtitle:string;
    otherClasses?: string;
}

export const PageSectionSubTitle = ({subtitle, otherClasses}: IPageSectionSubTitle) => {
    return (
        <h4 className={`text-3xl font-sans font-semibold mt-5 ${otherClasses}`}>
            {subtitle}
        </h4>
    );
}