import { memo, useCallback } from "react"
import { useDispatch } from "react-redux";
import { hanldeAnimationPoint } from "../redux/slice/pointSlice";

function Point(props) {
    const { point, left, top,handlePointSelected } = props;
    const dispatch = useDispatch();
    const handleOnClick=useCallback((index)=>{
        handlePointSelected(point)
        dispatch(hanldeAnimationPoint(index))
    },[dispatch,hanldeAnimationPoint,handlePointSelected])
    return (
        <div className={`absolute rounded-full border-gray-950 border-2  bg-white 
            w-[40px] h-[40px] flex justify-center items-center font-bold ${point?.animation===true ? 'animate-skeletonLoading':''} `}
            style={{
                left: `${left}px`,
                top: `${top}px`,
                zIndex: `${2147483647 - point.index}`
            }}
            onClick={()=>handleOnClick(point.index)}
        >
            {point.index}
        </div>
    )
}
export default memo(Point)