import React,{useState} from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

function BtnLikeFunction() {
    const [isLike, setisLike] = useState<boolean>(true);
    const handleClick = () => {
        setisLike(!isLike);
    };
  return (
    <div onClick={handleClick} style={{fontSize:"40px"}}> 
        {isLike ?<AiFillLike/>:<AiOutlineLike/>}
    </div>
  );
}

export default BtnLikeFunction;