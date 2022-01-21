const panels = document.querySelectorAll('.panel') /* brings all panels in to js file */

panels.forEach(panel => { /* loop thru node list. arrow function. forEach is high order array method, takes in function as argument. panels is used for each iteration */
    panel.addEventListener('click', () => { /* when click happens runs a function */
        removeActiveClasses() /* removes active class from others when not clicked */
        panel.classList.add('active') /* when clicked, active class is added which changes it to flex 5 */
    })
})

function removeActiveClasses() { /* function to remove all active classes */
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}