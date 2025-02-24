/*function signature/sample */
function calculateVAT(price) {
    if (typeof price !== "number" || price <= 0) {
        return "Invalid";
    }
    let vat = price * 7.5 / 100;
    return vat;
}



/*function signature/sample */
function validContact(contact) {
    if (typeof contact !== "string") {
        return "Invalid";
    }
    if (contact.length !== 11 || contact.includes(" ")) {
        return false;
    }
    if (contact === "01") {
        return false;
    }
    return true;
}




/*function signature/sample */
function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let pass = 0;
    let fail = 0;

    for (let mark of marks) {
        if (mark >= 50) {
            pass++
        } else {
            fail++
        }
    }
    return pass > fail;
}



/*function signature/sample */
function validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object") {
        return "Invalid";
    }
    if (person1.gender === person2.gender) {
        return false;
    }
    if (Math.abs(person1.age - person2.age) > 7) {
        return false;
    }
    return true;
}



/*function signature/sample */
function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    let total = 0;
    for (const time of times) {
        total = total + time
    }
    console.log(total);
    let hour = Math.floor(total / 3600);
    let minute = Math.floor((total % 3600) / 60);
    let second = Math.floor(total % 60);

    return { hour, minute, second };

}


