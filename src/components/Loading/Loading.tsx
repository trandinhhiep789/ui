import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './Loading.css'

interface LoadingProps {
    /** Ẩn hiện loading */
    visible?: boolean
    /** Màu icon loading */
    color?: string
}

const Loading = ({ visible = true, color = '#1c4ed8', ...props }: LoadingProps) => {
    const visibleMode = visible ? 'defaultModal' : 'hidden defaultModal'

    return (
        <div {...props}>
            <div className={[visibleMode, 'center'].join(' ')}>
                <div className={['relative p-4 w-full h-full md:h-auto', 'defaultLoading'].join(' ')}>
                    <div className="relative text-center">
                        <svg className="animate-spin h-9 w-9 mr-3" viewBox="0 0 50 50">
                            <FontAwesomeIcon icon={faSpinner} size="3x" style={{ color: color }} />
                        </svg>
                    </div>
                </div>
            </div>

            {visible && <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}
        </div>
    )
}

export default Loading
