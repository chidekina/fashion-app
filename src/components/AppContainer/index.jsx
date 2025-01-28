const AppContainer = () => {
    return (
        <div className="mt-32 flex px-28 justify-between max-md:px-2 max-md:mt-12 max-md:bg-[#E6C744]">
          <div className=" w-96 flex flex-col justify-center gap-6 max-md:gap-3">
            <h2 className="font-black text-4xl max-md:text-2xl max-md:text-center">
            DOWNLOAD APP &
            GET THE VOUCHER!
            </h2>
            <p className="text-gray-400 max-md:text-center max-md:text-white">Get 30% off for first transaction using
            Rondovision mobile app for now.</p>
            <div className="flex gap-2 max-md:justify-center">
              <img src="/assets/AppContainer/App-store.png" alt="Banner de download na App Store" className="w-3/4 max-md:w-40 max-md:h-14" />
              <img src="/assets/AppContainer/Google-play.png" alt="Banner de download no Google Play" className="w-3/4 max-md:w-40 max-md:h-14" />
            </div>
          </div>
            <img src="/assets/AppContainer/Cellphone.png" alt="Celular com o aplicativo da loja" className="max-md:hidden" />
        </div>
      );
}
 
export default AppContainer;