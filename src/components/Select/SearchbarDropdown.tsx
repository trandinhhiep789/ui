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
        document.addEventListener('click', event => {
            if (ulRef.current.className) {
                ulRef.current.className = 'contentSelectHide'
            }
        })
    }, [])

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
                                className={['eachSelect', inputSelected == option ? 'selected' : ''].join(' ')}
                                key={index}
                                onClick={e => {
                                    setInputSelected(option)
                                }}
                            >
                                {option}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchbarDropdown
