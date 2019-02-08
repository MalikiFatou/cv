window.addEventListener ("scroll", function() { 

document.getElementById('progress_bar').value = deplacement 
});



window.scrollY // Valeur du scroll en pixel
document.body.offsetHeight // Hauteur totale de la page en pixel
window.innerHeight // Hauteur de l'écran en pixel





function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
    
    // Calculez ici la valeur de déplacement à efectuer lors du scroll
    
    window.scroll(0, value) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}
