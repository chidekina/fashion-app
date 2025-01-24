const ArrivalsContainer = ({ list }) => {
    return (
        <div className="px-20 py-16">
            <div className="mb-16">
                <h1 className="font-black text-4xl">
                    NEW ARRIVALS
                </h1>
                <img src="/assets/Vector 8.png" alt="Vetor" className="absolute mt-[-48px] z-[-1] ml-24" />
            </div>
            <ul className="flex gap-14">
                {list.map(item => (
                    <li className="flex-col" key={item.id}>
                        <img src={item.path} alt={item.product} />
                        <div className="mt-5 flex justify-between items-center">
                            <div>
                                <p className="font-medium text-[22px] mb-2">{item.product}</p>
                                <p className="font-medium text-[15px] text-gray-500">Explore Now</p>
                            </div>
                            <img src="/assets/Arrow.png" alt="Seta para o lado direito" className="h-4"/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArrivalsContainer;