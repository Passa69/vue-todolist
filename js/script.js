var app = new Vue (
    {
        el: "#myapp",
        data: {
            newTask: "",
            tasks: [
                "fare la spesa",
                "andare in palestra",
                "fare il pieno alla macchina",
                "lavare il cane"
            ]
        },
        methods: {
            removeItem(index) {
                this.tasks.splice(index,1);
            }
        }
    }
);