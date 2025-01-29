const TextContainer = ({ children }) => {
    return (
        <div className="flex flex-col w-[500px] justify-center items-start mr-16 relative">
            {children}
        </div>
      );
}
 
export default TextContainer;