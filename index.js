let hint = document.getElementById("hint")
let level = document.getElementById("level")
let lives = document.getElementById("lives")

let levelvar = 1
let lifevar = 3
let tmplife = lifevar
let range 
let numb
let winstatus = false
let startstatus = false

function DisplayAnswer(ans)
{
    document.getElementById("correct").textContent = "The Correct Number was " + ans 
}

function Initiate()
{
    if (startstatus === false)
    {
    level.textContent = "Level: " + levelvar
    lives.textContent = "Chances remaining: " + lifevar
    range = 10 * levelvar
    numb = Math.floor( Math.random()* range ) + 1
    document.getElementById("error").textContent = ""
    document.getElementById("correct").textContent = "Number had been decided. Goodluck guessing it!"
    startstatus = true
    winstatus = false
    }
    
    else 
    {
        document.getElementById("error").textContent = "Game has already been started! cannot start a new game"
    }
}

function readValue()
{
    let val = document.querySelector('#InpNum').value;
    return val
}
function defeat()
{
    winstatus = false
    startstatus = false
    level.textContent = "Level: "
    lives.textContent = "Chances remaining: "
    hint.textContent = ''


    document.getElementById("error").textContent ="Game Over! better luck next time!"
    document.getElementById("correct").textContent = "Correct number was " + numb
 }

function start()
{    
    if (startstatus === false)
    {
        document.getElementById("error").textContent ="Error: Please Start the game first"
    }
    else
    {
        let guess = readValue()

        if (guess === "")
        {
            document.getElementById("error").textContent ="Error: Please type a number!"
        }
        else 
        {
           
            if(tmplife > 0  && winstatus === false){
                document.getElementById("correct").textContent ="" 
                if(guess == numb )
                {
                    document.getElementById("correct").textContent ="WOOHOOO!!! You guessed it right! Welcome to the next level, Click Start game!"
                    level.textContent = "Level: "
                    lives.textContent = "Chances remaining: "
                    hint.textContent = ''
                    winstatus = true
                    startstatus = false
                    levelvar = levelvar + 1
                    lifevar += 3
                    tmplife = lifevar

                }

                if(guess < numb)
                {
                    tmplife --
                    lives.textContent = "Chances remaining: " + tmplife
                    hint.textContent = "Higher!"
                }

                if (guess > numb)
                {
                    tmplife --
                    lives.textContent = "Chances remaining: " + tmplife
                    hint.textContent = "Lower!"
                }}

             if (tmplife <=0 )
            {
                defeat()
            }
            
            

        } //Ending of else statement guess not blank
    } //ending first else : startstatus === true 
} //end of function 