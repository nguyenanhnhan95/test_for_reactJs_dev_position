import { memo, useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux";

function TimerGame(props) {
    const { numberPoint } = props;
    const [second, setSecond] = useState(0);
    const [millisecond, setMillisecond] = useState(0);
    const { start, statusGame } = useSelector(state => state.point)
    const updateTimer = useCallback(() => {
        setMillisecond(prevMillisecond => {
            if (prevMillisecond === 9) {
                setSecond(prevSecond => prevSecond + 1);
                return 0;
            }
            return prevMillisecond + 1;
        });
    }, []);
    useEffect(() => {
        if ( numberPoint === 0) {
            setSecond(0);
            setMillisecond(0);
        } else {
            if (start !== null && statusGame === null) {
                setSecond(0);
                setMillisecond(0);
                const timer = setInterval(updateTimer, 100);
                return () => clearInterval(timer);
            }
        }


    }, [start, updateTimer, statusGame]);
    return (
        <div className="flex">
            <div className='text-left w-[150px] font-medium'>Time</div>
            {second}:{millisecond}
        </div>
    )
}
export default memo(TimerGame)