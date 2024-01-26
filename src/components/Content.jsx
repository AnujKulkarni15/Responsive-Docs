import Card from "./Card"
import React,{useState,useRef} from "react"


function Content() {

  const ref = useRef(null)

  const data = [{desc: "lorem sdsdsc fsfss ewlpad qwwadad vff sfdwdq.",filesize:"0.9mb",close:false,tag:{isOpen:true,taTitle:"Download Now",tagColor:'green'}},{desc: "lorem sdsdsc fsfss ewlpad qwwadad vff sfdwdq.",filesize:"0.3mb",close:false,tag:{isOpen:true,taTitle:"Download Now",tagColor:'green'}},{desc: "lorem sdsdsc fsfss ewlpad qwwadad vff sfdwdq.",filesize:"4.0mb",close:true,tag:{isOpen:false,taTitle:"Download Now",tagColor:'green'}},{desc: "lorem sdsdsc fsfss ewlpad qwwadad vff sfdwdq.",filesize:"3.0mb",close:false,tag:{isOpen:true,taTitle:"Download Now",tagColor:'green'}},]

  

  return (
      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}              
      </div>
  )
}

export default Content
