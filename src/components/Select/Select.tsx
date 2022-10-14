import React, { useState } from 'react'
import './Select.css'

interface SelectProps {
    /** padding Select */
    p?: string
    /** width Select */
    widthSelect?: string
    /** defaultValue Select */
    defaultValue?: string
    /** defaultTextValue Select */
    defaultTextValue?: string
    children?: React.ReactNode | string | (() => string)
    /** list Option Select */
    listOption?: () => void | JSX.Element | JSX.Element[] | string | (() => string)
    /** handleChange */
    handleChange?: (value: string) => void
}

const Select = ({
    p = 'p-1',
    defaultValue = '',
    defaultTextValue = '--Vui lòng chọn--',
    widthSelect = '',
    handleChange = (value: string) => {},
    listOption = () => {
        return <option value="-1">Không có data</option>
    },
    ...props
}: SelectProps) => {
    const [selectedOption, setSelectedOption] = useState('')

    const onChangeSelect = (value: string) => {
        setSelectedOption(value)
        handleChange(value)
    }

    const abc: any = ['dog', 'cat', 'hamster', 'parrot', 'spider', 'goldfish']

    // const optionProps: any = () => {
    //     return (
    //         <>
    //             {/* <option value="dog">Dog</option>
    //             <option value="cat">Cat</option>
    //             <option value="hamster">Hamster</option>
    //             <option value="parrot">Parrot</option>
    //             <option value="spider">Spider</option>
    //             <option value="goldfish">Goldfish</option> */}
    //             {/* {abc.map((value: any, index: any) => (
    //                 <option key={index} value={value}>
    //                     {value}
    //                 </option>
    //             ))} */}
    //             {listOption}
    //         </>
    //     )
    // }

    return (
        <span {...props}>
            <select
                defaultValue={defaultValue}
                value={selectedOption}
                onChange={e => onChangeSelect(e.target.value)}
                style={{ width: widthSelect }}
                className={['border rounded-lg', 'block', p].join(' ')}
            >
                <option value="">{defaultTextValue}</option>
                {/* {listOption()} */}
            </select>
        </span>
    )
}

export default Select
