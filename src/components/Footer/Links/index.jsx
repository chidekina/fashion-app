const Links = (data) => {
    return (
        <>

            {data.list.map(item => (
                <div className="flex flex-col gap-3 text-[20px]">
                    {item.map((subItem, subIndex) => (
                        <ul className=" first:text-[#D9D9D9]">
                            <li key={subIndex}>
                                {subItem}
                            </li>
                        </ul>
                    ))}
                </div>
            ))}

        </>
    );
}

export default Links;