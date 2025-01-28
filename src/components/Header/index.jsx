
const Header = ({ list }) => {
    return (
        <header className="flex justify-between">
            <div className="flex gap-3 items-center">
                <img className="max-h-8 max-md:max-h-6" src="/assets/fashion-logo.png" alt="" />
                <h1 className="text-4xl font-black max-md:text-2xl">FASHION</h1>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex gap-4 w-full max-lg:hidden">
                    {list.map(item => (
                        <p className="text-lg font-medium max-md:text-sm" key={item}>
                            {item}
                        </p>
                    ))}
                </div>
               
                <a href="#" className="bg-black h-8 py-2 px-3 w-30 rounded-md max-md:w-16 max-md:h-7 md:py-0.5 max-md:px-1.5">
                    <p className="text-white text-center text-lg max-md:text-xs">SIGN UP</p>
                </a>
            </div>
        </header >
    );
}

export default Header;