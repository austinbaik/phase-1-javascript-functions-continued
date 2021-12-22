// code your solution here


function saturdayFun(name = "roller-skate") {
    return `This Saturday, I want to ${name}!`;
}


const mondayWork = function(task = "go to the office"){
    return `This Monday, I will ${task}.`
}

function wrapAdjective(flair = "*") {
    return function(name = "special"){
        
        return `You are ${flair}${name}${flair}!`
    }
}