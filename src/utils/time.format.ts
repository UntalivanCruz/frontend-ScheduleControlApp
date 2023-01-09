import dayjs from 'dayjs';

export const timeFormat = (time:string)=>{
    return dayjs().set('hour', Number(String(time).substring(0, 2))).set('minute', Number(String(time).substring(3, 5))).set('second', Number(String(time).substring(6, 8))).format('hh:mm A')
}