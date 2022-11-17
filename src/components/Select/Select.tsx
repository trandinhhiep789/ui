import React, { useState, useEffect } from 'react'
import SearchbarDropdown from './SearchbarDropdown'
import SearchbarDropdownMulti from './SearchbarDropdownMulti'
import './Select.css'

interface optionsls {
    value: string
    label: string
}

interface SelectProps {
    /** width Select ...px */
    widthSelect?: string
    /** defaultValue Select */
    defaultValue?: string
    /** placeholder Select */
    placeholder?: string
    /** optionsls Select */
    optionsls?: optionsls[]
    /** giới hạn trên một dòng */
    ellipsis?: boolean
    /** chọn nhiều */
    isMulti?: boolean
    /** handleChange log data ra ben ngoai */
    handleChange?: (value: string) => void
    /** handleSearch log data ra ben ngoai */
    handleSearch?: (value: any) => void
}
const defaultOptions: any = []
for (let i = 0; i < 10; i++) {
    defaultOptions.push({ value: `option ${i}`, label: `OptionOptionOptionOptionOptionOptionOptionOptionOption ${i}` })
    defaultOptions.push({ value: `suggesstion ${i}`, label: `Suggesstion ${i}` })
    defaultOptions.push({ value: `advice ${i}`, label: `Advice ${i}` })
}
const Select = ({
    defaultValue = '',
    placeholder = '--Vui lòng chọn--',
    widthSelect = '300px',
    ellipsis = false,
    optionsls = defaultOptions,
    isMulti = false,
    handleChange = (value: string) => {},
    handleSearch = (value: any) => {},
    ...props
}: SelectProps) => {
    /** Danh sách option */
    const [options, setOptions]: any = useState([])

    const [optionsMulti, setOptionsMulti]: any = useState([])

    /*
     *  Single select - START
     */

    /** handleChange log data ra ben ngoai */
    const onInputChange = (event: { target: { value: any } }) => {
        if (event.target.value == undefined) {
            event.target.value = ''
        }
        optionsls &&
            setOptions(
                optionsls.filter((option: optionsls) => option.label.toLowerCase().includes(event.target.value.toLowerCase()))
            )
        if (event.target.value) {
            handleChange(event.target.value)
        }
    }

    /** handleSearch log data ra ben ngoai */
    const onSearch = (value: string) => {
        if (value || value === '') {
            handleSearch(value)
        }
    }

    /*
     *  Single select - END
     */

    /*
     *  Multi select - START
     */

    const onInputChangeMulti = (event: { target: { value: any } }) => {
        if (event.target.value == undefined) {
            event.target.value = ''
        }
        optionsls &&
            setOptionsMulti(
                optionsls.filter((option: optionsls) => option.label.toLowerCase().includes(event.target.value.toLowerCase()))
            )
        if (event.target.value) {
            handleChange(event.target.value)
        }
    }

    /** handleSearch log data ra ben ngoai */
    const onSearchMulti = (value: string[]) => {
        handleSearch(value)
    }

    /*
     *  Multi select - END
     */

    return (
        <div {...props} style={{ width: widthSelect }}>
            {isMulti ? (
                <SearchbarDropdownMulti
                    options={optionsMulti}
                    onInputChangeMulti={onInputChangeMulti}
                    placeholder={placeholder}
                    widthSelect={widthSelect}
                    ellipsis={ellipsis}
                    onSearchMulti={onSearchMulti}
                />
            ) : (
                <SearchbarDropdown
                    options={options}
                    onInputChange={onInputChange}
                    onSearch={onSearch}
                    placeholder={placeholder}
                    widthSelect={widthSelect}
                />
            )}
        </div>
    )
}

export default Select
