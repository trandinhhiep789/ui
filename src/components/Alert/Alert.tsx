import React from 'react'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { ButtonProps } from '../Button/Button'
import './Alert.css'

interface AlertProps {
    /** loại alert */
    typeAlert?: 'default' | 'with-content'
    /** loại thông tin */
    typeOf?: 'success' | 'warning' | 'danger' | 'info' | 'dark'
    /** Nội dung */
    children?: string
    /** Tiêu đề */
    title?: string
    /** Text đồng ý */
    okText?: string
    /** Text từ chối */
    cancelText?: string
    /** Hàm xừ lý sự kiện OK */
    onOk?: React.MouseEventHandler<HTMLElement>
    /** Hàm xừ lý sự kiện Cancel */
    onCancel?: React.MouseEventHandler<HTMLElement>
}

const Alert = ({
    title = 'Tiêu đề',
    typeAlert = 'default',
    typeOf = 'success',
    okText = 'View more',
    cancelText = 'Dismiss',
    onOk,
    onCancel,
    ...props
}: AlertProps) => {
    const iconType = (type: string) => {
        switch (type) {
            case 'success':
                return 'alert-success'
            case 'danger':
                return 'alert-danger'
            case 'warning':
                return 'alert-warning'
            case 'info':
                return 'alert-info'
            case 'dark':
                return 'alert-dark'
            default:
                return ''
        }
    }

    const renderAlert = (
        border: string,
        iconClass: string,
        titleClass: string,
        contentClass: string,
        buttonClass: ButtonProps['color'],
        buttonOutlineClass: ButtonProps['color']
    ) => {
        return (
            <div className={border}>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faInfo} className={iconClass} />
                    <h3 className={titleClass}>{title}</h3>
                </div>
                <div className={contentClass}>{props.children}</div>
                <div className="flex">
                    <Button size="extra-small" color={buttonClass} icon="eye" primary onClick={onOk}>
                        {okText}
                    </Button>
                    <Button size="extra-small" color={buttonOutlineClass} onClick={onCancel} type="outline">
                        {cancelText}
                    </Button>
                </div>
            </div>
        )
    }

    const typeWithContent = (type: string) => {
        switch (type) {
            case 'success':
                return renderAlert(
                    'alert--success__border',
                    'alert--success__icon',
                    'alert--success__title',
                    'alert--success__content',
                    'green',
                    'green-outline'
                )
            case 'danger':
                return renderAlert(
                    'alert--danger__border',
                    'alert--danger__icon',
                    'alert--danger__title',
                    'alert--danger__content',
                    'red',
                    'red-outline'
                )
            case 'warning':
                return renderAlert(
                    'alert--warning__border',
                    'alert--warning__icon',
                    'alert--warning__title',
                    'alert--warning__content',
                    'yellow',
                    'yellow-outline'
                )
            case 'info':
                return renderAlert(
                    'alert--info__border',
                    'alert--info__icon',
                    'alert--info__title',
                    'alert--info__content',
                    'defaultBtn',
                    'alternativeBtn'
                )
            case 'dark':
                return renderAlert(
                    'alert--dark__border',
                    'alert--dark__icon',
                    'alert--dark__title',
                    'alert--dark__content',
                    'dark',
                    'dark-outline'
                )
            default:
                return ''
        }
    }

    return (
        <div {...props}>
            {typeAlert == 'default' ? (
                <div className={iconType(typeOf)} role="alert">
                    <span className="font-medium">{title}</span> {props.children}
                </div>
            ) : (
                props.children && typeWithContent(typeOf)
            )}
        </div>
    )
}

export default Alert
