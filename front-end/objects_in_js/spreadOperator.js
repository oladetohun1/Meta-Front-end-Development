let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The vatican City"
];

function showItinerary(place1, place2, place3){
    console.log("visit " + place1);
    console.log("then visit " + place2);
    console.log("finish with a visit to " + place3);
}

showItinerary(top3[0], top3[1], top3[2]);

showItinerary(...top3);
