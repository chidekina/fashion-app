const AppContainer = () => {
    return (
        <div className="mt-32 flex px-28 justify-between">
          <div className=" w-96 flex flex-col justify-center gap-6">
            <h2 className="font-black text-[36px]">
            DOWNLOAD APP &
            GET THE VOUCHER!
            </h2>
            <p className="text-gray-400">Get 30% off for first transaction using
            Rondovision mobile app for now.</p>
            <div className="flex gap-2">
              <img src="/assets/AppContainer/App-store.png" alt="Banner de download na App Store" className="w-3/4" />
              <img src="/assets/AppContainer/Google-play.png" alt="Banner de download no Google Play" className="w-3/4" />
            </div>
          </div>
            <img src="/assets/AppContainer/Cellphone.png" alt="Celular com o aplicativo da loja" />
        </div>
      );
}
 
export default AppContainer;