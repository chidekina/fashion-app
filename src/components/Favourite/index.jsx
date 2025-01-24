
const Favourite = ({ list }) => {
    return (
        <div className="px-20">
            <div>
                <h1 className="font-black text-[38px] mt-[168px]">
                    Young's Favourite
                </h1>
                <img src="/assets/Vector 8.png" className="relative bottom-12 z-[-10] left-44" />
            </div>
            <ul className="flex gap-12">
                {list.map(item => (
                    <li key={item.id} className="flex flex-col gap-6">
                        <img src={item.path} alt={item.name} />
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-[28px]">
                                    {item.description}
                                </p>
                                <p className="font-medium text-[15px] text-gray-500">Explore Now</p>
                            </div>
                            <img src="/assets/Arrow.png" alt="Seta para o lado direito" className="h-4" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Favourite;