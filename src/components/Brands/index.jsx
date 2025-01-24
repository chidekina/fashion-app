const Brands = ({ brands }) => {
    return ( 
        <div className="bg-[#E6C744] w-full h-16 flex px-36 py-24 justify-evenly">
            <ul className="flex gap-16 items-center">
            {brands.map(logo =>(
                <li key={logo.id}>
                <img className="h-12" src={logo.path} alt={logo.name} key={logo.id}/>
                </li>
            ))}
            </ul>
        </div>
     );
}
 
export default Brands;