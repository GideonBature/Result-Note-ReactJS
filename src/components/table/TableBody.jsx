import React from 'react'
import TableRow from './TableRow.jsx'
import Gideon from '/src/assets/gideon.jpeg'


export default function TableBody({contents, headings}) {
    return (
        <tbody className='bg-white divide-y divide-gray-200'>
            <tr className="hover:bg-secondaryColor">
        </tr>
        {
          contents.map(
            content => <TableRow columns={content} key={content.id} />
          )
        }
            
        </tbody>
    );
};