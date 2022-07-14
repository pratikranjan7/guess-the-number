var systemGuess = Math.floor(Math.random()*100)+1
var guess=0
function guessNumber()
{
    var num = document.getElementById('in').value
    if(num.length === 0)
    {
        document.getElementById("out").innerText = "Please provide a number"
    }
    else if (num>100) {
        document.getElementById("out").innerText = "Provide a number smaller than 100"
    }
    else if (num<1) {
        document.getElementById("out").innerText = "Provide a number greater than 0"
    }
    else
    {
        guess++
        var num = parseInt(document.getElementById('in').value)
        if(num === systemGuess)
        {
            document.getElementById('guess').innerText = ""
            document.getElementById('out').innerHTML = '<i>Got the answer correctly</i><br>You made '+guess+' guesses'
        }
        else if(num > systemGuess)
        {
            document.getElementById('guess').innerText = "Guesses Made: "+guess
            document.getElementById('out').innerText = 'Guess a smaller number'
        }
        else
        {
            document.getElementById('guess').innerText = "Guesses Made: "+guess
            document.getElementById('out').innerText = 'Guess a greater number'
        }
    }
} 
