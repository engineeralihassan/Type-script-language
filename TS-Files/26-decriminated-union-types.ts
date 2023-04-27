console.log("All about Union types in ts");
// for interfaces
interface bird {
      type: 'bird';
      flyspeed: number;
}
interface horse {
      type: 'horse';
      runningspeed: number;
}
interface snack {
      type: 'snack';
      crowlingspeed: number;
}
type animal = bird | horse | snack;

function checkSpeed(ani: animal) {
      let speed: string;
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




