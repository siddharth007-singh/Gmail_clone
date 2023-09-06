import React from 'react';


const SideBarOption = ({Icon, tile})=>{
    return(
        <div className={`flex h-10 py-3 p-3  font-bold mt-1 text-gray-500 hover:bg-red-500 hover:text-white cursor-pointer hover:rounded-e-lg`}>
            <Icon className="hover:rounded-e-lg"/>
            <h3 className="flex-1 px-5 font-normal hover:bg-red-500 hover:text-white hover:rounded-e-lg">{tile}</h3>
        </div>
    )
}

export default SideBarOption;