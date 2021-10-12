
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

	this.setStudentName=function(fname){
		[this.firstName,this.lastName] = fname.split(" ");
	}
}
let st = new Student("Lukasz","Wojciechowski","s20415",[3,4,5,5,4]);
st.printStudentDetails();
st.setStudentName("Ala Kot");
st.printStudentDetails();