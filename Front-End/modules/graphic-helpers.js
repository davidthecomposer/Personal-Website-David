/* jshint esversion: 6 */

export const underlineGraphics = () => {
    const nav = document.querySelector('nav');
    const pageNav = nav.querySelectorAll('.header-tab');
    const handleTabLeave = (e) => {
        e.target.nextElementSibling.classList.add('retract');
    };

    pageNav.forEach((btn) => {
        btn.addEventListener('mouseout', handleTabLeave);
    });

}
