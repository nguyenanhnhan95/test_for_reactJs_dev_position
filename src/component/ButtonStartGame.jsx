import { memo, useCallback, useEffect } from "react"
import { validation } from "../utils/validation";
import { addNewPointPosition } from "../utils/CommonUtils";
import { useDispatch, useSelector } from "react-redux";
import { changeStart, changeStatusGame, initialPoints } from "../redux/slice/pointSlice";

function ButtonStartGame(props) {
  const { numberPoint, height, width } = props;
  const { start } = useSelector(state => state.point)
  const dispatch = useDispatch();
  const handleActivePoints = useCallback(() => {
    if (validation.isNumber(numberPoint)) {
      console.log(numberPoint)
      let newPoint = [];
      for (let index = 0; index < numberPoint; ++index) {
        newPoint.push({ ...addNewPointPosition(width, height), index: index + 1 })
      }
      dispatch(initialPoints(newPoint))
    }
  }, [start, numberPoint, width, height, dispatch])
  const handleSetStart = useCallback(() => {
    if (numberPoint !== 0) {
      if (start === null) {
        dispatch(changeStart(true))
      } else {
        dispatch(changeStart(!start))
      }
      handleActivePoints()
      dispatch(changeStatusGame(null))
    }

  }, [start, handleActivePoints, dispatch]);

  return (
    <button
      type="button"
      onClick={handleSetStart}
      className="flex justify-center bg-slate-200 border-2 pl-[5px] rounded font-medium text-black border-neutral-400 w-24 hover:cursor-auto focus:bg-slate-300 focus:outline-none"
    >
      {start === null ? "Play" : "Restart"}
    </button>
  );
}
export default memo(ButtonStartGame)