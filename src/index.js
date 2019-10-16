export default function({ columns = 2, selector = 'ol, ul' } = {}) {
    const els = Array.from(document.querySelectorAll(selector))

    els.forEach(el => {
        console.log(el.childElementCount)
    })
    console.log(els, columns)
}
