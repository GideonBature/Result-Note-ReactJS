import React from 'react'

export default function TableRow({src, name, id, email, class_name, gender, bulk, columns}) {
    return (
        <tr className="hover:bg-secondaryColor">
            {
                Object.keys(columns).map((column, index) => (
                    column === 'details' ? (
                        <td className="px-2 py-2 whitespace-nowrap" key={index}>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-6 w-6">
                                    <img className="h-5.5 w-6 rounded-full" src={columns[column].src} alt="" />
                                </div>
                                <div className="ml-2">
                                    <div className="text-xs font-normal text-black">
                                        {columns[column].name}
                                    </div>
                                </div>
                            </div>
                        </td>
                    ) : column === 'bulk' ? (
                        <td className="px-2 py-4 whitespace-nowrap font-normal text-black text-xs" key={index}>
                            <input type="checkbox" value={columns[column]}/>
                        </td>
                    ): (
                        <td className="px-2 py-4 whitespace-nowrap text-xs font-normal text-black" key={index}>
                            {columns[column]}
                        </td>
                    )
                ))
            }

        {/* 
        //     <td className="px-2 py-4 whitespace-nowrap">
        //         <div className="text-xs font-normal text-black">{id}</div>
        //     </td>
        //     <td className="px-2 py-4 whitespace-nowrap text-xs font-normal text-black">
        //         {email}
        //     </td>
        //     <td className="px-2 py-4 whitespace-nowrap font-normal text-black text-xs">
        //         {class_name}
        //     </td>
        //     <td className="px-2 py-4 whitespace-nowrap font-normal text-black text-xs">
        //         {gender}
        //     </td>
        */}
        </tr>
    )
}