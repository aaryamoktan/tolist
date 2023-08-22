import React, { useState } from 'react'
import { AiOutlinePlus,AiOutlineCloseCircle } from "react-icons/ai";
const To = () => {
    const [items, setimtes] = useState("")
    const [finaitems, setfinalitems] = useState([])
    const deleted= (id)=>
    {
        console.log("delete"+id);
        setfinalitems((old)=>
        {
            return old.filter((arrlele,index)=>
            {
                return index!==id
            })
        })
    }
    const add = () => {
        setfinalitems((old) => {
            if (items.length > 0) {
                return [...old, items]
            }
            if (items.length == 0) {
                return [...old]
            }
        })
        setimtes("")
    }
    
    return (
        <>
            <div className='mainTodo'>
                <div className='innerTodo'>
                    <div className='text'>
                        <input type="text" placeholder='Enter The Items ' value={items}
                            onChange={(e) => {
                                setimtes(e.target.value)
                            }}
                        /><button onClick={add}><AiOutlinePlus /></button>
                    </div><br />
                    <div className='list'>
                        {finaitems.map((ele,index) => {
                            var id =index;
                            return <ul><li><button onClick={()=>
                            {
                                deleted(id)
                            }}><AiOutlineCloseCircle/></button>{ele}</li></ul>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default To