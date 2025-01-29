const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
}

const CardContainer = ({ title, list, cols, imageSize }) => {
    return (
        <>
            <div className="relative mb-16 max-md:mb-1 mt-6">
                <div className="inline-flex flex-col relative">
                    <h1 className="font-black text-4xl max-md:text-2xl">
                        {title}
                    </h1>
                    <img
                        src="/assets/Vector 8.png"
                        alt="Vetor"
                        className="w-[90%] z-[-1] absolute top-6 left-12 max-md:w-24 max-md:left-4"
                    />
                </div>
            </div>
            <ul className={`grid ${gridCols[cols] || 'grid-cols-2'} gap-10 max-md:gap-4 max-md:flex-col`}>
                {list.map(item => (
                    <li className="flex-col" key={item.id}>
                        <img src={item.path} alt={item.product} className={imageSize} />
                        <div className="mt-5 flex justify-between items-center max-md:mt-3">
                            <div>
                                <p className="font-medium text-2xl mb-2 max-md:text-xl max-md:font-bold">{item.product}</p>
                                <p className="font-medium text-xl text-gray-500 max-md:hidden">Explore Now</p>
                            </div>
                            <img src="/assets/Arrow.png" alt="Seta para o lado direito" className="h-4 max-md:hidden" />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CardContainer;