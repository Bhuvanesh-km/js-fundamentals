let ladder={
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    show(){
        console.log(this.step);
        return this;
    }
}

// ladder.show();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.up();
// ladder.show();

ladder.show().up().down().up().up().show().down().show();