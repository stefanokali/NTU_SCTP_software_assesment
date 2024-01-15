/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/

// Task 1: Add code here
patientList = []

function addPatient(patientName){
    // Task 2: Add code here
    patientList.push(patientName)
}

// Task 3: Add code here

function listPatient(patientList){
    //using "for" to print each one of the patient name
    for (patientName of patientList){
        console.log(patientName)
    }

    //can also print in "list" form by using this
    //console.log(patientList)
}


addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(patientList); // This should list ["John", "Mary", "Mark"]
