// Code your solution here

function findMatching(drivers, name){
    return drivers.filter(
        (driver) => driver.toUpperCase() === name.toUpperCase()
        );
    }

function fuzzyMatch(drivers,name){
    return drivers.filter(
        (driver) => driver.toUpperCase().indexOf(name.toUpperCase()) === 0
    );
}



function matchName(drivers,name){
    return drivers.filter(
        (driver) => driver.name.toUpperCase() === name.toUpperCase()
    );

}