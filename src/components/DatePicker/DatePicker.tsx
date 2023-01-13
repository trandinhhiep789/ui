import React, { useEffect, useState, useRef } from 'react'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { ButtonProps } from '../Button/Button'
import './DatePicker.css'
import Calendar from './Calendar'
import { format } from 'date-fns'
import vi from 'date-fns/locale/vi'
interface DatePickerProps {
    /** loại date picker */
    picker?: 'week' | 'month' | 'year'
    widthSelect?: string
}

const DatePicker = ({ picker, widthSelect = '', ...props }: DatePickerProps) => {
    const inputRef: any = useRef()
    const ulRef: any = useRef()

    const [currentDate, setCurrentDate] = useState(new Date())
    const [dateChoose, setDateChoose] = useState('')
    const [showDateList, setShowDateList] = useState(false)

    const handleClick = () => {
        if (!showDateList) {
            console.log('abc')
            document.addEventListener('click', handleOutsideClick)
        } else {
            document.removeEventListener('click', handleOutsideClick)
        }

        // setShowDateList(!showDateList)
        setShowDateList(!showDateList)
    }

    const handleOutsideClick = (e: any) => {
        if (inputRef && inputRef.current) {
            if (!inputRef.current.contains(e.target)) {
                handleClick()
            }
        }
    }

    // useEffect(() => {
    //     return document.removeEventListener('click', handleOutsideClick)
    // }, [])

    useEffect(() => {
        const stringDate = format(currentDate, 'dd/MM/yyyy', { locale: vi })
        setDateChoose(stringDate)
    }, [currentDate])

    return (
        <div {...props}>
            <div className="relative cursor-pointer" style={{ width: widthSelect }} ref={inputRef}>
                <input className="inputSelectDate" value={dateChoose} onClick={handleClick} readOnly />
                <svg className="absolute top-2.5 right-2.5 text-gray-400 h-6 w-6">
                    <FontAwesomeIcon icon={faCalendarDays} />
                </svg>

                <div ref={ulRef} className={showDateList ? 'contentDate' : 'contentDateHide'} style={{ width: widthSelect }}>
                    <Calendar value={currentDate} onChange={setCurrentDate} />
                </div>
            </div>
        </div>
    )
}

export default DatePicker
