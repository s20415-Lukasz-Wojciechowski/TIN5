//f

class Person{
		constructor(firstName,lastName){
		this.firstName=firstName;
		this.lastName=lastName;
	}

	getFullName(){
		return `${this.firstName} ${this.lastName}`
	}
	setFullName(fname){
		[this.firstName,this.lastName] = fname.split(" ");
	}
}

class Student extends Person{
	constructor(firstName,lastName,id,grades){
		super(firstName,lastName);
		this.id=id;
		this.grades=grades;
	}

	getGradeAvg(){
		return this.grades.reduce((a,b)=>a+b)/(this.grades.length);
	}

	printStudentDetails(){
		console.log(`${this.getFullName()} avg:${this.getGradeAvg()}`);
	}
}


let st = new Student("Lukasz","Wojciechowski","s20415",[3,4,5,5,4]);
st.printStudentDetails();