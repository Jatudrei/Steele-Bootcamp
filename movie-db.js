movies =[
{
name: "The Karate Kid",
rating: "3 stars",
watched: true},

{
name: "Kung Fu Panda 3",
rating: "3 stars",
watched: true
},

{name: "Zootopia",
rating: "4 stars",
watched: false}
,

{
name: "Sing",
rating: "2 stars",
watched: false
}
]

for (i = 0; i < movies.length; i++) {
if (movies[i].watched === true) {
    console.log("You have watched " + movies[i].name + " and given it " + movies[i].rating + ".");
    }
else {
    console.log("You have not watched " + movies[i].name + " and you gave it " + movies[i].rating + ".");
}}

