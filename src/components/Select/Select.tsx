import React, { useState, useEffect } from 'react'
import SearchbarDropdown from './SearchbarDropdown'
import SearchbarDropdownMulti from './SearchbarDropdownMulti'
import './Select.css'

interface SelectProps {
    /** width Select ...px or ...% */
    widthSelect?: string
    /** defaultValue Select */
    defaultValue?: string
    /** placeholder Select */
    placeholder?: string
    /** giới hạn trên một dòng */
    ellipsis?: boolean
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
    widthSelect = '300px',
    ellipsis = false,
    handleChange = (value: string) => {},
    ...props
}: SelectProps) => {
    /** Danh sách option */
    const [options, setOptions] = useState([])

    const [optionsMulti, setOptionsMulti] = useState([])
    const [optionsMultiTamp, setOptionsMultiTamp]: any = useState([])

    /** handleChange log data ra ben ngoai */
    const onInputChange = (event: { target: { value: any } }) => {
        setOptions(defaultOptions.filter((option: any | any[]) => option.label.includes(event.target.value)))
        if (event.target.value) {
            handleChange(event.target.value)
        }
    }

    const onInputChangeMulti = (event: { target: { value: any } }) => {
        if (event.target.value == undefined) {
            event.target.value = ''
        }
        setOptionsMulti(defaultOptions.filter((option: any | any[]) => option.label.includes(event.target.value)))
        if (event.target.value) {
            handleChange(event.target.value)
        }
    }

    const changeSetOptionsMultiTamp = (value: any) => {
        setOptionsMultiTamp(optionsMultiTamp.filter((option: string | any[]) => option != value))
    }

    return (
        <div {...props} style={{ width: widthSelect }}>
            <SearchbarDropdownMulti
                options={optionsMulti}
                onInputChangeMulti={onInputChangeMulti}
                placeholder={placeholder}
                listSelected={optionsMultiTamp}
                changeSetOptionsMultiTamp={changeSetOptionsMultiTamp}
                widthSelect={widthSelect}
                ellipsis={ellipsis}
            />
            <SearchbarDropdown
                options={options}
                onInputChange={onInputChange}
                placeholder={placeholder}
                widthSelect={widthSelect}
            />
        </div>
    )
}

export default Select
