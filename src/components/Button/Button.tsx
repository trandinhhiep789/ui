import React from 'react'

import './Button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconName } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

interface ButtonProps {
  /**
   * Màu chính button
   */
  primary?: boolean
  /**
   * Thuộc tính block của button
   */
  block?: boolean
  /**
   * Thuộc tính disable của button
   */
  disable?: boolean
  /**
   * Thuộc tính loading của button
   */
  loading?: boolean
  /**
   * Thuộc tính đổi màu backgroundColor
   */
  backgroundColor?: string
  /**
   * Kiểu loại button
   */
  type?: 'outline' | 'defaul'
  /**
   * Kích cỡ button
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
  /**
   * Nội dung button
   */
  label: string
  /**
   * Icon button
   */
  icon?: string
  /**
   * Một số màu mặc định
   */
  color?: 'green' | 'red' | 'yellow' | 'purple' | 'green-outline' | 'red-outline' | 'yellow-outline' | 'purple-outline'
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
  label,
  icon = 'fa-solid fa-spinner',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'defaultBtn' : 'alternativeBtn'
  const modeblock = block ? 'displayBlock' : ''
  const modedisable = disable ? 'disable' : ''
  const modeloading = loading ? 'loading' : ''
  const typeButton = type === 'outline' ? 'defaultBtnOutline' : mode
  return (
    <div>
      <button
        type="button"
        className={[typeButton, color, size, modeblock, modeloading, modedisable].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {loading ? (
          <svg className={loading ? 'animate-spin h-5 w-5 mr-3' : ''} viewBox="0 0 24 24">
            <FontAwesomeIcon className={label != '' ? 'mr-2' : ''} icon={iconLoading as IconName} />
          </svg>
        ) : icon != 'fa-solid fa-spinner' ? (
          <FontAwesomeIcon className={label != '' ? 'mr-2' : ''} icon={icon as IconName} />
        ) : (
          ''
        )}
        {label}
      </button>
      <button
        type="button"
        className={[typeButton, color, size, modeblock, modeloading, modedisable].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {loading ? (
          <svg className={loading ? 'animate-spin h-5 w-5 mr-3' : ''} viewBox="0 0 24 24">
            <FontAwesomeIcon className={label != '' ? 'mr-2' : ''} icon={iconLoading as IconName} />
          </svg>
        ) : (
          <FontAwesomeIcon className={label != '' ? 'mr-2' : ''} icon={icon as IconName} />
        )}
        {label}
      </button>
    </div>
  )
}

export default Button
