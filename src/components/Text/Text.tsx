import React from 'react'
import './Text.css'

interface TextProps {
    /** Nội dung text */
    children?: string
    /** Loại text */
    type?: 'success' | 'warning' | 'danger' | 'disabled' | 'mark' | 'code' | ''
}

const Text = ({ type = '', ...props }: TextProps) => {
    const iconType = (type: string) => {
        switch (type) {
            case 'success':
                return 'text-success'
            case 'danger':
                return 'text-danger'
            case 'warning':
                return 'text-warning'
            case 'disabled':
                return 'text-disabled'
            case 'mark':
                return 'text-mark'
            case 'code':
                return 'text-code'
            default:
                return ''
        }
    }

    return (
        <span {...props} className={iconType(type)}>
            {props.children}
        </span>
    )
}

export default Text
