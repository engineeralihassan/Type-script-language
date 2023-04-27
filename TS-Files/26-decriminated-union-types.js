console.log("All about Union types in ts");
function checkSpeed(ani) {
    var speed;
    switch (ani.type) {
        case 'bird':
            speed = "The animal is bird and flying speed is:" + ani.flyspeed;
            break;
        case 'horse':
            speed = "The animal is Horse and Running speed is:" + ani.runningspeed;
            break;
        case 'snack':
            speed = 'This is Snakc ';
            break;
    }
    console.log(speed);
}
checkSpeed({ type: 'horse', runningspeed: 3456 });
