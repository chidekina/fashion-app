const Container = ({ children }) => {
    return (
        <section className="px-16 py-8 mb-8 max-md:px-2 md:py-0 max-md:mb-0.5">
            {children}
        </section>
    );
}
 
export default Container;