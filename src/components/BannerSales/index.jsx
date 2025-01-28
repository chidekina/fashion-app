const BannerSales = () => {
    return (
        <div className="bg-gradient-to-b from-[#F9DF56] from-0% to-[#E0C340] to-100% flex max-md:px-2">
            <div className="max-md:hidden">
                <div>
                    <img src="/assets/sales-pic.png" className="w-3/4"></img>
                </div>
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-600px] ml-20" />
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-360px] ml-36" />
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-660px] ml-[640px]" />
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-200px] ml-[660px]" />
            </div>
            <div className="flex flex-col w-[500px] justify-center items-start">
                <h1 className="font-black flex-wrap z-10 text-8xl max-md:text-6xl">
                    PAYDAY SALE NOW
                </h1>
                <p className="font-medium text-2xl mb-12 z-10 max-md:text-xl">
                    Spend minimal $100 get 30% off
                    voucher code for your next purchase
                </p>
                <div>
                <p className="font-bold text-2xl max-md:text-xl">
                    1 June - 10 June 2021
                </p>
                <p className="text-2xl max-md:text-sm">
                *Terms & Conditions apply
                </p>
                </div>
                <a href="#" className="bg-black text-white px-6 py-4 rounded-md mt-12 max-md:mt-4 max-md:mb-5">
                    SHOP NOW
                </a>
                <img src="/assets/Rectangle.png" className="absolute mb-96 w-[440px] max-md:hidden"/>
            </div>
        </div>
    );
}

export default BannerSales;