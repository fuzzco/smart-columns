export default function({ columns = 2, selector = 'ol, ul' } = {}) {
    const els = Array.from(document.querySelectorAll(selector))

    els.forEach(el => {
        const count = Math.ceil(el.childElementCount / columns)

        el.style.setProperty('--row-count', count)
    })
}
