const Brands = ({ brands }) => {
    return ( 
        <div className="bg-[#E6C744] w-full h-16 flex px-36 py-24 justify-evenly max-md:h-2 max-md:px-4 max-md:py-8">
            <ul className="flex gap-24 items-center max-md:gap-4">
            {brands.map(logo =>(
                <li key={logo.id}>
                <img className="h-12 max-md:max-h-4 max-md:max-w-16" src={logo.path} alt={logo.name} key={logo.id}/>
                </li>
            ))}
            </ul>
        </div>
     );
}
 
export default Brands;