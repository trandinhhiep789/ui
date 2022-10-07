import React from 'react'
import './Tooltips.css'

interface TooltipsProps {
    /** Nội dung Tooltips */
    children?: string
    /** Nội dung Tooltips */
    dataTooltip?: string
    /** Màu sắc Tooltips */
    color?: string
    /** Loại Tooltips */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
}

const Tooltips = ({ placement = 'bottom', color = '#555', dataTooltip = 'dataTooltip', ...props }: TooltipsProps) => {
    // const iconType = (type: string) => {
    //     switch (type) {
    //         case 'success':
    //             return 'text-success'
    //         case 'danger':
    //             return 'text-danger'
    //         case 'warning':
    //             return 'text-warning'
    //         case 'disabled':
    //             return 'text-disabled'
    //         case 'mark':
    //             return 'text-mark'
    //         case 'code':
    //             return 'text-code'
    //         default:
    //             return ''
    //     }
    // }

    return (
        <span {...props} data-tooltip={placement} color-abc={color} aria-label={dataTooltip}>
            {props.children && <span className="inline-block" dangerouslySetInnerHTML={{ __html: props.children }} />}
        </span>
    )
}

export default Tooltips
