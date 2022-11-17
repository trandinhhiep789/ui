import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

interface ConfirmProps {
    listOptionSelected?: []
    isExceeding?: Boolean
    isExceedingIndex?: number
    widthSelect?: string
    onDeleteSelectEachOption?: (value: any) => void
    onInputChangeMulti?: (value: any) => void
    setValue?: (value: any) => void
    setlistOptionSelected?: (value: any) => void
    setExceeding?: (value: any) => void
    value?: string
    placeholder?: string
    inputRef?: any
}

const Confirm = ({
    listOptionSelected = [],
    isExceeding = false,
    isExceedingIndex = 0,
    widthSelect = '',
    value = '',
    onDeleteSelectEachOption = value => {},
    onInputChangeMulti = value => {},
    setValue = value => {},
    setlistOptionSelected = value => {},
    setExceeding = value => {},
    placeholder = '',
    inputRef = useRef(null),
    ...props
}: ConfirmProps) => {
    return (
        <React.Fragment {...props}>
            <div className="divFlexContentInputMulti">
                {listOptionSelected &&
                    listOptionSelected.map((item: any, index: any) => (
                        <div
                            key={index}
                            className="tagDefaultInSelect smallTag relative"
                            style={{ maxWidth: (parseInt(widthSelect.replace(/px/, '')) * 60) / 100 + 'px' }}
                        >
                            {item.label}&ensp;&nbsp;
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
        </React.Fragment>
    )
}

export default Confirm
