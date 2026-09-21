let browser = 'IE';
switch (browser) {
    case 'chrome':
        console.log("launching chrome browser");
        break;
    case 'firefox':
        console.log("launch firefox browser");
         break;   
    case 'safari':
        console.log("launch safari browser");
        break;
    case 'IE':
        console.log("launch IE browser");
       break;


    default:
        console.log("passing invalid browser");
        break;
}

// usecase
// multi env 
let env = 'STAGING';
switch (env.toLowerCase()) {
    case 'QA':
        console.log("environment is QA "); 
        break;
    case 'Dev':
        console.log("environment is Dev "); 
        break;
    case 'staging':
        console.log("environment is Staging "); 
        break;    
    case 'Preprod':
        console.log("environment is Preprod "); 
        break;    
    case 'Prod':
        console.log("environment is prod "); 
        break;
    default:
        console.log("invalid environment");
        break;
}

// print vowels and consonants 
// a , e,i,o,u - vowles 
// remaining all consonants 

let ch = 'b';
switch (ch) {
    case 'a':
        console.log('ch is a vowel');  
        break;
    case 'a':
        console.log('ch is a vowel');  
        break;
    case 'e':
        console.log('ch is a vowel');  
        break;    
    case 'i':
        console.log('ch is a vowel');  
        break;
    case 'o':
        console.log('ch is a vowel');  
        break; 
    case 'u':
        console.log('ch is a vowel');  
        break;    
        

    default:
        console.log('ch is a consonant');
        break;
}

// print days 
let day = 5;
switch (day) {
    case 1:
        console.log("day is monday "); 
        break;
    case 2:
        console.log("day is tuesday "); 
        break;
    case 3:
        console.log("day is Wednesday "); 
        break; 
    case 4:
        console.log("day is thursday "); 
        break;
    case 5:
        console.log("day is friday "); 
        break;
    case 6:
        console.log("day is saturday "); 
        break;
    case 7:
        console.log("day is sunday "); 
        break;                   
    default:
        console.log("invalid day");
        break;
}

