
const btn = document.querySelector('.new-quote');
console.log(btn);
const quote = document.querySelector('.quote');
console.log(quote);
const person = document.querySelector('.person')
console.log(person); 

const quotes = [ {
        quot:  `" A day without a laughter is a day wasted so my 
        dear friend try to be happy even for seconds everyday"`,
        persn:`charles chaplin`
    },{
    quot:`"the best way to find yourself is to lose yourself in servise 
    of others."`,
    persn:`Mahatma Ghandi`
}, {
    quot:`"if you want to live a happy life,tie it to a goal,
    not to people or things."`,
    persn:`Albert Einstein`
}, {
    quot:`"your time is limited, so don't waste it living someone
    else's life."`,
    persn:`steve jobs`
}, {
    quot:`"tell me and I forget,teach me and I remenber,involve me 
    and I learn"`,
    persn:`Benjamin Franklin`
}, {
    quot:`"ours lives begins to end the day we became silent about
    things that matter."`,
    persn:`Martin Luther King.jr`
}, {
    quot:`"The journey of a thousand miles begins with one step."`,
    persn:`Lao Tzu`
}, {
    quot:`"Remember that not getting what you want is sometimes a
    wonderful stroke of of luck."`,
    persn:`Dalai Lama`
}]

function displayNew(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quot;
    person.innerText = quotes[random].persn;
}
btn.addEventListener('click',displayNew);

