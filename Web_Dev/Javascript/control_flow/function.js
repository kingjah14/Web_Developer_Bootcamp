while (true) {
    var max = 0;
    var imax = 0;
    var mountainH = 9;
    for (var i = 0; i < 8; i++) {
         // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        if (mountainH > max) {
            max = mountainH;
            imax = i;
        }
        mountainH -= 1;
        console.log(mountainH);
    }

    //console.log(imax);
}