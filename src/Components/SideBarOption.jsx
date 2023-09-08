import React from 'react';


const SideBarOption = ({Icon, tile})=>{
    return(
        <div className={`flex h-10 py-3 font-semibold mt-1 text-gray-500 hover:bg-red-500 hover:text-white cursor-pointer hover:rounded-e-lg`}>
            <Icon className="hover:rounded-e-lg"/>
            <h3 className="px-3">{tile}</h3>
        </div>
    )
}

export default SideBarOption;