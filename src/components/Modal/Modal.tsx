import React from 'react'

import './Modal.css'

interface ModalProps {
  /** Ẩn hiện modal */
  visible?: boolean
  /** Size modal */
  size?: 'default' | 'large' | 'extra-large'
  /** Vị trí modal */
  placement?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** Tiêu đề modal */
  title?: string
  /** Nội dung modal */
  contentModal?: string
  /** Text đồng ý */
  okText?: string
  /** Text từ chối */
  cancelText?: string
  /** Hàm xừ lý sự kiện OK */
  onOk?: React.MouseEventHandler<HTMLElement>
  /** Hàm xừ lý sự kiện Cancel */
  onCancel?: React.MouseEventHandler<HTMLElement>
}

const Modal = ({
  visible = false,
  title = 'Thông báo',
  okText = 'Ok',
  cancelText = 'Cancel',
  contentModal = '<p>Content modal</p>',
  onOk,
  onCancel,
  size = 'default',
  placement = 'center',
  ...props
}: ModalProps) => {
  const visibleMode = visible ? 'defaultModal' : 'hidden defaultModal'

  return (
    <div {...props}>
      <div className={[visibleMode, placement].join(' ')}>
        <div className={['relative p-4 w-full h-full md:h-auto', size].join(' ')}>
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <button type="button" className="btnX" onClick={onCancel}>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <div dangerouslySetInnerHTML={{ __html: contentModal }} />
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button type="button" className="btnOk" onClick={onOk}>
                {okText}
              </button>
              <button type="button" className="btnCancel" onClick={onCancel}>
                {cancelText}
              </button>
            </div>
          </div>
        </div>
      </div>
      {visible && <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}
    </div>
  )
}

export default Modal
