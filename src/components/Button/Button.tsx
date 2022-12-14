import React from 'react'

import './Button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export interface ButtonProps {
    /** Màu chính button*/
    primary?: boolean
    /** className tailwincss button*/
    className?: string
    /**Thuộc tính block của button */
    block?: boolean
    /** Thuộc tính disable của button */
    disable?: boolean
    /** Thuộc tính loading của button */
    loading?: boolean
    /** Thuộc tính đổi màu backgroundColor */
    backgroundColor?: string
    /** Kiểu loại button */
    type?: 'outline' | 'defaul'
    /** Kích cỡ button */
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
    /** Nội dung button */
    children?: string
    /** Một số màu mặc định */
    color?:
        | 'green'
        | 'red'
        | 'yellow'
        | 'purple'
        | 'dark'
        | 'green-outline'
        | 'red-outline'
        | 'yellow-outline'
        | 'purple-outline'
        | 'defaultBtn'
        | 'alternativeBtn'
        | 'dark-outline'
        | undefined
    /** onClick */
    onClick?: React.MouseEventHandler<HTMLElement>
}
const iconLoading: string = 'fa-solid fa-spinner'
const Button = ({
    primary = false,
    block = false,
    disable = false,
    loading = false,
    type = 'defaul',
    size = 'medium',
    backgroundColor,
    color,
    onClick,
    className = '',
    ...props
}: ButtonProps) => {
    const mode = primary ? 'defaultBtn' : 'alternativeBtn'
    const modeblock = block ? 'displayBlock' : ''
    const modedisable = disable ? 'disable' : ''
    const modeloading = loading ? 'loading' : ''
    const typeButton = type === 'outline' ? 'defaultBtnOutline' : mode
    return (
        <div className={className}>
            <button
                type="button"
                className={[typeButton, color, size, modeblock, modeloading, modedisable, 'flex'].join(' ')}
                style={{ backgroundColor }}
                {...props}
                onClick={onClick}
            >
                <div className="w-0">
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <FontAwesomeIcon icon={faSpinner} size="3x" style={{ color: color }} />
                        </svg>
                    ) : (
                        ''
                    )}
                </div>
                <div className={loading ? 'ml-6' : ''}>{props.children}</div>
            </button>
        </div>
    )
}

export default Button
