export function average(values: number[]) { return values.length ? values.reduce((a,b)=>a+b,0)/values.length : 0; }
export function formatRating(n:number) { return n.toFixed(2); }
export const statusLabel = (status:string) => ({ONGOING:"Ongoing",COMPLETED:"Completed",HIATUS:"Hiatus",UPCOMING:"Upcoming"}[status] ?? status);
