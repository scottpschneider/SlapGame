var name='Frosty'
var health=100
var hits=0
{
    update()
}
/* so variables that must be named are all span id's within a row on my html, then must be defined here at their starting point
because my functions will utilize them here in my js doc. 
function slap()*/
function update(){
        if (health<0){
            name='melty'
            health=0
        }
        document.getElementById("health").innerText=health;
        document.getElementById('hits').innerText = hits;
        document.getElementById('name').innerText=name;
/*the update function keeps track of how low the health gets per hit and kick, etc. Since i have defined what happens when health
equals zero, first i just had the health at zero when it equaled zero.. then i later on added a modification to the name function
so if the health equals zero he is melty.  */
}
//reset function will return health to 100,and hits0
function slap(){
    health=health-1,
    update()
}

function punch(){
    health= health- 5,
    update()
}
function kick(){
    health-=10,
    update()
}
update()



// document.getElementById("health")
// function update()
// innerText==health


//update
    // show change in health value, without alert funtcion\
    //get element => .innertext = health