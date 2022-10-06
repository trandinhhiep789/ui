import React from 'react'
import './Tag.css'

interface Tag {
    /** Nội dung Tag */
    children?: string
    /** Loại Tag */
    type?: 'default' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | ''
    /** Kích cỡ Tag */
    size?: 'extra-small-tag' | 'smallTag' | 'mediumTag' | 'largeTag' | 'extra-large-tag'
}

const Tag = ({ type = '', size, ...props }: Tag) => {
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
            {props.children}
        </span>
    )
}

export default Tag
