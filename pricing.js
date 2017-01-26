var video = ["None", "1 min", "2 min", "3 min", "4 min", "5 min", "6 min", "7 min", "8 min", "9 min", "10 min"]
var photo = ["None", "5 photos", "10 photos", "15 photos", "20 photos", "25 photos", "30 photos", "35 photos", "40 photos", "45 photos", "50 photos"]

var sliderVals = {
  slider1: 0,
  slider2: 0,
  slider3: 0,
  slider4: 0
};

$(".slider-1")
                    
    .slider({ 
        min: 0, 
        max: video.length-1
    })
                    
    .slider("pips", {
        rest: "label",
        labels: video
    })
    .on( "slidechange", function(event, ui) {
      sliderVals.slider1 = ui.value * 185;
      $('.price-1').text('Total = $' + ui.value * 185 + '.00');
      addTotal();
    });

$(".slider-2")
                    
    .slider({ 
        min: 0, 
        max: photo.length-1, 
    })
                    
    .slider("pips", {
        rest: "label",
        labels: photo
    });

$( ".slider-2" ).on( "slidechange", function(event, ui) {
  sliderVals.slider2 = ui.value * 25;
  $('.price-2').text('Total = $' + ui.value * 25 + ".00");
  addTotal();
});

$(".slider-3")
                    
    .slider({ 
        min: 0, 
        max: video.length-1, 
    })
                    
    .slider("pips", {
        rest: "label",
        labels: video
    });

$( ".slider-3" ).on( "slidechange", function(event, ui) {
  sliderVals.slider3 = ui.value * 100;
  $('.price-3').text('Total = $' + ui.value * 100 + ".00");
  addTotal();
});

$(".slider-4")
                    
    .slider({ 
        min: 0, 
        max: photo.length-1, 
    })
                    
    .slider("pips", {
        rest: "label",
        labels: photo
    });

$( ".slider-4" ).on( "slidechange", function(event, ui) {
  sliderVals.slider4 = ui.value * 20;
  $('.price-4').text('Total = $' + ui.value * 20 + ".00");
  addTotal();
});

function addTotal() {
  var total = sliderVals.slider1 + sliderVals.slider2 + sliderVals.slider3 + sliderVals.slider4
  console.log(total)
  $("#final-price").text("Total=$" + total + ".00")
}

