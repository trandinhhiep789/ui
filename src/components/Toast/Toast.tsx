import React, { useState, useEffect, useCallback, ReactNode } from 'react'

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
  duration?: number
}

const Toast = ({
  content = 'success',
  type = 'success',
  placement = 'bottom-right',
  duration = 3000,
  ...props
}: ToastProps) => {
  const [list, setList] = useState<{ id: number; title: string; description: string; icon: ReactNode }[]>([])

  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = list.filter(e => e.id !== id)
      setList(toastListItem)
    },
    [list, setList]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(list[0].id)
      }
    }, duration)
    return () => {
      clearInterval(interval)
    }
  }, [list, deleteToast])

  let initToastProperties = {
    id: -1,
    title: '',
    description: '',
    icon: <FontAwesomeIcon icon={faCircleCheck} className="faCircleCheck" />
  }

  const iconType = (type: string) => {
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

  const showToast = (type: string, content: string) => {
    switch (type) {
      case 'success':
        initToastProperties = {
          id: list.length + 1,
          title: 'Success',
          description: content,
          icon: iconType(type)
        }
        break
      case 'failure':
        initToastProperties = {
          id: list.length + 1,
          title: 'Failure',
          description: content,
          icon: iconType(type)
        }
        break
      case 'info':
        initToastProperties = {
          id: list.length + 1,
          title: 'Info',
          description: content,
          icon: iconType(type)
        }
        break
      case 'warning':
        initToastProperties = {
          id: list.length + 1,
          title: 'Warning',
          description: content,
          icon: iconType(type)
        }
        break
      default:
        initToastProperties = {
          id: -1,
          title: '',
          description: '',
          icon: iconType('success')
        }
    }
    setList(prevList => [...prevList, initToastProperties])
  }

  return (
    <div {...props}>
      <div onClick={() => showToast(type, content)}>123</div>

      <div className={['toast', placement].join(' ')}>
        {list.map((toast, i) => (
          <div className={['divToast', type].join(' ')} key={i}>
            <div className="icon">{toast.icon}</div>
            <div className="contentMessage">
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Toast
