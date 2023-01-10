import dayjs from 'dayjs'

export const TimeFormat = (time: string) =>
    dayjs().set('hour', Number(String(time).substring(0, 2))).set('minute', Number(String(time).substring(3, 5))).set('second', Number(String(time).substring(6, 8))).format('hh:mm A')

export const TimeFormatSave = (time: any) =>
    dayjs(time).format('HH:mm:ss')

export const TimeFormatRange = (time: string) =>
    dayjs().set('hour', Number(String(time).substring(0, 2))).set('minute', Number(String(time).substring(3, 5))).set('second', Number(String(time).substring(6, 8)))

export const DateFormat = (date: string) =>
    dayjs(date).toISOString()

export const DateNow = (): string => dayjs().toISOString()

export const TimeNow = (): string => dayjs().format('HH:mm:ss')

export const TruncateDate = (date: string): string => dayjs(date).format('YYYY-MM-DD')

export const DateEqual = (d1: string, d2: string) =>
    dayjs(DateFormat(d1)).diff(dayjs(DateFormat(d2)), 'day') === 0 ? true : false;

export const DayNow = () => dayjs().day();