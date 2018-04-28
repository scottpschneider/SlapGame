var targetName = 'Frosty'
var health = 100
var hits = 0

update()

/* so variables that must be named are all span id's within a row on my html, then must be defined here at their starting point
because my functions will utilize them here in my js doc. 
function slap()*/
function update() {
    if (health <= 10) {
        targetName = 'melty'
        health = 0
    }
    document.getElementById("health").innerText = health.toString();
    document.getElementById('hits').innerText = hits.toString();
    document.getElementById('name').innerText = name;
    /*the update function keeps track of how low the health gets per hit and kick, etc. Since i have defined what happens when health
    equals zero, first i just had the health at zero when it equaled zero.. then i later on added a modification to the name function
    so if the health equals zero he is melty.  */
}


//TODO: reset function will return health to 100,and hits0

function slap() {
    health = health - 1
    update()
}

function punch() {
    health = health - 5
    update()
}

function kick() {
    health = health -= 10
    update()
}

function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var items = {
    shield: new Item("Shield", 0.3, "This is an awesome shield!"),
    sword: new Item("Sword", 2.5, "This sword will slice you in half, almost..scratch you really."),
    campfire: new Item("campfire", 25, "I am a campfire, will turn you into water..fast")
}

var Frosty = new Target("frosty", 100)

function Target(name, health) {
    this.name = name;
    this.health = health;
    this.hits = 0;
    this.items = []
}

var me = {
    modifiers: []
}

var modifiers = {
    mod1: { name: protect },
    mod2: { name: slice },
    mod3: { name: melt },
}

function protect() {
    health = health +=10
        me.modifiers.push(modifiers.protect),
        update()
    }

function slice() {
    health = health -=20
    me.modifiers.push(modifiers.slice),
    update()
}

function melt() {
    health = health -=40
    me.modifiers.push(modifiers.melt),
    update()
}

function reset() {
    health = 100
    hits = 0
    update()
}

update()



// document.getElementById("health")
// function update()
// innerText==health


//update
    // show change in health value, without alert funtcion\
    //get element => .innertext = health