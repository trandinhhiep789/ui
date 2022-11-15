import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faXmark, faMinus } from '@fortawesome/free-solid-svg-icons'

import './Select.css'

interface SearchbarDropdownMultiProps {
    /** Danh sách option */
    options?: Array<any>
    /** Danh sách selected option */
    listSelected?: Array<any>
    /** onChange option */
    onInputChangeMulti?: (e: any) => void
    /** placeholder */
    placeholder?: string
    /** width Select ...px or ...% */
    widthSelect?: string
    /** giới hạn trên một dòng */
    ellipsis?: boolean
    changeSetOptionsMultiTamp?: (value: any) => void
}

const SearchbarDropdownMulti = ({
    options = [],
    onInputChangeMulti = event => {},
    changeSetOptionsMultiTamp = value => {},
    placeholder = '',
    listSelected = [],
    widthSelect = '',
    ellipsis = false,
    ...props
}: SearchbarDropdownMultiProps) => {
    const ulRef: any = useRef()
    const inputRef: any = useRef()
    const inputBorderRef: any = useRef()

    const [value, setValue] = useState('')
    const [listOptionSelected, setlistOptionSelected]: any = useState([])

    useEffect(() => {
        inputBorderRef.current.addEventListener('click', (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            inputRef.current.focus()
            event.stopPropagation()
            ulRef.current.className = 'contentSelectMulti'
            onInputChangeMulti(event)
        })
        document.addEventListener('click', event => {
            if (ulRef && ulRef.current && ulRef.current.className) {
                ulRef.current.className = 'contentSelectHide'
            }
        })
    }, [])

    const onSelectEachOption = (item: any) => {
        setlistOptionSelected([...listOptionSelected, item])

        inputRef.current.value = ''
    }

    const onDeleteSelectEachOption = (item: any) => {
        setlistOptionSelected(listOptionSelected.filter((option: any) => option.value != item.value))
    }
    console.log(parseInt('40px'.replace(/px/, '')) + 60 + 'px')
    return (
        <div {...props} style={{ width: widthSelect }}>
            <div className="cursor-pointer inputSelectMul">
                <div ref={inputBorderRef} className="classNameToClickOpenListOption"></div>
                <div className="divFlexContentInputMulti">
                    {listOptionSelected &&
                        listOptionSelected.map((item: any, index: any) => (
                            <div
                                key={index}
                                className="tagDefaultInSelect smallTag relative"
                                style={{ maxWidth: (parseInt(widthSelect.replace(/px/, '')) * 60) / 100 + 'px' }}
                            >
                                {item.label}&ensp;&nbsp;&nbsp;
                                <span
                                    className="mt-0.5 p-1 absolute top-0 right-0 hover:bg-rose-400 rounded"
                                    onClick={() => onDeleteSelectEachOption(item)}
                                    style={{ zIndex: '1' }}
                                >
                                    <svg className="h-3 w-3">
                                        <FontAwesomeIcon icon={faXmark} />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    <div
                        className="divInputMulti"
                        data-value={listOptionSelected.length > 0 ? value : value == '' ? placeholder : value}
                    >
                        <input
                            id="search-bar"
                            type="text"
                            className="inputSelectMulti"
                            placeholder={placeholder}
                            ref={inputRef}
                            onChange={e => {
                                onInputChangeMulti(e)
                                setValue(e.target.value)
                            }}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                            aria-autocomplete="list"
                            role="combobox"
                            autoCapitalize="none"
                        />
                    </div>
                </div>

                {listOptionSelected && listOptionSelected.length > 0 ? (
                    <div className="flex items-center justify-center">
                        <svg
                            className="text-gray-300 h-4 w-4 mr-2 hover:text-gray-400"
                            style={{ zIndex: '1' }}
                            onClick={() => setlistOptionSelected([])}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </svg>
                    </div>
                ) : (
                    ''
                )}

                <div className="flex items-center justify-center border-l-2">
                    <svg className="text-gray-300 h-4 w-4 ml-2">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </svg>
                </div>
            </div>

            <div className="relative w-full">
                {/* list option */}
                <div id="results" style={{ width: widthSelect }} ref={ulRef}>
                    {options.map((option: any, index: any) => {
                        if (listOptionSelected && listOptionSelected.length > 0) {
                            const isSelected = listOptionSelected.some((currentValue: any) => currentValue.value === option.value)

                            if (isSelected) {
                                return <div key={index}></div>
                            }
                        }

                        return (
                            <div className="eachSelect eachSelectHover" key={index} onClick={() => onSelectEachOption(option)}>
                                <p className="ellipsis">{option.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchbarDropdownMulti
