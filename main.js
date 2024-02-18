const dinnerApp = Vue.createApp({
    data() {
        return {
            dinners: [
                { title: 'Kycklinggryta' },
                { title: 'Hamburgare' },
                { title: 'Kycklingburgare' },
                { title: 'Spaghetti och köttfärssås' },
                { title: 'Pannkakor' },
                { title: 'Tacos' },
                { title: 'Laxpasta' },
                { title: 'Räkpasta' },
                { title: 'Pannbiff och potatis' },
                { title: 'Biff stroganoff' },
                { title: 'Omelett' },
                { title: 'Lasagne' },
            ],
            currentDinner: null,
            iterations: 3,
            currentIterations: 0,
            buttonText: "Vad blir det för käk?",
            buttonColor: "#ffa705",
            changeColor: false,
        }
    },
    methods: {
        generateDinner() {
            let index = 0;

            let intervalId = setInterval(() => {
                this.currentDinner = index;
                index++;
                if (index === this.dinners.length) {
                    this.currentIterations++;
                    if (this.currentIterations >= this.iterations) {

                        clearInterval(intervalId);
                        this.$nextTick(() => {
                            this.currentDinner = Math.floor(Math.random() * this.dinners.length);
                            this.currentIterations = 0;
                            
                            setTimeout(() => {
                                this.buttonText = "Wow vad gott med " + this.dinners[this.currentDinner].title + "!";
                                this.changeColor = "true";
                            }, 500);
                        });
                    }
                    else {
                        index = 0;
                    }
                }
            }, 60);

        },
    }
});

dinnerApp.mount("#dinner")