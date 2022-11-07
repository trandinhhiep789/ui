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
    changeSetOptionsMultiTamp?: (value: any) => void
}

const SearchbarDropdownMulti = ({
    options = [],
    onInputChangeMulti = event => {},
    changeSetOptionsMultiTamp = value => {},
    placeholder = '',
    listSelected = [],
    ...props
}: SearchbarDropdownMultiProps) => {
    const ulRef: any = useRef()
    const inputRef: any = useRef()

    useEffect(() => {
        inputRef.current.addEventListener('click', (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            event.stopPropagation()
            ulRef.current.className = 'contentSelect'
            onInputChangeMulti(event)
        })
        document.addEventListener('click', event => {
            if (ulRef && ulRef.current && ulRef.current.className) {
                ulRef.current.className = 'contentSelectHide'
            }
        })
    }, [])

    const listenerClickInput = () => {
        const abc = document.getElementById('search-bar')
        if (abc) {
            abc.classList.add('MyClass')
            onInputChangeMulti(event)
        }
    }

    return (
        <div {...props}>
            <div className="relative cursor-pointer inputSelect">
                <div className="flex flex-wrap">
                    <div>
                        {listSelected &&
                            listSelected.map((item: any, index: any) => (
                                <span key={index} className="tagDefault smallTag relative">
                                    {item} &ensp;&nbsp;
                                    <span
                                        onClick={() => changeSetOptionsMultiTamp(item)}
                                        className="p-1 absolute top-0 right-0 hover:bg-rose-400 rounded"
                                    >
                                        <svg className="h-3 w-3">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </svg>
                                    </span>
                                </span>
                            ))}
                    </div>
                    <div>
                        <input
                            id="search-bar"
                            type="text"
                            className="inputSelectMulti"
                            ref={inputRef}
                            onChange={onInputChangeMulti}
                            autoComplete="off"
                        />
                    </div>
                </div>

                <svg className="absolute top-3.5 right-3.5 text-gray-300 h-4 w-4">
                    <FontAwesomeIcon icon={faChevronDown} />
                </svg>
                <svg className="absolute top-2.5 right-7 text-gray-300 origin-center rotate-90 h-6 w-6">
                    <FontAwesomeIcon icon={faMinus} />
                </svg>
            </div>

            {/* list option */}
            <div id="results" ref={ulRef}>
                {options.map((option, index) => {
                    return (
                        <div
                            className="eachSelect"
                            key={index}
                            onClick={e => {
                                inputRef.current.value = option.label
                                // setLsSelected((prevState: any) => [...prevState, option])
                            }}
                        >
                            {option.label}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchbarDropdownMulti
