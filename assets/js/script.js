const button = document.getElementById("scrolltotop")

button.addEventListener('click', () => {
    if(typeof window !== 'undefined')
    {
        window.scrollTo({top:0, behavior:"smooth"})
    }
})
