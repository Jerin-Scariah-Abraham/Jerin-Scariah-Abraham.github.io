globalStore = {};
globalStore.landscape = {"data":
								{"values":[
								   1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
								   111,112,113,114,115,116,117,118,119,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124
								]},
						 };
DCCode = "data";
landscape = "values";
var sphere3D;
function prepareSphere(DCCode){
	sphere3D.prepareSphere(DCCode);
}

function prepareFooter(){
	$("#footerButtons").append("<div id='myFriends'><span> My Friends </span></div>");
	$("#footerButtons").append("<div id='myJourney'><span> my Journey </span></div>");
	
	$("#myJourney").click(function(){
		$('.flip-container').addClass('flipPlease');
	});
	
	$("#myFriends").click(function(){
		$('.flip-container').removeClass('flipPlease');
	});
}

function journeyTiles(){	
	
	for(var i=0;i<dataJSON.journey.length;i++){		
		var journeyTile = "<div class='journeyTile'><div class='titleJ'>#"+dataJSON.journey[i].title+"</div><div class='journeyImage' style='height:100%;background-image:url("+dataJSON.journey[i].pic+")' ></div> <div class='journeyFeeling'>"+dataJSON.journey[i].feeling+"</div></div>"
		$("#containerBack").append(journeyTile);
		
	}
}

