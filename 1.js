		var stockholm = new google.maps.LatLng(24.32522, 25.07002);
		var render1=0;
		var marker;
		var map;
        var infowindow;
        var intervel;
        var data=[];
		function initialize() {
			
		  var mapOptions = {
		    zoom: 3,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    maxZoom: 3,
		    disableDefaultUI: true,
		    center: stockholm,
		    scrollwheel: false,
		     animation:google.maps.Animation.DROP
		  };
		
		  map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
		//pie();
		  
	   }
		
		function clearmap(){
			var mapOptions = {
		    zoom: 3,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    maxZoom: 3,
		    disableDefaultUI: true,
		    center: stockholm,
		    scrollwheel: false
		  };
		
		  map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
		}
		
		function toggleBounce() {
		
		  	infowindow.open(map,marker);
		  
		}
		
		function render(message){
		     
		     data=[];  	 
		 	  var tweet=JSON.parse(message);
		 	  
		 	  for(var i=0;i<window.count.length;i++){
		 	  	var f=tweet.text;
		 	  	f=f.toLowerCase();
		 	  	
			      if(f.indexOf(window.count[i].room)!==-1){
					window.count[i].count++;
					
					var obj=Object();
					obj.label=window.count[i].room;
					obj.value=window.count[i].count;
					data.push(obj);
				  }
			 }
			 
		     
		
		 	  
		 	   if(tweet.coordinates!==undefined && tweet!==null){
			 	   var parliament = new google.maps.LatLng(tweet.coordinates[1],tweet.coordinates[0]);
			 	   var marker = new google.maps.Marker({
				    map:map,
				    animation: google.maps.Animation.DROP,
				    position: parliament
				  });
				  google.maps.event.addListener(marker, 'click', toggleBounce);
				  
			  }
			  
		tweetlive(tweet.text,tweet.pic);
      }
      

