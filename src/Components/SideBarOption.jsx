import React from 'react';


const SideBarOption = ({Icon, tile, number})=>{
    return(
        <div className="flex h-10 py-3  font-bold mt-1 text-gray-500 hover:bg-red-400 hover:text-yellow-50">
            <Icon/>
            <h3 className="flex-1 px-5 font-normal hover:bg-red-400 hover:text-yellow-50 hover:rounded-e-lg">{tile}</h3>
        </div>
    )
}

export default SideBarOption;