/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


patientList = []

function addPatient(patientName){
    patientList.push(patientName)
}

function listPatient(patientList){
    for (patientName of patientList){
        console.log(patientName)
    }
}


addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(patientList); // This should list ["John", "Mary", "Mark"]