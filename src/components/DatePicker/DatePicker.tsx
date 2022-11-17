import React from 'react'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { ButtonProps } from '../Button/Button'
import './DatePicker.css'

interface DatePickerProps {
    /** loại alert */
    typeAlert?: 'default' | 'with-content'
}

const DatePicker = ({ typeAlert = 'default', ...props }: DatePickerProps) => {
    return (
        <div {...props}>
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday"></input>
        </div>
    )
}

export default DatePicker
