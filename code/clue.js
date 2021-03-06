// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is rich",
  age: 55,
  image: "assets/plum.png",
  occupation: "Director"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is very clever",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Hair dresser"
}
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She has secret powers",
  age: 50,
  image: "assets/peacock.png",
  occupation: "Bank clerk"
}
const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "black",
  description: "He has dark connections",
  age: 35,
  image: "assets/mustard.png",
  occupation: "Butcher"
}
const mrsWhite = {
  firstName: "Lilly",
  lastName: "White",
  color: "white",
  description: "She has a sweet-talking power",
  age: 30,
  image: "assets/white.png",
  occupation: "Dancer"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10,
  feature: "Tight",
  color: "blue"
}
const knife = {
  name: "Knife",
  weight: 5,
  feature: "Sharp",
  color: "green"
}
const candlestick = {
  name: "Candlestick",
  weight: 15,
  feature: "Light",
  color: "red"
}
const dumbbell = {
  name: "Dumbbell",
  weight: 30,
  feature: "Heavy",
  color: "black"
}
const poison = {
  name: "Poison",
  weight: 7,
  feature: "Poisonous",
  color: "pink"
}
const axe = {
  name: "Axe",
  weight: 50,
  feature: "Dangerous",
  color: "yellow"
}
const bat = {
  name: "Bat",
  weight: 12,
  feature: "Creepy",
  color: "white"
}
const trophy = {
  name: "Trophy",
  weight: 18,
  feature: "Shiny",
  color: "gray"
}
const pistol = {
  name: "Pistol",
  weight: 100,
  feature: "Leathal",
  color: "purple"
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  "Dinning",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living",
  "Observatory",
  "Theater",
  "Guest",
  "House",
  "Patio"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {

}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  theKillerOccupation.innerHTML = mystery.killer.occupation
  theKillerImage.setAttribute("src", mystery.killer.image)
  theKillerDescription.innerHTML = mystery.killer.description
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponFeature = document.getElementById("weaponFeature")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponFeature.innerHTML = mystery.weapon.feature
}

const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoomName.innerHTML = mystery.room

}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {

  if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
    document.getElementById('mystery').innerHTML = 'No mystery has been revealed yet.'
  } else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
  }
}

