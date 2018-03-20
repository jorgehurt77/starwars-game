$(document).ready(function() {
    var characters = {
        "Obi-Wan Kenobi": {
            name: "Obi-Wan Kenobi",
            health: 120,
            attack: 8,
            imageUrl: "assets/images/pic2.jpg",
            enemyAttackBack: 15
    },
        "Luke Skywalker": {
            name: "Luke Skywalker",
            health: 100,
            attack: 14,
            imageUrl: "assets/images/pic3.jpg",
            enemyAttackBack: 5
    },
        "Darth Vader": {
            name: "Darth Vader",
            health: 150,
            attack: 8,
            imageUrl: "assets/images/pic4.jpg",
            enemyAttackBack: 5
    },

        "Yoda": {
            name: "Yoda",
            health: 180,
            attack: 7,
            imageUrl: "assets/images/pic5.jpeg",
            enemyAttackBack: 25

    }
};
console.log(characters);
//This function will render a character card to the page.
//The character rendered and the area they are rendered to.
var renderOne = function(character, renderArea) {

}
//This function handles the rendering of characters based on which object is picked.
var renderCharacters = function(charObj, areaRender) {
    if (arearenders === "#characters-section") {
        $(areaRender).empty();
        for (var key in charObj) {
            if(charObj.hasOwnProperty(key)) {
                renderOne(charObj[key]), areaRender;
            }
        }
    }
}
});