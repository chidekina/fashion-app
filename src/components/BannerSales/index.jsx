const BannerSales = () => {
    return (
        <div className="bg-gradient-to-b from-[#F9DF56] from-0% to-[#E0C340] to-100% flex">
            <div>
                <div>
                    <img src="/assets/sales-pic.png" className="w-3/4"></img>
                </div>
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-600px] ml-20" />
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-360px] ml-36" />
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-660px] ml-[640px]" />
                <img src="/assets/star.png" className="absolute w-12 z-10 mt-[-200px] ml-[660px]" />
            </div>
            <div className="flex flex-col w-[500px] justify-center items-start">
                <h1 className="font-black flex-wrap text-[90px] z-10">
                    PAYDAY SALE NOW
                </h1>
                <p className="font-medium text-[26px] mb-12 z-10">
                    Spend minimal $100 get 30% off
                    voucher code for your next purchase
                </p>
                <div>
                <p className="font-bold text-[26px]">
                    1 June - 10 June 2021
                </p>
                <p className="text-[26px]">
                *Terms & Conditions apply
                </p>
                </div>
                <a href="#" className="bg-black text-white px-6 py-4 rounded-md mt-12">
                    SHOP NOW
                </a>
                <img src="/assets/Rectangle.png" className="absolute mb-96 w-[440px]"/>
            </div>
        </div>
    );
}

export default BannerSales;