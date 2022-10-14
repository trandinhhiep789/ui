import React from 'react'

import './Report.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

interface ReportProps {
    /** Ẩn hiện report */
    visible?: boolean
    /** Size report */
    size?: 'default' | 'large' | 'extra-large'
    /** Size report */
    type?: 'success' | 'failure' | 'warning' | 'info'
    /** Vị trí report */
    placement?: 'center'
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

const Report = ({
    visible = false,
    title = 'Thông báo',
    okText = 'Ok',
    cancelText = 'Cancel',
    content = '<p>Content modal</p>',
    type = 'success',
    onOk,
    onCancel,
    size = 'default',
    placement = 'center',
    ...props
}: ReportProps) => {
    const visibleMode = visible ? 'defaultModal' : 'hidden defaultModal'
    const iconType = (type: string) => {
        switch (type) {
            case 'success':
                return <FontAwesomeIcon icon={faCircleCheck} className="faCircleCheckReport" />
            case 'failure':
                return <FontAwesomeIcon icon={faCircleXmark} className="faCircleXmarkReport" />
            case 'warning':
                return <FontAwesomeIcon icon={faTriangleExclamation} className="faTriangleExclamationReport" />
            case 'info':
                return <FontAwesomeIcon icon={faCircleInfo} className="faInfoReport" />
            default:
                return <FontAwesomeIcon icon={faCircleCheck} className="faCircleReport" />
        }
    }
    const bgButtonReport = (type: string) => {
        switch (type) {
            case 'success':
                return (
                    <button type="button" className="btnSuccessReport" onClick={onOk}>
                        {okText}
                    </button>
                )
            case 'failure':
                return (
                    <button type="button" className="btnFailureReport" onClick={onOk}>
                        {okText}
                    </button>
                )
            case 'warning':
                return (
                    <button type="button" className="btnWarningReport" onClick={onOk}>
                        {okText}
                    </button>
                )
            case 'info':
                return (
                    <button type="button" className="btnInfoReport" onClick={onOk}>
                        {okText}
                    </button>
                )
            default:
                return (
                    <button type="button" className="btnSuccessReport" onClick={onOk}>
                        {okText}
                    </button>
                )
        }
    }
    const bgOverlayReport = (type: string) => {
        switch (type) {
            case 'success':
                return <div className="dark:bg-opacity-80 fixed inset-0 z-40 bgSuccessReport"></div>
            case 'failure':
                return <div className="dark:bg-opacity-80 fixed inset-0 z-40 bgFailureReport"></div>
            case 'warning':
                return <div className="dark:bg-opacity-80 fixed inset-0 z-40 bgWarningReport"></div>
            case 'info':
                return <div className="dark:bg-opacity-80 fixed inset-0 z-40 bgInfoReport"></div>
            default:
                return <div className="dark:bg-opacity-80 fixed inset-0 z-40 bgSuccessReport"></div>
        }
    }
    return (
        <div {...props}>
            <div className={[visibleMode, placement].join(' ')}>
                <div className={['relative px-4 py-3 w-full h-full md:h-auto', size].join(' ')}>
                    {/* Report content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Report header */}
                        <div className="text-center items-start p-4 rounded-t border-b dark:border-gray-600">
                            <div>{iconType(type)}</div>
                            <h5 className="font-semibold text-gray-900 dark:text-white">{title}</h5>
                        </div>
                        {/* Report body */}
                        <div className="px-4 py-3 space-y-6">
                            <p
                                className="break-words text-left font-light text-gray-700 dark:text-gray-300"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </div>
                        {/* Report footer */}
                        <div className="text-right px-4 py-3 space-x-2 rounded-b border-gray-200 dark:border-gray-600">
                            {bgButtonReport(type)}
                        </div>
                    </div>
                </div>
            </div>
            {visible && bgOverlayReport(type)}
        </div>
    )
}

export default Report
