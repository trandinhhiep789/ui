import React from 'react'

import './Toast.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation, faInfo } from '@fortawesome/free-solid-svg-icons'
interface ToastProps {
  /** Nội dung Tosat */
  content?: string
  /** Loại Toast */
  type?: 'success' | 'failure' | 'warning' | 'info'
  /** Vị trí Toast */
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const Toast = ({ content, type = 'success', placement = 'bottom-right', ...props }: ToastProps) => {
  const iconType = () => {
    switch (type) {
      case 'success':
        return <FontAwesomeIcon icon={faCircleCheck} className="faCircleCheck" />
      case 'failure':
        return <FontAwesomeIcon icon={faCircleXmark} className="faCircleCheck" />
      case 'warning':
        return <FontAwesomeIcon icon={faTriangleExclamation} className="faCircleCheck" />
      case 'info':
        return <FontAwesomeIcon icon={faInfo} className="faCircleCheck" />
      default:
        return <FontAwesomeIcon icon={faCircleCheck} className="faCircleCheck" />
    }
  }

  return (
    <div {...props}>
      <div className={['toast', type, placement].join(' ')}>
        <div className="flex w-full">
          <div className="icon">{iconType()}</div>
          <div className="contentMessage">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toast
