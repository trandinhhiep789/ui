import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from 'date-fns'
import vi from 'date-fns/locale/vi'
import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

import Cell from './Cell'

// const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weeks = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']

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
    }

    return (
        <div className="w-[300px]">
            <div className="mt-1 grid grid-cols-7 items-center justify-center text-center">
                <Cell onClick={prevYear}>
                    <svg className="text-gray-400 h-4 w-4">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </svg>
                </Cell>
                <Cell onClick={prevMonth}>
                    <svg className="text-gray-400 h-4 w-4">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </svg>
                </Cell>

                <div className={clsx('col-span-3 text-base h-10 flex items-center justify-center select-none transition-colors')}>
                    {format(value, 'LLLL yyyy', { locale: vi })}
                </div>

                <Cell onClick={prevMonth}>
                    <svg className="text-gray-400 h-4 w-4">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </svg>
                </Cell>
                <Cell onClick={nextYear}>
                    <svg className="text-gray-400 h-4 w-4">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </svg>
                </Cell>

                {weeks.map((week, index) => (
                    <Cell key={index} className="text-sm uppercase">
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
                            className="text-sm"
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
