import { memo } from "react";
import { useSelector } from "react-redux";

function TitleStatusGame() {
    const { statusGame } = useSelector(state=>state.point);
    return (
        <h2 className={`text-left font-bold text-lg ${statusGame!==null?statusGame===true?'text-green-600':'text-rose-600':''}`}>
            {statusGame === null ? 'LETS PLAY' : statusGame === true ? 'ALL CLEARED' : 'GAME OVER'}
        </h2>
    )
}
export default memo(TitleStatusGame)