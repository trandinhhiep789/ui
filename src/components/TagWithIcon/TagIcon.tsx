import React from 'react'
import './TagIcon.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconName } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)

interface TagIcon {
    /** Nội dung Tag */
    children?: string
    /** Loại Tag */
    type?: 'default' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | ''
    /** Kích cỡ Tag */
    size?: 'extra-small-tag' | 'smallTag' | 'mediumTag' | 'largeTag' | 'extra-large-tag'
    /** Icon Tag */
    icon?: string
}

const TagIcon = ({ type = '', size, icon = 'fa-solid fa-spinner', ...props }: TagIcon) => {
    const typeTag = (type: string) => {
        switch (type) {
            case 'default':
                return 'tagDefault'
            case 'dark':
                return 'tagDark'
            case 'red':
                return 'tagRed'
            case 'green':
                return 'tagGreen'
            case 'yellow':
                return 'tagYellow'
            case 'indigo':
                return 'tagIndigo'
            case 'purple':
                return 'tagPurple'
            case 'pink':
                return 'tagPink'
            default:
                return ''
        }
    }
    return (
        <span {...props} className={[typeTag(type), size].join(' ')}>
            {icon == 'fa-solid fa-spinner' ? (
                ''
            ) : (
                <FontAwesomeIcon className={props.children && props.children != '' ? 'mr-2' : ''} icon={icon as IconName} />
            )}

            {props.children}
        </span>
    )
}

export default TagIcon
