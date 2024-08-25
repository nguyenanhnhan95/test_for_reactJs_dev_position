
import { memo, useCallback, useMemo, useState } from "react"
import { validation } from "../utils/validation"
import { debounce } from "../utils/CommonUtils";


function InputPoint(props) {
    const { setNumberPoint } = props;
    const handelSetNumberPoint = useCallback((numberPoint) => {
        if (!isNaN(numberPoint)) {
            if (numberPoint > 100000) {
                alert("Bạn nhập số quá lớn")
            } else {
                setNumberPoint(numberPoint)
            }

        }
    }, [setNumberPoint])
    const debouncedHandleInputPoint = useMemo(() => debounce(handelSetNumberPoint, 500), [handelSetNumberPoint]);
    return (
        <input
            className={`border border-2 pl-[5px] rounded text-black  border-neutral-400 focus:border-[#0693e3]  outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
            onKeyDown={(event) => validation.isNumberKey(event)}
            onChange={(event) => debouncedHandleInputPoint(event.target.value * 1)}
            type="number"
        />
    )
}
export default memo(InputPoint)