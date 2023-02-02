import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import './DatePicker.css'
import Calendar from './Calendar'
import { format } from 'date-fns'
import vi from 'date-fns/locale/vi'
interface DatePickerProps {
    /** loại date picker */
    picker?: 'week' | 'month' | 'year'
    widthSelect?: string
    /** onChange để callback ra ngoài trả data ra */
    onChange?: (date: Date, dateString: any) => void
}

const DatePicker = ({ picker, widthSelect = '', onChange = event => {}, ...props }: DatePickerProps) => {
    const inputRef: any = useRef()
    const showDateListRef: any = useRef()

    const [currentDate, setCurrentDate] = useState(new Date())
    const [dateChoose, setDateChoose] = useState('')
    const [showDateList, setShowDateList] = useState(false)

    const _setShowDateList = (data: any) => {
        showDateListRef.current = data
        setShowDateList(data)
    }

    const handleClick = () => {
        if (!showDateListRef.current) {
            document.addEventListener('click', handleOutsideClick)
            _setShowDateList(true)
        } else {
            document.removeEventListener('click', handleOutsideClick)
            _setShowDateList(false)
        }
    }

    const handleOutsideClick = (e: any) => {
        if (inputRef && inputRef.current) {
            if (!inputRef.current.contains(e.target)) {
                handleClick()
            }
        }
    }

    const OnchangeCalendar = (date: any, dateString: any) => {
        onChange(date, dateString)
    }

    useEffect(() => {
        const stringDate = format(currentDate, 'dd/MM/yyyy', { locale: vi })
        setDateChoose(stringDate)

        OnchangeCalendar(stringDate, currentDate)
    }, [currentDate])

    return (
        <div {...props}>
            <div className="relative cursor-pointer" style={{ width: widthSelect }} ref={inputRef}>
                <input className="inputSelectDate" value={dateChoose} onClick={handleClick} readOnly />
                <svg className="absolute top-2.5 right-2.5 text-gray-400 h-6 w-6">
                    <FontAwesomeIcon icon={faCalendarDays} />
                </svg>

                {showDateList && (
                    <div
                        className={showDateList ? 'contentDate w-[300px] boxShadowDatePicker' : 'contentDateHide'}
                        style={{ width: widthSelect }}
                    >
                        <Calendar value={currentDate} onChange={setCurrentDate} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default DatePicker
