
/**
 * 
 * @param values 
 * @returns 
 */
export function getRandomVal(values: string | any[]) {
    const index = Math.floor(Math.random() * values.length);
    const fname = values[index];
    return fname;
}