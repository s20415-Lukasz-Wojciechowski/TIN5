//e
class Student {
	constructor(firstName,lastName,id,grades){
		this.firstName=firstName;
		this.lastName=lastName;
		this.id=id;
		this.grades=grades;
	}
 
	getStudentInfo(){
		return this.firstName+" "+this.lastName;
	}

	getGradeAvg(){
		return this.grades.reduce((a,b)=>a+b)/(this.grades.length);
	}

	printStudentDetails(){
		console.log(`${this.getStudentInfo()} avg:${this.getGradeAvg()}`);
	}

	setStudentName(fname){
		[this.firstName,this.lastName] = fname.split(" ");
	}
}
let st = new Student("Lukasz","Wojciechowski","s20415",[3,4,5,5,4]);
st.printStudentDetails();