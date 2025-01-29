const BannerImage = ({ path, isHidden = false }) => {
    console.log("BannerImage rendered with isHidden:", isHidden);
    return (
        <div className={isHidden ? "max-md:hidden" : ""}>
            <img src={path} className="w-3/4" alt="Sales" />
            <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-600px] ml-20" alt="Star" />
            <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-360px] ml-36" alt="Star" />
            <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-660px] ml-[640px]" alt="Star" />
            <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-200px] ml-[660px]" alt="Star" />
        </div>
    );
}

export default BannerImage;