function Description({ header, des, btn, theam }) {

    const WhiteThemeClasses = {
        container: "text-brand-red",
        headerText: "text-white text-[56px] leading-tight", // Reduced size slightly for standard desktop screen balance
        bodyText: "text-white text-[20px] max-w-xl text-justify", // Changed fixed width to max-w-xl
        button: "bg-white font-inter hover:bg-brand-red hover:text-white"
    };

    const BlackThemeClass = {
        container: "text-black",
        headerText: "text-black text-[48px] leading-tight",
        bodyText: "text-black text-[18px] max-w-xl text-justify", // Changed w-[783px] to max-w-xl
        button: "bg-black text-white hover:bg-white hover:text-black"       
    };

    // Notice: Fallback logic handles your "dark" theme check perfectly
    const styles = theam === 'white' ? WhiteThemeClasses : BlackThemeClass;

    return (
        <div className={`p-4 ${styles.container}`}>
            {/* Removed the fixed w-159.25 container width */}
            <div className={`font-bold mb-4 ${styles.headerText}`}>
                <h2>{header}</h2>
            </div>
            
            {/* Removed the hardcoded w-[783px] and w-146.5 width classes */}
            <div className={`mb-6 ${styles.bodyText}`}>
                <p>{des}</p>
            </div>
            
            <div className="w-fit mt-4">
                <button 
                    onClick={btn} 
                    className={`w-40 h-12 cursor-pointer flex items-center justify-center rounded-full text-[18px] font-medium transition-all duration-500 ease-in-out ${styles.button}`}
                >
                    Explore
                </button>
            </div>
        </div>                                      
    );
}

export default Description;