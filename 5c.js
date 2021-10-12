function Student(firstName,lastName,id,grades){
 
		this.firstName=firstName;
		this.lastName=lastName;
		this.id=id;
		this.grades=grades;
 
 
	this.getStudentInfo = function(){
		return this.firstName+" "+this.lastName;
	}

	this.getGradeAvg = function(){
		return this.grades.reduce((a,b)=>a+b)/(this.grades.length);
	}

	this.printStudentDetails=function(){
		console.log(`${this.getStudentInfo()} avg:${this.getGradeAvg()}`);
	}

}
let st1 = Object.create(new Student('adam','smith','s321',[2,1,3,4]));
st1.printStudentDetails();
Student.prototype.courses = ['Math', 'IT', 'English', 'TIN'];
let st2 = new Student('Mark','Sth','s2312',[3,2,1,1,6])
st2.printStudentDetails();
console.log("st1:"+st1.courses+"\nst2:"+st2.courses);