import React from 'react'

import './Confirm.css'

interface ConfirmProps {
    /** Ẩn hiện report */
    visible?: boolean
    /** Tiêu đề report */
    title?: string
    /** Nội dung report */
    content?: string
    /** Text đồng ý */
    okText?: string
    /** Text từ chối */
    cancelText?: string
    /** Hàm xừ lý sự kiện OK */
    onOk?: React.MouseEventHandler<HTMLElement>
    /** Hàm xừ lý sự kiện Cancel */
    onCancel?: React.MouseEventHandler<HTMLElement>
}

const Confirm = ({
    visible = false,
    title = 'Thông báo',
    okText = 'Ok',
    cancelText = 'Cancel',
    content = '<p>Content modal</p>',
    onOk,
    onCancel,
    ...props
}: ConfirmProps) => {
    const visibleMode = visible ? 'defaultModal' : 'hidden defaultModal'
    return (
        <div {...props}>
            <div className={[visibleMode, 'center'].join(' ')}>
                <div className={['relative px-4 py-3 w-full h-full md:h-auto', 'defaultConfirm'].join(' ')}>
                    {/* Report content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Report header */}
                        <div className="text-center items-start px-2 py-1 rounded-t border-b dark:border-gray-600">
                            <h5 className="font-semibold text-gray-900 dark:text-white">{title}</h5>
                        </div>
                        {/* Report body */}
                        <div className="px-4 py-3 space-y-6">
                            <p className="break-words text-center" dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                        {/* Report footer */}
                        <div className="flex px-4 py-3 space-x-2 rounded-b border-gray-200 dark:border-gray-600">
                            <button type="button" className="btnConfirmOk w-full" onClick={onOk}>
                                {okText}
                            </button>
                            <button type="button" className="btnConfirmCancel w-full" onClick={onCancel}>
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

export default Confirm
