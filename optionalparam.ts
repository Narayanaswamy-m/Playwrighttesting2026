function getDetails(name: string, age?: number, salary: number = 12.33): void {

    console.log(name, age, salary);
}


getDetails('Smruti');
getDetails('Smruti', 30);
getDetails('Tom', 30, 3.33);
getDetails('tom', 10);

