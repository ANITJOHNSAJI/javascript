// class Synnefo{
//     constructor(){
//         this.a=10
//         console.log("register")
//     }
//     python(){
//         console.log("python");
//     }
//     mern(){
//         console.log("mern");
//     }
// }
// manu=new Synnefo()
// manu.python()
// manu.mern()
// console.log(manu);

// inheritance

class Synnefo{
    constructor(){
        this.a=10
        console.log("register")
    }
    python(){
        console.log("python");
    }
    mern(){
        console.log("mern");
    }
}
class Novavi extends Synnefo{
    constructor(){
        
        console.log("novaviregistration")
        super()
    }
    dev(){
        console.log("dev");
    }
}
manu=new Synnefo()
manu.python()
manu.mern()
console.log(manu);

staff=new Novavi()
staff.dev()