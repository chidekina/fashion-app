
const Favourite = ({ list }) => {
    return (
        <div className="px-20 max-md:px-2">
            <div>
                <h1 className="font-black text-4xl mt-[168px] max-md:text-3xl max-md:mt-8">
                    Young's Favourite
                </h1>
                <img src="/assets/Vector 8.png" className="relative bottom-12 z-[-10] left-44 max-md:left-28" />
            </div>
            <ul className="flex gap-12 max-md:gap-10 max-md:flex-col">
                {list.map(item => (
                    <li key={item.id} className="flex flex-col gap-6 max-md:gap-2">
                        <img src={item.path} alt={item.name} />
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-2xl max-md:text-3xl max-md:font-bold">
                                    {item.description}
                                </p>
                                <p className="font-medium text-sm text-gray-500 max-md:hidden">Explore Now</p>
                            </div>
                            <img src="/assets/Arrow.png" alt="Seta para o lado direito" className="h-4 max-md:hidden" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Favourite;