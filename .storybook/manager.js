import favicon from './public/favicon.ico'

const link = document.createElement('link')
link.setAttribute('rel', 'shortcut icon')
link.setAttribute('href', favicon)
document.head.appendChild(link)
