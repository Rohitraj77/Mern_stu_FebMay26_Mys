// function tagPassword(password) {

//     // Check if input is a string
//     if (typeof password !== "string") {
//         return "INVALID";
//     }

//     let hasLetter = false;
//     let hasNumber = false;

//     // Scan characters using for loop
//     for (let i = 0; i < password.length; i++) {
//         let ch = password[i];

//         // Check for letter
//         if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//             hasLetter = true;
//         }

//         // Check for number
//         if (ch >= '0' && ch <= '9') {
//             hasNumber = true;
//         }
//     }

//     // Apply rules
//     if (password.length < 8) {
//         return "WEAK";
//     }

//     if (password.length >= 12 && hasLetter && hasNumber) {
//         return "STRONG";
//     }

//     if (password.length >= 8 && hasLetter && hasNumber) {
//         return "MEDIUM";
//     }

//     return "WEAK";
// }

// console.log(tagPassword("abc"));          // WEAK
// console.log(tagPassword("abc12345"));     // MEDIUM
// console.log(tagPassword("abc123456789")); // STRONG
// console.log(tagPassword(12345));          // INVALID

// function tagEmail(email) {

//     if (typeof email !== "string") {
//         return "INVALID";
//     }

//     let hasLetter = false;
//     let hasNumber = false;

//     for (let i = 0; i < email.length; i++) {

//         if (email[i] >= 'a' && email[i] <= 'z') {
//             hasLetter = true;
//         }

//         if (email[i] >= '0' && email[i] <= '9') {
//             hasNumber = true;
//         }
//     }

//     if (email.length < 6) {
//         return "SHORT";
//     }

//     if (email.length >= 10 && hasLetter && hasNumber) {
//         return "STRONG";
//     }

//     if (email.length >= 6 && hasLetter && hasNumber) {
//         return "VALID";
//     }

//     return "SHORT";
// }
// console.log(tagEmail(111));



function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLetter = true;
        }
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
        }
    }

    if (password.length < 8) {
        return "Weak";
    }
    
    if (password.length >= 12 && hasLetter && hasNumber) {
        return "Strong";
    }

    if (password.length >= 8 && hasLetter && hasNumber) {
        return "Medium";
    }

    return "Valid";
}

let password = "rohit12";
console.log(tagPassword(password));