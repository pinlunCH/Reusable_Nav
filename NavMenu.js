NavMenu = (show, div, close) => {
    let showBtn = document.querySelector('.' + show);
    let navDiv = document.querySelector('.' + div);
    let closeBtn = document.querySelector('.' + close);

    showBtn.addEventListener('click', () => {
        showBtn.classList.add('active');
        navDiv.style.right = 'put in num';
        navDiv.classList.add('active');
        closeBtn.classList.add('active');
        showBtn.classList.add('off');
    });
    // when showBtn is clicked, hide the showBtn and show the closeBtn
    // Display navDiv

    closeBtn.addEventListener('click', () => {
        showBtn.classList.remove('active');
        navDiv.style.right = 'put in num';
        navDiv.classList.remove('active');
        showBtn.classList.remove('off');
        closeBtn.classList.remove('active');
    });
    // when closeBtn is clicked, hide the closeBtn and show the showBtn
    // hide the navDiv
}
NavMenu('nav-toggle', 'standard-nav', 'nav-close');
