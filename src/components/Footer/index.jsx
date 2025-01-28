import Links from "./Links";

const Footer = ({ socialNet, footerLists }) => {
    return (
        <footer className="bg-black px-20 py-24 flex text-[#8E8E8E] justify-between max-md:flex-col max-md:px-2 max-md:text-center">
            <div className="flex flex-col gap-7">
                <h4 className="font-black text-[36px] text-white">FASHION</h4>
                <p>Complete your style with awesome<br></br> clothes from us.</p>
                <ul className="flex gap-3 max-md:justify-center">
                    {socialNet.map(logo => (
                        <li key={logo.id}>
                            <img src={logo.path} alt={logo.name} className="w-12"/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-32 max-md:gap-1 max-md:mt-10 max-md:justify-evenly max-md:text-start">
                {footerLists.map((list, index) => (
                    <Links key={index } list={list} />
                ))}
            </div>
        </footer>
    );
}
 
export default Footer;