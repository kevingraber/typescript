var MyMath;
(function (MyMath) {
    function calculateArea(width, length) {
        return width * length;
    }
    MyMath.calculateArea = calculateArea;
})(MyMath || (MyMath = {}));
