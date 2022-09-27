const fs = require("fs");
const path = require("path");

const fileName = "data"

class UserDatabse {
  constructor() {
    this.db = this.readData(fileName);
  }
  resolvePath(resource) {
    return path.join(__dirname, `${resource}.json`);
  }

  readData(resource) {
    let data;
    try {
      data = fs.readFileSync(this.resolvePath(resource), "utf-8");
      data = JSON.parse(data)
    } catch (error) {
      if (error){
        this.createFile(resource);
        data=[];
      }
    }
    return data;
  }

  createFile(resource){
    fs.writeFileSync(this.resolvePath(resource),JSON.stringify([]))  
  }
  
  writeFile(resource){ 
    fs.writeFileSync(this.resolvePath(resource),JSON.stringify(this.db));  

  }

  createUser(user_name,email,password){
   this.db=[...this.db,{user_name,email,password,id : this.generateId()}]; 
   this.writeFile(fileName);
  }
  getAll(){
    return this.db;
  }
  findOne(key,value){
    const res = this.db.find(item=>item[key] === value );
    return res;
  }
  findAll(key,value){
    const res = this.db.filter(item=>item[key]=== value);
    return res;
  }
  
  generateId(){
    return '_' + Math.random().toString(36).substr(2, 9)
  }
  
}


module.exports = UserDatabse;
