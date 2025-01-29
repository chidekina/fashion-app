const BannerTitle = ({ title }) => {
    return (
        <>
            <h1 className="font-black flex-wrap z-10 text-[5rem] max-md:text-6xl">
                {title}
            </h1>
            <img src="/assets/Rectangle.png" className="absolute top-24 w-102 max-md:hidden" />
        </>
    );
}

export default BannerTitle;