const Header = ({ list }) => {
    return (
        <header className="flex justify-between">
            <div className="flex gap-3 items-center">
                <img className="max-h-8" src="/assets/fashion-logo.png" alt="" />
                <h1 className="text-4xl font-black">FASHION</h1>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex gap-4 w-full">
                    {list.map(item => (
                        <p className="text-lg font-medium" key={item}>
                            {item}
                        </p>
                    ))}
                </div>
                <a href="#" className="bg-black py-2 px-3 w-28 rounded-md">
                    <p className="text-white text-lg">SIGN UP</p>
                </a>
            </div>
        </header>
    );
}

export default Header;