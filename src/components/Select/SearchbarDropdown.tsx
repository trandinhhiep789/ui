import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faXmark, faMinus } from '@fortawesome/free-solid-svg-icons'

import './Select.css'

interface SearchbarDropdownProps {
    /** Danh sách option */
    options?: Array<any>
    /** onChange option */
    onInputChange?: (e: any) => void
    /** placeholder */
    placeholder?: string
}

const SearchbarDropdown = ({ options = [], onInputChange = event => {}, placeholder = '', ...props }: SearchbarDropdownProps) => {
    const ulRef: any = useRef()
    const inputRef: any = useRef()
    const [inputSelected, setInputSelected]: any = useState('')
    const [inputSelectedKeyCode, setInputSelectedKeyCode]: any = useState(0)

    useEffect(() => {
        inputRef.current.addEventListener('click', (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            event.stopPropagation()
            ulRef.current.className = 'contentSelect'
            onInputChange(event)

            let elem: any = document.querySelector('.selected')
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' })
            }
        })

        window.addEventListener('click', event => {
            if (ulRef.current.className) {
                ulRef.current.className = 'contentSelectHide'
            }
        })
    }, [])

    useEffect(() => {
        const handleKeydown = (e: any) => {
            const optionLabelList: any = document.querySelector('#results')
            let optionLabelHeightBottom
            let optionLabelHeightTop
            if (optionLabelList) {
                optionLabelHeightBottom = optionLabelList.getBoundingClientRect().bottom
                optionLabelHeightTop = optionLabelList.getBoundingClientRect().top
            }

            console.log('optionLabelHeightBottom :', optionLabelHeightBottom)
            console.log('optionLabelHeightTop :', optionLabelHeightTop)
            // up arrow
            if (e.keyCode == '38') {
                const optionLabel: any = document.querySelector('.inputSelectedKeyCode')
                if (inputSelectedKeyCode == 0) {
                    return
                } else {
                    setInputSelectedKeyCode(inputSelectedKeyCode - 1)
                    if (optionLabel) {
                        let currentPosition = optionLabel.getBoundingClientRect().top
                        // console.log('optionLabel top', optionLabel.getBoundingClientRect().top)
                        if (currentPosition < optionLabelHeightTop) {
                            console.log('optionLabel top', optionLabel.getBoundingClientRect().top)
                            optionLabel.scrollIntoView()
                        }
                    }
                }
            }
            // down arrow
            else if (e.keyCode == '40') {
                const optionLabel: any = document.querySelector('.inputSelectedKeyCode')
                if (options && options.length > 0) {
                    if (inputSelectedKeyCode == options.length - 1) {
                        return
                    }
                }
                setInputSelectedKeyCode(inputSelectedKeyCode + 1)
                if (optionLabel) {
                    let currentPosition = optionLabel.getBoundingClientRect().bottom
                    if (currentPosition > optionLabelHeightBottom) {
                        console.log('currentPosition', currentPosition)
                        optionLabel.scrollIntoView()
                    }
                }
            }
            // enter key
            else if (e.keyCode == '13') {
                const optionLabel: any = document.querySelector('.inputSelectedKeyCode')
                if (optionLabel) {
                    setInputSelected(optionLabel.innerText + '')
                    inputRef.current.value = ''
                }
            }
        }

        window.addEventListener('keydown', handleKeydown, false)
        return () => window.removeEventListener('keydown', handleKeydown)
    }, [options, inputSelectedKeyCode])

    const onInputChangeSearchbarDropdown = (event: { target: { value: any } }) => {
        if (event.target.value) {
            setInputSelected('')
        }
        onInputChange(event)
    }

    return (
        <div {...props}>
            <div className="relative cursor-pointer">
                <input
                    id="search-bar"
                    type="text"
                    className="inputSelect"
                    placeholder={inputSelected ? '' : placeholder}
                    ref={inputRef}
                    onChange={onInputChangeSearchbarDropdown}
                    autoComplete="off"
                />
                <div className="absolute top-2 left-2.5">{inputSelected && inputSelected}</div>
                {inputSelected && inputSelected != '' && (
                    <svg
                        onClick={() => setInputSelected('')}
                        className="absolute top-3.5 right-12 text-gray-300 hover:text-slate-700 h-4 w-4"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </svg>
                )}
                <svg className="absolute top-3.5 right-3.5 text-gray-300 h-4 w-4">
                    <FontAwesomeIcon icon={faChevronDown} />
                </svg>
                <svg className="absolute top-2.5 right-7 text-gray-300 origin-center rotate-90 h-6 w-6">
                    <FontAwesomeIcon icon={faMinus} />
                </svg>
                {/* list option */}
                <div id="results" ref={ulRef}>
                    {options.map((option, index) => {
                        return (
                            <div
                                className={[
                                    'eachSelect',
                                    inputSelected == option.label ? 'selected' : '',
                                    inputSelectedKeyCode == index ? 'inputSelectedKeyCode' : ''
                                ].join(' ')}
                                key={index}
                                onClick={e => {
                                    setInputSelected(option.label)
                                    inputRef.current.value = ''
                                }}
                            >
                                {option.label}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchbarDropdown
