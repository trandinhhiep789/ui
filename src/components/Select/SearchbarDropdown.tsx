import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faXmark, faMinus } from '@fortawesome/free-solid-svg-icons'

import './Select.css'

interface SearchbarDropdownProps {
    /** Danh sách option */
    options?: Array<any>
    /** onInputChange để callback ra ngoài trả data ra */
    onInputChange?: (e: any) => void
    /** onSearch để callback ra ngoài trả data ra */
    onSearch?: (e: any) => void
    /** placeholder */
    placeholder?: string
    /** width Select ...px or ...% */
    widthSelect?: string
}

const SearchbarDropdown = ({
    options = [],
    onInputChange = event => {},
    onSearch = event => {},
    placeholder = '',
    widthSelect = '',
    ...props
}: SearchbarDropdownProps) => {
    /** useRef để Dom tới list option, để lắng nghe click, để dựa vào đó set ẩn hiện list option */
    const ulRef: any = useRef()

    /**  */
    const ulRefShow: any = useRef()

    /** useRef để Dom tới input search select, để lắng nghe click, để dựa vào đó báo cho ulRef ẩn hiện cái list option*/
    const inputRef: any = useRef()

    /** inputSelected để hiện option hiện đang được chọn trong placeholder*/
    const [inputSelected, setInputSelected]: any = useState('')

    /** inputSelectedKeyCode để di chuyển option khi người dùng nhấn mũi tên lên xuống trên bàn phím*/
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

        ulRefShow.current.addEventListener('click', (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            inputRef.current.focus()
            event.stopPropagation()
            ulRef.current.className = 'contentSelect'
            onInputChange(event)

            let elem: any = document.querySelector('.selected')
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' })
            }
        })

        window.addEventListener('click', event => {
            if (ulRef && ulRef.current && ulRef.current.className) {
                ulRef.current.className = 'contentSelectHide'
                inputRef.current.value = ''
                const opSelected = {
                    target: {
                        value: undefined
                    }
                }
                onInputChangeSearchbarDropdown(opSelected)
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

            // up arrow
            if (e.keyCode == '38') {
                const eachSelectClass: any = document.querySelector('.eachSelectHover')
                if (eachSelectClass) {
                    eachSelectClass.classList.remove('eachSelectHover')
                }

                const optionLabel: any = document.querySelector('.inputSelectedKeyCode')
                if (inputSelectedKeyCode == 0) {
                    return
                } else {
                    setInputSelectedKeyCode(inputSelectedKeyCode - 1)
                    if (optionLabel) {
                        let currentPosition = optionLabel.getBoundingClientRect().top
                        if (currentPosition < optionLabelHeightTop) {
                            optionLabel.scrollIntoView()
                        }
                    }
                }
            }
            // down arrow
            else if (e.keyCode == '40') {
                const eachSelectClass: any = document.querySelector('.eachSelectHover')
                if (eachSelectClass) {
                    eachSelectClass.classList.remove('eachSelectHover')
                }

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
                        optionLabel.scrollIntoView()
                    }
                }
            }
            // enter key
            else if (e.keyCode == '13') {
                const eachSelectClass: any = document.querySelector('.eachSelectHover')
                if (eachSelectClass) {
                    eachSelectClass.classList.remove('eachSelectHover')
                }

                const optionLabel: any = document.querySelector('.inputSelectedKeyCode')
                if (optionLabel) {
                    setInputSelected(optionLabel.innerText + '')
                    const value = optionLabel.getAttribute('data-select')
                    onSearch(value)
                    inputRef.current.value = ''
                    if (ulRef.current.className) {
                        ulRef.current.className = 'contentSelectHide'
                    }
                }
            }
        }

        window.addEventListener('keydown', handleKeydown, false)
        return () => window.removeEventListener('keydown', handleKeydown)
    }, [options, inputSelectedKeyCode])

    const onMouseOverOption = (index: number) => {
        setInputSelectedKeyCode(index)
    }

    const onInputChangeSearchbarDropdown = (event: { target: { value: any } }) => {
        onInputChange(event)
    }

    const onSelectEachOption = (label: string, value: string) => {
        setInputSelected(label)
        inputRef.current.value = ''

        onSearch(value)
    }

    return (
        <div {...props} style={{ width: widthSelect }}>
            <div className="relative cursor-pointer">
                <input
                    id="search-bar"
                    type="text"
                    className="inputSelect"
                    placeholder={inputRef && inputRef.current && inputRef.current.value ? '' : inputSelected ? '' : placeholder}
                    ref={inputRef}
                    onChange={onInputChangeSearchbarDropdown}
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    aria-autocomplete="list"
                    role="combobox"
                    autoCapitalize="none"
                />
                <div className="absolute top-2 left-2.5 w-full" ref={ulRefShow}>
                    <p className="ellipsisShow">{inputRef && inputRef.current && inputRef.current.value ? '' : inputSelected}</p>
                </div>
                {inputSelected && inputSelected != '' && (
                    <svg
                        onClick={() => {
                            setInputSelected('')
                            const opSelected = {
                                target: {
                                    value: ''
                                }
                            }
                            onInputChange(opSelected)
                            onSearch('')
                        }}
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
                <div id="results" ref={ulRef} style={{ width: widthSelect }}>
                    {options.map((option, index) => {
                        return (
                            <div
                                className={[
                                    'eachSelect',
                                    inputSelected == option.label ? 'selected' : '',
                                    inputSelectedKeyCode == index ? 'inputSelectedKeyCode' : ''
                                ].join(' ')}
                                key={index}
                                onClick={() => onSelectEachOption(option.label, option.value)}
                                onMouseOver={() => onMouseOverOption(index)}
                                data-select={option.value}
                            >
                                <p className="ellipsis">{option.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchbarDropdown
