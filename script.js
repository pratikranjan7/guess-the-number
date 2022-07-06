var systemGuess = Math.floor(Math.random()*100)+1
var guess=0
function guessNumber()
{
    var num = document.getElementById('in').ariaValueMaxif
    if(num == '' || num>100 || num<1)
    {
        console.log('Input is not valid');
    }
    else
    {
        guess++
        var num = parseInt(document.getElementById('in').value)
        if(num === systemGuess)
        {
            // console.log('Got the answer correctly' + guess);
            document.getElementById('out').innerHTML = '<i>Got the answer correctly</i><br>You made '+guess+' guesses'
        }
        else if(num > systemGuess)
        {
            // console.log('Guess a smaller number');
            document.getElementById('out').innerText = 'Guess a smaller number'
        }
        else
        {
            // console.log('Guess a greater number');
            document.getElementById('out').innerText = 'Guess a greater number'
        }
    }
}   
