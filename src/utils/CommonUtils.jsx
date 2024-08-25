export function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
export function addNewPointPosition(width,height){
    return {
        left:getRandomArbitrary(0,width-40),
        top:getRandomArbitrary(0,height-40)
    }
}
/**
* DEBOUNCE
*/
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};