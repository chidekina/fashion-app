import { FiMenu } from "react-icons/fi";

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
                <FiMenu className="w-7 h-14 not-last-of-type:inline-flex items-center gap-x-1 lg:hidden" aria-expanded="false" />
                <div className="absolute left-3/5 z-10 mt-5 flex w-screen max-w-64 max-h-56 top-10 -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                        <div className="p-4">
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
            <a href="#" className="bg-black h-8 py-2 px-3 w-30 rounded-md max-md:w-16 max-md:h-7 md:py-0.5 max-md:px-1.5">
                <p className="text-white text-center text-lg max-md:text-xs">SIGN UP</p>
            </a>
            </div>
        </header >
    );
}

export default Header;