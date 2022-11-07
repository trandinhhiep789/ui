import React, { useState, useEffect } from 'react'
import SearchbarDropdown from './SearchbarDropdown'
import SearchbarDropdownMulti from './SearchbarDropdownMulti'
import './Select.css'

interface SelectProps {
    /** width Select */
    widthSelect?: string
    /** defaultValue Select */
    defaultValue?: string
    /** placeholder Select */
    placeholder?: string
    children?: React.ReactNode | string | (() => string)
    /** handleChange log data ra ben ngoai */
    handleChange?: (value: string) => void
}
const defaultOptions: any = []
for (let i = 0; i < 10; i++) {
    defaultOptions.push({ value: `option ${i}`, label: `Option ${i}` })
    defaultOptions.push({ value: `suggesstion ${i}`, label: `Suggesstion ${i}` })
    defaultOptions.push({ value: `advice ${i}`, label: `Advice ${i}` })
}
const Select = ({
    defaultValue = '',
    placeholder = '--Vui lòng chọn--',
    widthSelect = '',
    handleChange = (value: string) => {},
    ...props
}: SelectProps) => {
    const [options, setOptions] = useState([])

    const [optionsMulti, setOptionsMulti] = useState([])
    const [optionsMultiTamp, setOptionsMultiTamp]: any = useState([])

    const onInputChange = (event: { target: { value: any } }) => {
        setOptions(defaultOptions.filter((option: any | any[]) => option.label.includes(event.target.value)))
        if (event.target.value) {
            console.log('event.target.value xuất : ', event.target.value)
            handleChange(event.target.value)
        }
    }

    const onInputChangeMulti = (event: { target: { value: any } }) => {
        const newListOptions = optionsMulti.filter((option: string | any[]) => option != event.target.value)
        setOptionsMulti(newListOptions)
        if (event.target.value) {
            setOptionsMultiTamp((prevState: any) => [...prevState, event.target.value])
        }
        if (event.target.value) {
            handleChange(event.target.value)
        }
    }

    const changeSetOptionsMultiTamp = (value: any) => {
        setOptionsMultiTamp(optionsMultiTamp.filter((option: string | any[]) => option != value))
    }

    return (
        <span {...props}>
            <SearchbarDropdown options={options} onInputChange={onInputChange} placeholder={placeholder} />
            {/* <SearchbarDropdownMulti
                options={optionsMulti}
                listSelected={optionsMultiTamp}
                changeSetOptionsMultiTamp={changeSetOptionsMultiTamp}
                placeholder={placeholder}
                onInputChangeMulti={onInputChangeMulti}
            /> */}
        </span>
    )
}

export default Select