sphere3D = {
		sphereData: [],
		xrotu : 0,
		xrotl : 0,
		zdirection:0 ,
		prepareSphere: function(DCCode){
			
			this.sphereData = [];
			$("#container").css("background-color","#FDFAFA");
			for(var i=0;i < dataJSON.team.length;i++)
			{
				this.sphereData.push(dataJSON.team[i]);
			}
			
			this.render(DCCode);
			
			var that = this;
			// Events
			$("#sphereLeft").click(function(){
				that.xrotl += 10;
				$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
				$("#stage").css("-webkit-transition-duration","1s");
			});
			
			$("#sphereRight").click(function(){
				that.xrotl -= 10;
				$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
				$("#stage").css("-webkit-transition-duration","1s");
			});
			
			$("#sphereUp").click(function(){
				that.xrotu -=5;
				$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
				$("#stage").css("-webkit-transition-duration","1s");
			});
			
			$("#sphereDown").click(function(){
				that.xrotu +=5;
				$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
				$("#stage").css("-webkit-transition-duration","1s");
			});
			
			$(document).keydown(function(e) {
				switch (e.keyCode) {
					case 37:
						that.xrotl += 10;
						$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
						$("#stage").css("-webkit-transition-duration","0.5s");
						break;
					case 39:
						that.xrotl -= 10;
						$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
						$("#stage").css("-webkit-transition-duration","0.5s");
						break;
					case 38:
						that.xrotu -=5;
						$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
						$("#stage").css("-webkit-transition-duration","0.5s");
						break;
					case 40:
						that.xrotu +=5;
						$("#stage").css("-webkit-transform"," rotateY("+that.xrotl+"deg) "+ "rotateX("+that.xrotu+"deg) ");
						$("#stage").css("-webkit-transition-duration","0.5s");
						break;
					case 107:
					case 187:
			                  that.zdirection = that.zdirection + 100;
			                  if(that.zdirection > 1500)
			                  {
			                         that.zdirection = 1500;
			                  }
			                  if(that.zdirection < -1500)
			                  {
			                         that.zdirection = -1500;
			                  }
			             $('#stage').css('-webkit-transform', "translateZ("+that.zdirection+"px)");
			           //  $('#stage').css('-webkit-transition', '-webkit-transform 1s');
			             break;
					case 109:
					case 189:
			                  that.zdirection = that.zdirection - 100;
			                  if(that.zdirection > 1500)
			                  {
			                         that.zdirection = 1500;
			                  }
			                  if(that.zdirection < -1500)
			                  {
			                         that.zdirection = -1500;
			                  }
			             $('#stage').css('-webkit-transform', "translateZ("+that.zdirection+"px)");
			            // $('#stage').css('-webkit-transition', '-webkit-transform 1s');
						break;
				}
				});
			
            $('#stage').bind('mousewheel', function(event) {
            	
            	  var scrollUp = false;
            	  if(event.originalEvent.wheelDelta /120 > 0)
            		  scrollUp = true;
            		  
                  that.zdirection = (!scrollUp ? (that.zdirection - 100) :(that.zdirection + 100));
                  if(that.zdirection > 1500)
                  {
                         that.zdirection = 1500;
                  }
                  if(that.zdirection < -1500)
                  {
                         that.zdirection = -1500;
                  }
             $('#stage').css('-webkit-transform', "translateZ("+that.zdirection+"px)");
             //$('#stage').css('-webkit-transition', '-webkit-transform 1s');
             return false;
            });
            
            
        	//   CLICKING ON CLV ENTITY....... 
			$(".clv_entity_container").dblclick(
					
					function()
					{
						exploreEntity.selectedView='sphere';
      					exploreEntity.drillDown("shape_",this);	     // append popup on container
					}
					
			);		
			// CLICKING ON CLV ENTITY...

		},
		render: function(DCCode){
		
//			$("#container").append("<div id='sphereNav' class='navigateSphere'>  </div>");
//
//            $("#sphereNav").append("<div id='sphereLeft'>  </div>");
//
//            $("#sphereNav").append("<div id='sphereRight'>  </div>");
//
//            $("#sphereNav").append("<div id='sphereUp'>  </div>");
//
//            $("#sphereNav").append("<div id='sphereDown'>  </div>");


			
/*				$("#container").append("<div id='sphereLeft' class='navigateSphere'>  </div>");
				$("#container").append("<div id='sphereRight' class='navigateSphere'>  </div>");
				$("#container").append("<div id='sphereUp' class='navigateSphere'>  </div>");
				$("#container").append("<div id='sphereDown' class='navigateSphere'>  </div>");*/
			
				$("#container").append("<div id='containerSphere' ></div>");
				$("#containerSphere").append("<div id='stage' ></div>");
				$("#stage").append("<div id='shape_0' ></div>");
			
				var totalEntities = this.sphereData.length;
				var rows = 0;
				if(totalEntities > 25)
				{
					rows = Math.ceil(totalEntities/5);
				}
				console.log(rows);
				var remaining = totalEntities - (rows * 5);
				
				var index=0;
				var count = 0;
				for(var i=0;i< this.sphereData.length;i++) {
					var id = this.sphereData[i];
//					var clv = $(globalStore.clvHTMLObject["clvEntityPE_"+id]).clone();
					var clv = "<div id='friend_"+i+"' class='sphereFriend'>"+id.name+" </div>"
					
					
					//$(clv).addClass("scale");
					$(clv).css("top","-10px").css("left","-35px");					
					//$("#shape_"+count+"").append($(clv));
					$("#shape_"+count+"").append("<div id='wrap_"+i+"' class='entity_"+count+"'></div>");
					$("#wrap_"+i).append($(clv));
					$("#wrap_"+i).append("<div id='"+i+"' class='popout'/>");
					$("#wrap_"+i).addClass("wrap");
					//$("#wrap_"+id).addClass("entity");
					
					if(index == (rows -1))
					{
						index=0;
						count++;
						$("#stage").append("<div id='shape_"+count+"' ></div>");
					}
					else{
						index++;
					}
				 //index++;
				 			 
				}
				
				$(".popout").click(function(){
					var id= $(this).attr('id');
					sphere3D.renderPopout($("#friend_"+id).text().trim());
				});
				
				var index = 0;
				$(".entity_0").each(function(){
					index++;
                    $(this).animate({ "-webkit-transform" :" rotateY("+(360/rows)*index+"deg) rotateX(20deg) scale(0.6) translateZ(380px)"},1000);
					$(this).css("-webkit-transform"," rotateY("+(360/rows)*index+"deg) rotateX(20deg) scale(0.6) translateZ(380px)");
					$(this).attr("rotate-X","20");
					$(this).attr("rotate-Y",(360/rows)*index);
					$(this).attr("shape","shape_0");
					
					$(this).click(function(){
						sphere3D.bringInFront($(this));
					});
				});
				
				var index = 0;
			
				$(".entity_1").each(function(){
					index++;
					$(this).css("-webkit-transform"," rotateY("+(360/rows)*index+"deg) rotateX(50deg) rotateZ(0deg) scale(0.6) translateZ(380px)");
					$(this).attr("rotate-X","50");
					$(this).attr("rotate-Y",(360/rows)*index);
					$(this).attr("shape","shape_1");
					
					$(this).click(function(){
						sphere3D.bringInFront($(this));
					});
				});
				
				var index = 0;
				$(".entity_2").each(function(){
					index++;
					$(this).css("-webkit-transform"," rotateY("+(360/rows)*index+"deg) rotateX(0deg)   scale(0.6) translateZ(380px)");
					$(this).attr("rotate-X","0");
					$(this).attr("rotate-Y",(360/rows)*index);
					$(this).attr("shape","shape_2");
					
					$(this).click(function(){
						sphere3D.bringInFront($(this));
					});
				});
				
				var index = 0;
				$(".entity_3").each(function(){
					index++;
					$(this).css("-webkit-transform"," rotateY("+(360/rows)*index+"deg) rotateX(-20deg)   scale(0.6) translateZ(380px)");
					$(this).attr("rotate-X","-20");
					$(this).attr("rotate-Y",(360/rows)*index);
					$(this).attr("shape","shape_3");
					
					$(this).click(function(){
						sphere3D.bringInFront($(this));
					});
				});
				
				index = 0;
				$(".entity_4").each(function(){
					index++;
					$(this).css("-webkit-transform"," rotateY("+(360/rows)*index+"deg) rotateX(-50deg) rotateZ(0deg)  scale(0.6) translateZ(380px)");
					$(this).attr("rotate-X","-50");
					$(this).attr("rotate-Y",(360/rows)*index);
					$(this).attr("shape","shape_4");
					
					$(this).click(function(){
						sphere3D.bringInFront($(this));
					});
				});
				
				
				//$(".clv_entity_container").removeClass("scale8");
			
		},
		bringInFront: function (ele){
			
			var matrix = new WebKitCSSMatrix($(ele).css("-webkit-transform"));
			var pi = Math.PI;
			var rotationX = Math.acos(matrix.a) * (180/pi);
			var rotationY = Math.sin(matrix.b) * (180/pi);
			
			var newX = 360 - parseInt($($(ele)).attr("rotate-X"));
			var newY = 360 - parseInt($($(ele)).attr("rotate-Y"));
			var shape = $(ele).attr("shape");
			
			this.xrotu = 0;
			this.xrotl = 0;
			
			console.log( parseInt($($(ele)).attr("rotate-X")) )
			
			$("#stage").css("-webkit-transform"," rotateX("+newX+"deg) rotateY("+newY+"deg) ");
			$("#stage").css("-webkit-transition-duration","0.5s");
			 	
			this.zdirection=0;
			// setTimeout(function(){
				// $("#"+shape).css("-webkit-transform"," rotateX("+newX+"deg) rotateY("+newY+"deg) ");
				// $("#"+shape).css("-webkit-transition-duration",".2s,1s");	
				// $(".shape").css("-webkit-transform-style","preserve-3d");
			// },1000);
			
			
			
		},
     rearrangeEntities:function(rows){
            var index = 0;
            var temp = $(".entity_1").length;
            
            $(".entity_1").each(function(){
                  index++;
                  $(this).animate({ "-webkit-transform" :" rotateY("+(360/rows)*index+"deg) rotateX(20deg) scale(0.6) translateZ(380px)"},1000);
                  $(this).css("-webkit-transform"," rotateY("+(360/temp)*index+"deg) rotateX(20deg) scale(0.6) translateZ(480px)");
                  $(this).attr("rotate-X","20");
                  $(this).attr("rotate-Y",(360/temp)*index);
                  $(this).attr("shape","shape");
                  
                  $(this).click(function(){
                         sphere3D.bringInFront($(this));
                  });
            });
            
            temp = $(".entity_3").length;
            
            var index = 0;
            $(".entity_3").each(function(){
                  index++;
                  $(this).animate({ "-webkit-transform" :" rotateY("+(360/rows)*index+"deg) rotateX(20deg) scale(0.6) translateZ(380px)"},1000);
                  $(this).css("-webkit-transform"," rotateY("+(360/temp)*index+"deg) rotateX(50deg) scale(0.6) translateZ(480px)");
                  $(this).attr("rotate-X","50");
                  $(this).attr("rotate-Y",(360/temp)*index);
                  $(this).attr("shape","shape1");
                  
                  $(this).click(function(){
                         bringInFront($(this));
                  });
            });
            
            temp = $(".entity_0").length;
            
            var index = 0;
            $(".entity_0").each(function(){
                  index++;
                  $(this).animate({ "-webkit-transform" :" rotateY("+(360/rows)*index+"deg) rotateX(20deg) scale(0.6) translateZ(380px)"},1000);
                  $(this).css("-webkit-transform"," rotateY("+(360/temp)*index+"deg) rotateX(0deg)  scale(0.6) translateZ(480px)");
                  $(this).attr("rotate-X","0");
                  $(this).attr("rotate-Y",(360/temp)*index);
                  $(this).attr("shape","shape2");
                  
                  $(this).click(function(){
                         sphere3D.bringInFront($(this));
                  });
            });
            
            temp = $(".entity_2").length;
            
            var index = 0;
            $(".entity_2").each(function(){
                  index++;
                  $(this).animate({ "-webkit-transform" :" rotateY("+(360/rows)*index+"deg) rotateX(20deg) scale(0.6) translateZ(380px)"},1000);
                  $(this).css("-webkit-transform"," rotateY("+(360/temp)*index+"deg) rotateX(-20deg) scale(0.6) translateZ(480px)");
                  $(this).attr("rotate-X","-20");
                  $(this).attr("rotate-Y",(360/temp)*index);
                  $(this).attr("shape","shape3");
                  
                  $(this).click(function(){
                         sphere3D.bringInFront($(this));
                  });
            });
            
            temp = $(".entity_4").length;
            
            $(".entity_4").each(function(){
                  index++;
                  $(this).animate({ "-webkit-transform" :" rotateY("+(360/rows)*index+"deg) rotateX(20deg) scale(0.6) translateZ(380px)"},1000);
                  $(this).css("-webkit-transform"," rotateY("+(360/temp)*index+"deg) rotateX(-50deg) scale(0.6) translateZ(480px)");
                  $(this).attr("rotate-X","-50");
                  $(this).attr("rotate-Y",(360/temp)*index);
                  $(this).attr("shape","shape4");
                  
                  $(this).click(function(){
                         sphere3D.bringInFront($(this));
                  });
            });
     },
     renderPopout: function(key){
    	 
    	 if($('#popupContainer').length >0){
    		 $('#popupContainer').show(500); 
    	 } else {
    		 $('#container').append("<div id='popupContainer'> <div class='popupTitle'></div><div class='popupClose'></div><div id='personalMessage'></div><div id='personalImages'></div> </div>")
    		 $('.popupClose').click(function(){
    			 $('#popupContainer').hide(200); 
    		 });
    	 }
    	 $("#personalMessage").empty();
    	 $("#personalImages").empty();
    	 $("#popupTitle").empty();
    	 $("#personalMessage").removeClass('personalMessage60');
    	 
    	 $(".popupTitle").text(key.split(' ')[0]+", it's time for me to leave CLM Software Logistics");
    	 
    	 if(dataJSON.messages[key].pics.length != 0){
    		 $("#personalMessage").addClass('personalMessage60');
    		 $("#personalImages").addClass('personalImages40');
    		 for(var i=0;i<dataJSON.messages[key].pics.length;i++){
    			 var imageDiv = "<div class='messageImage' style='height:100%;background-image:url("+dataJSON.messages[key].pics[i]+")'></div>";
    			 $("#personalImages").append(imageDiv);
    		 }
    	 }else{
    		 $("#personalMessage").addClass('personalMessage100');
    	 }
    	 
    	 $("#personalMessage").text(dataJSON.messages[key].msg);
     }

	};