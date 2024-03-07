document.addEventListener('DOMContentLoaded', function() {
    let fundoDark = document.querySelector('.lua-dark')
    let body = document.querySelector('body')
   

    fundoDark.addEventListener('click', () => {
        body.classList.toggle('modo-dark')

        if (body.classList.contains('modo-dark')) {
            fundoDark.src = '../../assets/img/sol.jfif'
        } else {
            fundoDark.src = '../../assets/img/lua.jfif'
           
        }
    });
});
