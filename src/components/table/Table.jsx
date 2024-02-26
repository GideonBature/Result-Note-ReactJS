import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default function Table({headings, contents}) {
  return (
    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <TableHead headings={headings}/>
      <TableBody contents={contents} />
    </table>
  )
}

// src={Gideon} name="Gideon Bature" id={2034} email="gideon@email.com" class_name="SS1" gender="male" bulk={true}