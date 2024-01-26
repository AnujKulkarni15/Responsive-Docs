import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdDownloading } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 w-60 h-72 bg-zinc-700 rounded-[30px] text-white py-10 px-8 overflow-hidden">
        <IoDocumentTextSharp />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-8 py-3 mb-3'> 
            <h5>{data.filesize}</h5>
            <span className='w-5 h-5 rounded-full flex items-center justify-center'>
              {data.close ? <GrFormClose size={20}/> : <MdDownloading size={20} />}
            </span>
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.taTitle}</h3>
              </div>
             )}
        </div>
      </motion.div>
  );
}

export default Card
