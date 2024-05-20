
window.onload = () => {
    const transition_el = document.querySelector('.transition')
    const anchors = document.querySelector('.navlinks')

    setTimeout(()=>{
        transition_el.classList.remove('is-active')
    }, 500)

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i]
        anchor.addEventListener('click', e => {
            e.preventDefault()
            let target = e.target.href

            transition_el.classList.add('ia-active')

            setTimeout(() => {
                window.location.href = target
            }, 500)
        })
    }
}