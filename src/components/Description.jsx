
function Description({header,des,btn,theam}){

    const WhiteThemeClasses = {
        container: "text-brand-red",
        headerText: "text-white text-[72px]",
        bodyText: "text-white text-[26px] w-146.5",
        button:"bg-white font-inter hover:bg-brand-red hover:text-white "
    };
    const BlackThemeClass ={
        container: "text-black",
        headerText: "text-black text-[48px]",
        bodyText: "text-black text-[24px] w-[783px] text-justify",
        button: "bg-black text-white hover:bg-white hover:text-black"       
    };


    const styles= theam==='white'? WhiteThemeClasses:BlackThemeClass;


    return (<>
            <div className={`p-8 ${styles.container}`}>
                <div className={`w-159.25 font-bold ${styles.headerText}`}>
                    <h2>{header}</h2>
                </div>
                <div className={`p-2  ${styles.bodyText}`}>
                    <p>{des}</p>
                </div>
                
                <div className="w-fit mt-4">
                    <button 
                        onClick={btn} 
                        className={`p-px w-45.5 h-16.5 cursor-pointer flex items-center justify-center rounded-3xl text-[24px] transition-all duration-500 ease-in-out ${styles.button}`}
                    >
                        Explore
                    </button>
                </div>
            </div>                              
            
    </>);
}

export default Description;
