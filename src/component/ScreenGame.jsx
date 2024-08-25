import { Fragment, memo, useCallback, useEffect, useState } from "react"

import Point from "./Point"
import { useDispatch, useSelector } from "react-redux";
import { addPointSelected, changeStatusGame, removePoint } from "../redux/slice/pointSlice";

function ScreenGame(props) {
    const { boxGameRef } = props;
    const { points, pointSelected,statusGame } = useSelector(state => state.point)
    const dispatch = useDispatch();

    const handlePointSelected = useCallback((point) => {
        if (!Array.isArray(points)|| statusGame===false) return;
        const isPointSelected = pointSelected !== null;
        const lastSelectedPointIndex = isPointSelected ? pointSelected[pointSelected.length - 1] : null;
        const isPointInPoints = points.some(each => each.index === point.index);

        if (!isPointSelected) {
            if (points[0].index !== point?.index) {
                dispatch(changeStatusGame(false));
            } else if (isPointInPoints) {
                dispatch(addPointSelected(point.index));
                setTimeout(() => {
                    dispatch(removePoint(point));
                }, 1000);
            }
        } else {
            if (lastSelectedPointIndex === point.index) return;

            if (lastSelectedPointIndex !== point.index - 1 || !isPointInPoints) {
                dispatch(changeStatusGame(false));
            } else {
                if (isPointInPoints) {
                    dispatch(addPointSelected(point.index));
                    setTimeout(() => {

                        dispatch(removePoint(point));
                    }, 1000);
                }
            }
        }
    }, [points, pointSelected,statusGame]);

    return (
        <div className='border-2 border-black h-[500px]'>
            <div className='relative w-full h-full p-[20px] ' ref={boxGameRef}>
                {points && points.map((each, index) => (
                    <Fragment key={index}  >
                        <Point left={each.left} top={each.top} point={each} handlePointSelected={handlePointSelected} />
                    </Fragment>

                ))}

            </div>
        </div>
    )
}
export default memo(ScreenGame)