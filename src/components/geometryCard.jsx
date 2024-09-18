import GeometryCategoryCard from "./geometryCategoryCard"

function GeometryCard({title, button1, button2}){

    return(
        <div className="w-1/5 h-96 bg-white rounded-lg px-7 shadow-2xl">
            <div className="w-full h-9 bg-gray-900 rounded-lg">
                <h1 className="text-center text-white font-bold text-lg mt-2 flex items-center justify-center">{title}</h1>
                <div className="w-full flex flex-col mt-24 gap-5">
                    <div className="w-full shadow-2xl rounded-3xl">
                        <GeometryCategoryCard><button className="w-full h-20">{button1}</button></GeometryCategoryCard>
                    </div>
                    <div className="w-full shadow-2xl rounded-3xl">
                        <GeometryCategoryCard><button className="w-full h-20">{button2}</button></GeometryCategoryCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeometryCard