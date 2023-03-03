import {MutableRefObject, useEffect, useMemo, useState} from "react";

export const useBreakpoints = <T,> (ref: MutableRefObject<any>, breakpoints: T[]) => {
    const [breakpoint, setBreakPoint] = useState<T>()
    const sortedBreakPoints = useMemo(() => [...breakpoints].sort((a, b) =>  Number(a) - Number(b)).reverse(), [breakpoints])

    const observer = useMemo(() => new ResizeObserver((args) => {
        const width = Math.round(args[0].contentRect.width)
        for (let [index, item] of sortedBreakPoints.entries()) {
            if (item <= width  || index === sortedBreakPoints.length - 1) {
                setBreakPoint(item)
                break
            }
        }

    }),[ref.current])
    
    useEffect(()=> {
        if (ref.current){
            observer.observe(ref.current)
        }
        return ()=> {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref.current])

    return breakpoint
}
