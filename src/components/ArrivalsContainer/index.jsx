const ArrivalsContainer = ({ list }) => {
    return (
        <div className="px-20 py-16 max-md:px-2 max-md:py-5">
            <div className="mb-16 max-md:mb-1">
                <h1 className="font-black text-4xl max-md:text-2xl">
                    NEW ARRIVALS
                </h1>
                <img src="/assets/Vector 8.png" alt="Vetor" className="relative top-[-3.2rem] z-[-1] left-25 max-md:w-24 max-md:top-[-2rem] max-md:left-16" />
            </div>
            <ul className="flex gap-14 max-md:gap-4 max-md:flex-col">
                {list.map(item => (
                    <li className="flex-col" key={item.id}>
                        <img src={item.path} alt={item.product} />
                        <div className="mt-5 flex justify-between items-center max-md:mt-3">
                            <div>
                                <p className="font-medium text-2xl mb-2 max-md:text-xl max-md:font-bold">{item.product}</p>
                                <p className="font-medium text-xl text-gray-500 max-md:hidden">Explore Now</p>
                            </div>
                            <img src="/assets/Arrow.png" alt="Seta para o lado direito" className="h-4 max-md:hidden"/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArrivalsContainer;