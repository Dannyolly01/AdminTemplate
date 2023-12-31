export function getCurrentDateTime(){
    const date = new Date();
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`+' '+`${date.getHours()}:${date.getMinutes()}`
}

export function getCurrentDate(){
  const date = new Date();
  const month =  date.getMonth() + 1 < 10 ? '0' + String(date.getMonth()+1) :String(date.getMonth()+1)
  const day = date.getDate()  < 10 ? '0' + String(date.getDate()) :String(date.getDate())
  return `${date.getFullYear()}-${month}-${day}`
}

export function getFullTime(date:Date){
    date = new Date(date)
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`+' '+`${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`
}

export function getFormatDate(date:Date){

    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} `
}

/**
 * @description 計算日期...
 * @explain    暫時只返回X月X日
 */

 export const calculateDate = (date: Date | undefined ) => {
    if (date !== undefined) {
        const currentTime = new Date()
        const testDate = new Date(date)
        const drr = Math.abs(currentTime.getTime() - testDate.getTime());
        // @ts-ignore
        const day = parseInt(drr / (24 * 60 * 60 * 1000));
        // @ts-ignore
        const hours = parseInt(drr % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        // @ts-ignore
        const minutes = parseInt(drr % (60 * 60 * 1000) / (60 * 1000));
        // @ts-ignore
        const seconds = parseInt(drr % (60 * 1000) / 1000);
        const res = "相差" + day + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";

        //console.log(res);
        //console.log(`${currentTime.getMonth()+1}月${currentTime.getDate()}日`);

        return `${testDate.getMonth() + 1}月${testDate.getDate()}日`
    }
    return undefined
}
