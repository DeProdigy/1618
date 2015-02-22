var pathObj = {
    "1618Logo": {
        "strokepath": [
            {
                "path": "M1,1 L200,1 L200,200 L1,200 L1,1 Z",
                "duration": 1600
            },
            {
                "path": "M123,1 L123,123",
                "duration": 1600
            },
            {
                "path": "M1,123 L200,123",
                "duration": 1600
            },
            {
                "path": "M123,76 L200,76",
                "duration": 1600
            },
            {
                "path": "M153,76 L153,123",
                "duration": 1600
            },
            {
                "path": "M123,95 L153,95",
                "duration": 1600
            },
            {
                "path": "M141,76 L141,95",
                "duration": 1600
            },
            {
                "path": "M141,87 L153,87",
                "duration": 1600
            },
            {
                "path": "M146,87 L146,95",
                "duration": 1600
            },
            {
                "path": "M141,90 L146,90",
                "duration": 1600
            }
        ].reverse(),
        "dimensions": {
            "width": 201,
            "height": 201
        }
    }
};

$(document).ready(function(){
  $('#1618Logo').lazylinepainter(
    {
      "svgData": pathObj,
      "strokeWidth": 1,
      "strokeColor": "#41D4FB",
      "drawSequential": false,
      "onStart": something()
    }
  ).lazylinepainter('paint');
});

 function something() {
    $('.motto').hide().fadeIn(2400);
    $('.mail-to').hide().fadeIn(1600);
    $('#1618Logo').hide().fadeIn(1600);
 }


