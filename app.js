var m1app = angular.module("m1app", ["ngSanitize","ui.bootstrap"]);

m1app.filter('html', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

m1app.service('productService', function() {
   var autoplay=[{ 
					"autoplayvideo": "true",
					"videotobeautoplay":"myVideo0",
					"videoid":"myVideo",
					"previousvideo":"myVideo0",
					"playbygridvalue":false
				 }];
  var record =[{
		thumbanailUrl:"../Images/ContentImage-4Tiles-Carousel-Seniors-1x.jpg",
        videorul: "./vid2.mp4",
        caption: "HUAWEI1",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
		
      }, {
		thumbanailUrl:"../Images/ContentImage-4Tiles-Carousel-Youth-1x.jpg",  
        videorul: "./vid1.mp4",
        caption: "APPLE2",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
      }, {
		thumbanailUrl:"../Images/ContentImage-4Tiles-product1-1x.jpg",  
        videorul: "./vid2.mp4",
         caption: "SAMSUNG3",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:""
      }, {
		thumbanailUrl:"../Images/ContentImage-4Tiles-product2-1x.jpg",  
        videorul: "./vid2.mp4",
        caption: "HUAWEI4",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
      },{
		thumbanailUrl:"../Images/ContentImage-4Tiles-product3-1x.jpg",  
        videorul: "./vid2.mp4",
         caption: "HUAWEI5",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
      },{
		thumbanailUrl:"../Images/ContentImage-4Tiles-product4-1x.jpg",  
        videorul: "./vid2.mp4",
        caption: "HUAWEI6",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
      },{
		thumbanailUrl:"../Images/ContentImage-4Tiles-Carousel-Seniors-1x.jpg",  
        videorul: "./vid2.mp4",
        caption: "HUAWEI7",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
      },{
		thumbanailUrl:"../Images/ContentImage-4Tiles-Carousel-Seniors-1x.jpg",  
        videorul: "./vid2.mp4",
        caption: "HUAWEI8",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
      },
	  {
		thumbanailUrl:"../Images/ContentImage-4Tiles-Carousel-Seniors-1x.jpg",
        videorul: "./vid2.mp4",
         caption: "HUAWEI9",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		controls:"controls"
      }];

  var addProduct = function(newObj) {
      record.push(newObj);
  };

  var getrecord = function(){
      return record;
  };
  var autoplayjson=function(){
      return autoplay;
  };
  var addProduct = function(newObj) {
      record.push(newObj);
  };
  var updatevideo = function(updatevalue) {
	  autoplay[0].previousvideo=updatevalue;
  };
  var updateplaybygrid = function(value) {
	  autoplay[0].playbygridvalue=value;
  };  
  
  return {
    addProduct: addProduct,
    getrecord: getrecord,
	autoplay: autoplayjson,
	updateautoplay:updatevideo,
	updateplaybygrid:updateplaybygrid
 };
});

m1app.controller('carouselController', function($scope,$timeout,$window,$document,productService) {

	$scope.records = productService.getrecord();  	
	var recordslength=$scope.records.length;
	$scope.autoplay=productService.autoplay();
	//at one time one video will be auto play
	$timeout(function () {
			var video=$scope.autoplay[0].videotobeautoplay;
			var autoplay=$scope.autoplay[0].autoplayvideo;
			var autoplaydom = document.getElementById(video);
			//console.log(autoplay);
			autoplaydom.autoplay =JSON.parse(autoplay);
			autoplaydom.load();
	  },500);	
		//vedio play btn
		
		$timeout(function () {
				for(var i=0;i<recordslength;i++){
					var id="myVideo"+i;
					var doc=document.getElementById(id);
					doc.onplay=function(){

					}
				}
		},1000);	
 });
  m1app.controller('headerController', function($scope,$timeout,$window) {
	angular.element($window).bind("scroll", function() {
       if($(window).scrollTop() > 50) {
        $(".navbar-default").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar-default").removeClass("active");
    }
	
	 });
/*		for(var i=0;i<scope.records;i++){
		}	 	 
*/
 });
 m1app.controller('footerController', function($scope,$timeout,$window,productService) {
	$scope.scrollToTop = function() {
      $('html').animate({
             scrollTop: 0
      }, 800);
		//autoplay video

};

 });
m1app.service("colVal", function() {
    this.getValue = function(numberOfImages) {
        return parseInt(12/parseInt(numberOfImages));
    };
});
m1app.directive("thumbnailComponent", function(colVal) {
    return {
        restrict: 'EA',
        scope: {
            imgSrc:'@',
            imgAlt: '@',
            txtColor: '@',
            txtCaptionBold: '@',
            txtCaptionUnbold: '@',
            txtBody: '@',
            btnTxt: '@',
            btnBorderColor: '@'
        },
         template: '<div class="thumbnail col-md-{{ctrl.maxColVal}} col-xs-12" ng-repeat="imageDetail in ctrl.records"> <img ng-src="{{imageDetail.videorul}}" alt="{{imageDetail.caption}}" style="width:100%"> <div class="caption"> <h4>{{imageDetail.caption}}</h4> </div> <div class="description"> <p>Get more done on your Device wherever you are.</p> <button type="button" class="btn btn-default">View Plans</button></div></div>',
         controller: function($attrs) {
            this.minColVal = colVal.getValue($attrs.minImages);
            this.maxColVal = colVal.getValue($attrs.maxImages);
			
			this.records = [{
          videorul: "../Images/nature.jpg",
          caption: "MOBILE",
      }, {
        videorul: "../Images/nature2.jpg",
        caption: "BROADBAND",
      }, {
       videorul: "../Images/nature3.jpg",
        caption: "TRAVEL",
      },
	  {
       videorul: "../Images/nature4.jpg",
        caption: "TRAVEL",
      }];
      },
        controllerAs: 'ctrl'
    };
});

m1app.directive("pageBanner", function(colVal) {
    return {
        restrict: 'EA',
		replace: false,
        scope: {
            
            align: '@'
        },
template: "<div class='col-md-12 col-sm-12 col-xs-12 page-banner thumbnail padding-zero marginbottom-zero'><img src='../Images/banner1.jpg' alt='' class='padding-zero' style='width:100%'><div class='caption col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-10 align-{{align}}'><h2><strong>Its Okay to drool</strong><br>A LITTLE</h2><p>All the latest devices in one place.Go on.Take a peek. You know you want to</p><button type='button' class='btn btn-default'>Discover Latest Devices</button></div></div>",
         controller: function($attrs) {
            this.minColVal = colVal.getValue($attrs.minImages);
            this.maxColVal = colVal.getValue($attrs.maxImages);
			
			this.records = [{
          videorul: "../Images/lights.jpg",
          caption: "Plans with Devices",
      }, {
        videorul: "../Images/fjords.jpg",
        caption: "SIM Only",
      }, {
       videorul: "../Images/nature.jpg",
        caption: "Prepaid",
      },];
      },
	  link: function (scope, element, attrs) {
		  var selectedElement=angular.element(element[0].children[0]);
			var flexStart = "";
			if(attrs.align == "left"){
				flexStart = 'start';
			}else if(attrs.align == "right"){
			flexStart = 'end';
			}else if(attrs.align == "center"){
				flexStart = 'center';
			}	
        /*selectedElement.css({
				'display': 'flex',
				'align-items':'center',
				'justify-content':'flex-'+flexStart
            });*/
        },
        controllerAs: 'ctrl'
    };
});

m1app.directive("pageBanner2", function(colVal) {
    return {
        restrict: 'EA',
        scope: {
            imgSrc:'@',
            imgAlt: '@',
            txtColor: '@',
            txtCaptionBold: '@',
            txtCaptionUnbold: '@',
            txtBody: '@',
            btnTxt: '@',
            btnBorderColor: '@'
        },
         template: '<div class="col-md-6 thumbnail padding-zero col-md-push-6 marginbottom-zero"><img src="../Images/bg_img.jpeg" alt=""  class="padding-zero"><div class="caption col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-1 col-xs-10"><h2><strong>Online Exclusive</strong><br>PROMOTION</h2><p>Fast,smooth,and a long battery life. And now, the Xiaomini Redmi 5A is yours at $0.</p><button type="button" class="btn btn-default">Buy Now</button></div></div><div class="col-md-6 thumbnail padding-zero col-md-pull-6"><img src="../Images/bg_img.jpeg" alt=""  class="padding-zero"><div class="caption col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-1 col-xs-10 "><h2><strong>See More With</strong><br>the LG V30+</h2><p>Behold the bezel-less beauty with curves at all the right places.You know you want it.</p><button type="button" class="btn btn-default">Buy Now</button></div></div>',
         controller: function($attrs) {
            this.minColVal = colVal.getValue($attrs.minImages);
            this.maxColVal = colVal.getValue($attrs.maxImages);
			
			this.records = [{
          videorul: "../Images/lights.jpg",
          caption: "MOBILE",
      }, {
        videorul: "../Images/fjords.jpg",
        caption: "BROADBAND",
      }, {
       videorul: "../Images/nature.jpg",
        caption: "TRAVEL",
      },];
      },
        controllerAs: 'ctrl'
    };
});
m1app.directive("carouselComponents",function($timeout,productService){
	return{
        restrict: "A",
        scope: {
        }, 
		controller: function($element,$scope){	
				var videotag=$element.find(".video");
				console.log(videotag);	
		},
		link: function (scope, element, attrs) {

			element=element;
			var minItem=parseInt(attrs.minitem);
			var maxItem=parseInt(attrs.maxitem);
			var speed= parseInt(attrs.speed);
		    var autoplay= JSON.parse(attrs.autoplay);
			var infinite=JSON.parse(attrs.infinite);
			var autoplaySpeed= parseInt(attrs.autoplayspeed);
			queryResult = element[0].querySelector('.slider');
            var wrappedQueryResult = angular.element(queryResult);
			
			//vedio tag click	
			//slick function		
			scope.slickintialization=function(){
				$timeout(function () {
						alert("call slick"+autoplay);
						element.slick({
						speed:speed,
						autoplay: autoplay,
						infinite: infinite,
						autoplaySpeed: autoplaySpeed,
						centerMode: false,
						centerPadding: '40px',
						slidesToShow: maxItem,
						slidesToScroll: maxItem,
						arrows: true,
						dots:true,
						draggable:false,
						focusOnSelect:false,
						pauseOnFocus:false,
						pauseOnHover:false,
						prevArrow: "<img class='a-left control-c prev slick-prev' src='../Images/leftarrow.png'>",
						nextArrow:"<img class='a-right control-c next slick-next' src='../Images/rightarrow.png'>",
						
					   responsive: [
						{
						  breakpoint: 767,
						  settings: {
							autoplay: false,
							infinite: true,
							arrows: false,
							dots:true,
							centerMode: true,
							centerPadding: '40px',
							slidesToShow: minItem>1?2:1,
							initialSlide: minItem>1?1:0,
						  }
						}
					  ]
			 
					 });
				}, 1);
			};
			element.bind("click",function(event){
				//alert("slick");
				//a=false;
				//element.slick.refresh()
				element.slick('slickSetOption', 'autoplay', false, false);	
			});				
			scope.slickintialization();	
			//plug intialization			
        },
		 controllerAs: 'ctrl'
	}
	
});

m1app.directive("videoTag",function($timeout,productService){
	return{
        restrict: "A",
        scope: {
				data: "="
        },
		controller: function($element,$scope){	
			//console.log($scope.records.length);
		},
		link: function (scope, element, attrs) {
			//varible declaration
			scope.records = productService.getrecord();
			scope.autoplay=productService.autoplay();
			flag=true;
			
			//video click
			element.bind("click",function(event){
					var active=element.siblings('.circleplaypause');
					//play pause inner Carousel Video
					flag=false;
					carosuleelement=scope.autoplay[0].carosuleelement;
					scope.playPauseCarouselVideo(event);
			});	
			//play pause Carousel vedio
			scope.playPauseCarouselVideo=function(event){
				//current video
				var currentvideo=event.target.id;
				//dom element
				var currentvideodom=document.getElementById(currentvideo);
				//previous video
				var previeousvideo=scope.autoplay[0].previousvideo;
				if(currentvideo != previeousvideo){
					//previous video should stop			
					//dom element
					var previeousvideodom=document.getElementById(previeousvideo);
					previeousvideodom.pause();
					productService.updateautoplay(currentvideo);
				}
				if(currentvideodom.paused){
					currentvideodom.play();
					//element.slick('slickSetOption', 'autoplay', false, false);			
					//carosuleelement.slick('slickSetOption', 'autoplay', false, false);
				}else{
					currentvideodom.pause();
					element.slick('slickSetOption', 'autoplay', true,true);	
					//carosuleelement.slick('slickSetOption', 'autoplay', true, true);
				}					
			};
        }
	}
});