// var app = new Vue (
//     {
//         el: "#myapp",
//         data: {
//             newTask: "",
//             tasks: [
//                 "fare la spesa",
//                 "andare in palestra",
//                 "fare il pieno alla macchina",
//                 "lavare il cane"
//             ]
//         },
//         methods: {
//             removeItem (index) {
//                 this.tasks.splice(index,1);
//             },

//             addTask () {
//                 if(this.newTask.length > 0 && this.newTask[0] !== ' ') {
//                     this.tasks.push(this.newTask);
//                     this.newTask = "";
//                 }   
//             }
//         }
//     }
// );
var app = new Vue (
    {
        el: "#myapp",
        data: {
            newTask: "",
            tasks: [ 
                {
                    text: "fare la spesa",
                    done: true
                },

                {
                    text: "andare in palestra",
                    done: false
                },

                {
                    text: "fare il pieno alla macchina",
                    done: false
                },

                {
                    text: "lavare il cane",
                    done: true
                }  
            ]
        },
        methods: {
            removeItem (index) {
                this.tasks.splice(index,1);
            },

            addTask () {
                if(this.newTask.length > 0 && this.newTask[0] !== ' ') {
                    this.tasks.push({
                        text: this.newTask,
                        done: false
                    });
                    this.newTask = "";
                }   
            }
        }
    }
);