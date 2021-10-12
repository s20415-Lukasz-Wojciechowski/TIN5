//a
const myObject = {
	canCook:false,
	attack:101,
	name:"object",

	
	getInfo: function()  {
		return this;
	},
	battlecry:()=>{
		console.log(`AAAAAAAAA`);
	},
	changeName: function(name)  {
		this.name = name;
	}
}

printObjectProp = (obj)=>{
	Object.entries(obj)
		.forEach(e=>console.log(`[${e[0]}:${e[1]}] has type of  ${typeof(e[1])}`));
}

printObjectProp(myObject);