function tweetlive(tweet,pic){
	 if(render1==1){
			var lt=document.getElementById("livetweet");
			var content='<div class="wrapper"><div class="user_img"><img  src="'+pic+'"/></div><div class="user_tweet">'+ tweet+'</div></div>';
			lt.innerHTML=content+lt.innerHTML;
	}
	
}

      
      /**
 * Gray theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
   colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: [0, 0, 0, 400],
         stops: [
            [0, 'rgb(96, 96, 96)'],
            [1, 'rgb(16, 16, 16)']
         ]
      },
      borderWidth: 0,
      borderRadius: 0,
      plotBackgroundColor: null,
      plotShadow: false,
      plotBorderWidth: 0
   },
   title: {
      style: {
         color: '#FFF',
         font: 'bold 24px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
      }
   },
   subtitle: {
      style: {
         color: '#DDD',
         font: '18px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
      }
   },
   xAxis: {
      gridLineWidth: 0,
      lineColor: '#999',
      tickColor: '#999',
      labels: {
         style: {
            color: '#999',
            fontWeight: 'bold'
         }
      },
      title: {
         style: {
            color: '#AAA',
            font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
         }
      }
   },
   yAxis: {
      alternateGridColor: null,
      minorTickInterval: null,
      gridLineColor: 'rgba(255, 255, 255, .1)',
      lineWidth: 0,
      tickWidth: 0,
      labels: {
         style: {
            color: '#999',
            fontWeight: 'bold'
         }
      },
      title: {
         style: {
            color: '#AAA',
            font: 'bold 24px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
         }
      }
   },
   legend: {
      itemStyle: {
         color: '#CCC'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#333'
      }
   },
   labels: {
      style: {
         color: '#CCC'
      }
   },
   tooltip: {
      backgroundColor: {
         linearGradient: [0, 0, 0, 50],
         stops: [
            [0, 'rgba(96, 96, 96, .8)'],
            [1, 'rgba(16, 16, 16, .8)']
         ]
      },
      borderWidth: 0,
      style: {
         color: '#FFF'
      }
   },


   plotOptions: {
      line: {
         dataLabels: {
            color: '#CCC',
            fontWeight: 'bold',
            fontSize:'18px'
         },
         marker: {
            lineColor: '#333'
         }
      },
      spline: {
         marker: {
            lineColor: '#333'
         }
      },
      scatter: {
         marker: {
            lineColor: '#333'
         }
      },
      candlestick: {
         lineColor: 'white'
      }
   },

   toolbar: {
      itemStyle: {
         color: '#CCC'
         
      }
   },

   navigation: {
      buttonOptions: {
         backgroundColor: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#606060'],
               [0.6, '#333333']
            ]
         },
         borderColor: '#000000',
         symbolStroke: '#C0C0C0',
         hoverSymbolStroke: '#FFFFFF'
      }
   },

   exporting: {
      buttons: {
         exportButton: {
            symbolFill: '#55BE3B'
         },
         printButton: {
            symbolFill: '#7797BE'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
         stroke: '#000000',
         style: {
            color: '#CCC',
            fontWeight: 'bold'
         },
         states: {
            hover: {
               fill: {
                  linearGradient: [0, 0, 0, 20],
                  stops: [
                     [0.4, '#BBB'],
                     [0.6, '#888']
                  ]
               },
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: {
                  linearGradient: [0, 0, 0, 20],
                  stops: [
                     [0.1, '#000'],
                     [0.3, '#333']
                  ]
               },
               stroke: '#000000',
               style: {
                  color: 'yellow'
               }
            }
         }
      },
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(16, 16, 16, 0.5)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      }
   },

   scrollbar: {
      barBackgroundColor: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
      barBorderColor: '#CCC',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
      buttonBorderColor: '#CCC',
      rifleColor: '#FFF',
      trackBackgroundColor: {
         linearGradient: [0, 0, 0, 10],
         stops: [
            [0, '#000'],
            [1, '#333']
         ]
      },
      trackBorderColor: '#666'
   },

   // special colors for some of the demo examples
   legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
   legendBackgroundColorSolid: 'rgb(70, 70, 70)',
   dataLabelsColor: '#444',
   textColor: '#E0E0E0',
   maskColor: 'rgba(255,255,255,0.3)'
};

     
function RenderPieChart(elementId, dataList) {
	var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
    new Highcharts.Chart({
        chart: {
            renderTo: elementId,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        }, title: {
            text: 'Twitter Analysis',
            style:{
            	color:"#ffffff"
            }
            
        },                    
        tooltip: {
            formatter: function () {
            	         return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed(2) +' %';
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    connectorColor: '#FFFFFF',
                    fontWeight: 'bolder',
					fontSize:'24px',
                    formatter: function () {
                        return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed(2) +' % (' + this.point.y + ')';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
                data: dataList
            }]
  });
  }
          					


function moveit(){
	var x=(window.event.clientX);
	var y=(window.event.clientY);
     var f=$(document).height();
     
     var upperbar=document.getElementById("upperbar");
     var lowerbar=document.getElementById("about");
     
    if(y < 40){
    	
		upperbar.style.display="block";
	}else{
		upperbar.style.display="none";
	}
	
	if(f-y < 18){
		lowerbar.style.display="block";
	}else{
		lowerbar.style.display="none";
	}
}


function checkenter(event){
	var unicode=event.keyCode? event.keyCode : event.charCode
    if(unicode===13){
    clearmap();
    lt=document.getElementById("livetweet");;
    lt.innerHTML="";
    
  	now.changeRoom($('#newroom').val());
    var query=$('#newroom').val();
  	var rooms=query.split(',');
  	
  	//window.count=[];
  	var flag=0;
  	
  	for(var i=0;i<window.count.length;i++){
  		flag=0;
  		
  		for(var j=0;j<rooms.length;j++){
  			
  			if(rooms[j]===window.count[i].room){
  				
  			   flag=1;
  			   break;	
  			}
  		}	
  			 if(flag===0){
  			 	     
  			 		   	window.count.splice(i,1);
  			 		   	i--;
  			 }
	}
	
  	 
  	 floag=0;
  	for(var i=0;i<rooms.length;i++){
		flag=0;
		for(var j=0;j<window.count.length;j++){
			if(rooms[i]===window.count[j].room){
			   flag=1;
			   break;	
			}
		}	
		 if(flag==0){
		 	var obj=Object();
		 	obj.room=rooms[i].toLowerCase();
		 	obj.count=0;
		 	window.count.push(obj);
		 }
	}
	
	 
  }   	
   	
 }



function startanalysis(){
	render1=0;
	var an=document.getElementById("analysisgrpah");
	var ltwit=document.getElementById("ltwit");
	
	if(ltwit.style.display!=="none"){
		ltwit.style.display="none";
	}
	
	an.style.display="block";
	
	RenderPieChart('container', getdata());
intervel=setInterval(function(){
			
			
			RenderPieChart('container', getdata());
		},5000);
}

function getdata(){
	var data=[];
	for(var i=0;i<window.count.length;i++){
	     
			
			var label=[];
			label.push(window.count[i].room);
			label.push(window.count[i].count);
			data.push(label);
		 
		}
		
		
	 return data;	
}


function closeanalysis(){
	
	var close=document.getElementById("analysisgrpah");
	close.style.display="none";
	clearInterval(intervel);
	render1=0;
}     

function closelivetwit(){
	var ltwit=document.getElementById("ltwit");
	ltwit.style.display="none";
	render1=0;
}
function livetwit(){
	
	var ltwit=document.getElementById("ltwit");
	var close=document.getElementById("analysisgrpah");
	if(close.style.display!=="none"){
		close.style.display="none";
	}
	ltwit.style.display="block";
	render1=1;
}




