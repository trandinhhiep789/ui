import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import SearchbarDropdownEllipsis from './SearchbarDropdownEllipsis'
import SearchbarDropdownFlexWrap from './SearchbarDropdownFlexWrap'

import './Select.css'

interface SearchbarDropdownMultiProps {
    /** Danh sách option */
    options?: Array<any>
    /** onChange option */
    onInputChangeMulti?: (e: any) => void
    /** onSearchMulti option */
    onSearchMulti?: (e: any) => void
    /** placeholder */
    placeholder?: string
    /** width Select ...px or ...% */
    widthSelect?: string
    /** giới hạn trên một dòng */
    ellipsis?: boolean
}

const SearchbarDropdownMulti = ({
    options = [],
    onInputChangeMulti = event => {},
    onSearchMulti = event => {},
    placeholder = '',
    widthSelect = '',
    ellipsis = false,
    ...props
}: SearchbarDropdownMultiProps) => {
    const ulRef: any = useRef()
    const inputRef: any = useRef()
    const inputBorderRef: any = useRef()

    const [value, setValue] = useState('')
    const [isExceeding, setExceeding] = useState(false)
    const [isExceedingIndex, setExceedingIndex] = useState(0)
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

    useEffect(() => {
        const listTagSelected = document.querySelectorAll('.tagDefaultInSelect')

        const maxWidth = (parseInt(widthSelect.replace(/px/, '')) * 60) / 100

        if (listTagSelected) {
            let sum = 0
            listTagSelected.forEach((element, index) => {
                sum += element.clientWidth
                if (sum > maxWidth) {
                    setExceeding(true)
                    setExceedingIndex(index)
                    return
                }
            })
        }

        const lsSelected = [...listOptionSelected]
        const lsSelectedValue = lsSelected.map(item => item.value)
        onSearchMulti(lsSelectedValue)
    }, [listOptionSelected])

    const onSelectEachOption = (item: any) => {
        setlistOptionSelected([...listOptionSelected, item])
        inputRef.current.value = ''
    }

    const onCancelSelectEachOption = (item: any) => {
        setlistOptionSelected(listOptionSelected.filter((option: any) => option.value != item.value))
        inputRef.current.value = ''
    }

    const onDeleteSelectEachOption = (item: any) => {
        setlistOptionSelected(listOptionSelected.filter((option: any) => option.value != item.value))
    }
    return (
        <div {...props} style={{ width: widthSelect }}>
            <div className="cursor-pointer inputSelectMul">
                <div ref={inputBorderRef} className="classNameToClickOpenListOption"></div>

                {ellipsis ? (
                    <SearchbarDropdownFlexWrap
                        listOptionSelected={listOptionSelected}
                        isExceeding={isExceeding}
                        isExceedingIndex={isExceedingIndex}
                        widthSelect={widthSelect}
                        onDeleteSelectEachOption={onDeleteSelectEachOption}
                        onInputChangeMulti={onInputChangeMulti}
                        setValue={setValue}
                        setlistOptionSelected={setlistOptionSelected}
                        setExceeding={setExceeding}
                        value={value}
                        placeholder={placeholder}
                        inputRef={inputRef}
                    />
                ) : (
                    <SearchbarDropdownEllipsis
                        listOptionSelected={listOptionSelected}
                        isExceeding={isExceeding}
                        isExceedingIndex={isExceedingIndex}
                        widthSelect={widthSelect}
                        onDeleteSelectEachOption={onDeleteSelectEachOption}
                        onInputChangeMulti={onInputChangeMulti}
                        setValue={setValue}
                        setlistOptionSelected={setlistOptionSelected}
                        setExceeding={setExceeding}
                        value={value}
                        placeholder={placeholder}
                        inputRef={inputRef}
                    />
                )}

                <div className="flex items-center justify-center border-l-2">
                    <svg className="text-gray-300 h-4 w-4 ml-2">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </svg>
                </div>
                {/* END */}
            </div>

            {/* khong chinh sua phan nay */}
            <div className="relative w-full">
                {/* list option */}
                <div id="results" style={{ width: widthSelect }} ref={ulRef}>
                    {options && options.length > 0
                        ? options.map((option: any, index: any) => {
                              if (listOptionSelected && listOptionSelected.length > 0) {
                                  const isSelected = listOptionSelected.some(
                                      (currentValue: any) => currentValue.value === option.value
                                  )

                                  if (isSelected) {
                                      return (
                                          <div
                                              className="eachSelect bg-sky-100 onCancelSelectEachOption"
                                              key={index}
                                              onClick={() => onCancelSelectEachOption(option)}
                                          >
                                              <div className="relative">
                                                  <p className="ellipsis font-medium">{option.label}</p>
                                                  <div className="absolute right-0 top-0">
                                                      <FontAwesomeIcon icon={faCheck} color="#1d40b0" />
                                                  </div>
                                              </div>
                                          </div>
                                      )
                                  }
                              }

                              return (
                                  <div
                                      className="eachSelect eachSelectHover onSelectEachOption"
                                      key={index}
                                      onClick={() => onSelectEachOption(option)}
                                  >
                                      <p className="ellipsis">{option.label}</p>
                                  </div>
                              )
                          })
                        : ''}
                </div>
            </div>
        </div>
    )
}

export default SearchbarDropdownMulti
