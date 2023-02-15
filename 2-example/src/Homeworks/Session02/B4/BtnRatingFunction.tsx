import React, { useMemo, useState } from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
function BtnRatingFunction() {
    const [star, setStar] = useState(0);
    const arrDefault = useMemo(() => [1, 2, 3, 4, 5], [])
    const handleClick = (item: number) => {
        setStar(item)
    };
  return (
    <div>
        {arrDefault?.map((item) => (
            <span key={item} onClick = {() => handleClick(item)}>
                {item <= star ? <AiFillStar/> : <AiOutlineStar/>}
            </span>
        ))}
    </div>
  )
}

export default BtnRatingFunction