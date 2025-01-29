const Subscribe = () => {
    return (
        <div className="bg-[#E6C744] flex flex-col justify-center text-center items-center text-white py-24 max-md:bg-white max-md:text-[#E6C744]">
            <div className="w-1/2 max-md:w-full">
            <h1 className="font-black text-5xl">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </h1>
            <p className="">Type your email down below and be young wild generation</p>
            </div>
            <input type="text" placeholder="Add your email here" className="py-2 w-96 mt-5 rounded-md pl-2 h-12 bg-white text-[#767676] max-md:border-[#767676] max-md:outline-2" />
            <a href="#" className="bg-black px-7 py-3 relative bottom-[46px] left-[140px] rounded-[5px] max-md:text-white">SEND</a>
        </div>
      );
}
 
export default Subscribe