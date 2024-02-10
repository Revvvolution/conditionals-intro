                                               /* Fundamentals 6 Exercise - Conditionals */

                    /* 1. - Check Your Math */

                /* Use JavaScript to check and see if the following comparisons are true. For each of the following, 
                log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
                -   Is the sum of 1 and 1 greater than 5?
                -   Is the product of 4 and 5 less than our equal to 20?
                -   Is the difference between 6 and 2 greater than or equal to 0? */
if ((1+1) > 5) {
    console.log("True fact!")
}else {
    console.log("Lies!")
}

if ((4 * 5) <= 20) {
    console.log("True fact!")
}else {
    console.log("Lies!")
}

if ((6-2) >= 0) {
    console.log("True fact!")
} else {
    console.log("Lies!")
}


/******************************************************************************************************************************************************/
/******************************************************************************************************************************************************/


                    /* 2. - Dog People vs. Cat People */

                //1. In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
var likesDogs = false    
                //2. If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.  
if (likesDogs === true) {
    console.log("You're a dog person!")
}else {
    console.log("You're a cat person!")
}                        


/******************************************************************************************************************************************************/
/******************************************************************************************************************************************************/


                    /* 3. - Greetings */

                /* In your JavaScript file, create a new object representing a person. Your object should have at least two properties: 
                one for the person's name and one for their preferred language. */
const person1 = {
    name: "Kramer",
    prefLang: "French",
    friends: ["Jerry", "Elaine", "George", "Newman..."]
}
                    //Write a conditional that checks for the following:
                /* If the person's preferred language is English, print "Hello, [name]!" to the console.
                If the person's preferred language is Spanish print "Hola, [name]!" to the console.
                If their preferred language is French, print "Bonjour, [name]!" to the console. */

if(person1.prefLang === "English") {
    console.log("Hello, " + person1.name + "!");
}else if(person1.prefLang === "Spanish") {
    console.log("Hola, " + person1.name + "!");
}else if(person1.prefLang === "French") {
    console.log("Bonjour, " + person1.name + "!");
}


/******************************************************************************************************************************************************/
/******************************************************************************************************************************************************/


                    /* 4. - Student Grades */

                /* In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
                Write a conditional that converts the number grade to a letter grade:
                If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
                If it's between 70 and 76, log "You got a D" to the console.
                If it's between 77 and 84, log "You got a C" to the console.
                If it's between 84 and 92, log "You got a B" to the console.
                If it's between 93 and 100, log "You got an A" to the console.*/

const grade = 88;

if(grade >= 0 && grade <= 69) {
    console.log("You got an F");
}else if(grade >= 70 && grade <= 76) {
    console.log("You got a D");
}else if(grade >= 77 && grade <= 84) {
    console.log("You got a C");
}else if(grade >= 85 && grade <= 92) {
    console.log("You got a B");
}else if(grade >= 93 && grade <= 100) {
    console.log("You got an A");
}else {
    console.log("Invalid Grade Input");
}
