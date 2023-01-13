import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from 'date-fns'
import vi from 'date-fns/locale/vi'
import React from 'react'

import Cell from './Cell'

// const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weeks = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']

type Props = {
    value?: Date
    onChange: (date: Date) => void
}

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
    const startDate = startOfMonth(value)
    const endDate = endOfMonth(value)
    const numDays = differenceInDays(endDate, startDate) + 1

    const prefixDays = startDate.getDay()
    const suffixDays = 6 - endDate.getDay()

    const prevMonth = () => {
        onChange(sub(value, { months: 1 }))
    }
    const nextMonth = () => {
        onChange(add(value, { months: 1 }))
    }
    const prevYear = () => {
        onChange(sub(value, { years: 1 }))
    }
    const nextYear = () => {
        onChange(add(value, { years: 1 }))
    }

    const handleClickDate = (index: number, dateString: any) => {
        const date = setDate(value, index)
        onChange(date)
        console.log('dateString ', dateString)
    }

    return (
        <div className="w-[400px]" style={{ margin: '0 auto' }}>
            <div className="grid grid-cols-7 items-center justify-center text-center">
                <Cell onClick={prevYear}>{'<<'}</Cell>
                <Cell onClick={prevMonth}>{'<'}</Cell>
                <Cell className="col-span-3 font-bold">{format(value, 'LLLL yyyy', { locale: vi })}</Cell>
                <Cell onClick={nextMonth}>{'>'}</Cell>
                <Cell onClick={nextYear}>{'>>'}</Cell>

                {weeks.map((week, index) => (
                    <Cell key={index} className="text-xs font-bold uppercase">
                        {week}
                    </Cell>
                ))}

                {Array.from({ length: prefixDays }).map((_, index) => (
                    <Cell key={index} />
                ))}

                {Array.from({ length: numDays }).map((_, index) => {
                    const date = index + 1
                    const isCurrentDate = date === value.getDate()

                    return (
                        <Cell
                            key={date}
                            isActive={isCurrentDate}
                            onClick={() => {
                                handleClickDate(date, value)
                            }}
                        >
                            {date}
                        </Cell>
                    )
                })}

                {Array.from({ length: suffixDays }).map((_, index) => (
                    <Cell key={index} />
                ))}
            </div>
        </div>
    )
}

export default Calendar
