
function ProductImg({image,x,y}){


    return (
            <div style={{backgroundImage: `url(${image})`}}
            className=" w-150 h-150 bg-contain bg-center bg-no-repeat left">               
            </div>
    )
}

export default ProductImg;