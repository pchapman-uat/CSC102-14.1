function loadnav(location){
    // Identify Array of navigation items
    let nav_elements = [
        {name: "Home", file: "index.html"},
        {name: "ACS Board", file: "boards/boards_ACS.html"},
        {name: "GP Board", file: "boards/boards_GP.html"},
        {name: "Strings", file: "strings.html"},
        {name: "Game", file: "game/game_info.html"},
    ]
    
    // Set parent div by id
    let parent = document.getElementById("nav")

    // For each element create button
    for(i in nav_elements){
        let button = document.createElement("button")
        button.setAttribute("onclick", `window.location.href='${location}${nav_elements[i].file}'`)
        button.innerHTML = nav_elements[i].name
        parent.appendChild(button)

    }
}

function submit() {
    let good = new Audio('sounds/submit.wav')
    let bad = new Audio('sounds/fail.wav')

    console.log("Submited!")
    
    
    // Get elements by id of f_name, l_name, and zip
    let f_name = document.getElementById("f_name").value
    let l_name = document.getElementById("l_name").value
    let zip = document.getElementById("zip").value

    let status = document.getElementById("message")
    
    // log the first and last name
    console.log(f_name)
    console.log(l_name)
    
    // Concat the first and last name
    let full = f_name + l_name 
    console.log(full.length)
    
    // Check if the length of both names is more than 20
    if (full.length > 20) {
        console.log("Over 20!")
        //Check if the zip is a intager, and is exactly 5 digits long
        if((parseInt(zip) == zip) && zip.length == 5){
            console.log("Valid Zip")
            good.play()

            //Alert letting user know information has been submited
            status.innerHTML = "Your information has been submited \nNo information was kept, this is only for a demonstration \n Your secret message is: SquidsRule"
        } else {
            bad.play()
            //Alert if zip is not valid
            status.innerHTML = "Not a valid vip, must be a whole number exactly 5 digits long"
        }
        
    } else {
        bad.play()
        console.log("No over 20")

        //Alert if lenght is not valid
        status.innerHTML = `Length of first and last name must be over 20, currently ${full.length}/20`
    }
    
    // The following code could be ran if the palindrome where to be checked only on submit

    // palindrome()

}

function palindrome(){
    // Get the value of the input box
    let input = document.getElementById("palindrome").value

    // Split the input into an array
    let array = input.split("")
    // use the reverse function for arrays
    let reversed = array.reverse()
    // Join back the array into a string
    let joined = reversed.join("")

    // Check if the joined and input values are the same, as well if the input is not blank
    if((joined === input) && (input != "")){
        // Sent an alert if it is a palindrome
        alert("It is a palindrome!")
    }

} 