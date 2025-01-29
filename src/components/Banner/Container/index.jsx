const bgColors = {
    gradient: "bg-gradient-to-b from-[#F9DF56] from-0% to-[#E0C340] to-100%",
    neutral: "bg-[#F4F6F5]",
}

const Container = ({ children, bgColor }) => {
    return (
        <div className={`${bgColors[bgColor]} flex max-md:px-2 relative`}>
            {children}
        </div>
      );
}
 
export default Container;