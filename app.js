var m1app = angular.module("m1app", ["ngSanitize","ui.bootstrap"]);

m1app.filter('html', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

m1app.controller('carouselController', function($scope,$rootScope,$timeout,$window,$document) {
	$scope.records = [{
        thumbanailUrl: "./vid1.mp4",
        caption: "HUAWEI1",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
		
      }, {
        thumbanailUrl: "./vid1.mp4",
        caption: "APPLE2",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      }, {
        thumbanailUrl: "./vid1.mp4",
         caption: "SAMSUNG3",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      }, {
        thumbanailUrl: "./vid1.mp4",
        caption: "HUAWEI4",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      },{
        thumbanailUrl: "./vid1.mp4",
         caption: "HUAWEI5",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      },{
        thumbanailUrl: "./vid1.mp4",
        caption: "HUAWEI6",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      },{
        thumbanailUrl: "./vid1.mp4",
        caption: "HUAWEI7",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      },{
        thumbanailUrl: "./vid1.mp4",
        caption: "HUAWEI8",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      },
	  {
        thumbanailUrl: "./vid1.mp4",
         caption: "HUAWEI9",
		description:"Mate 10 Pro",
		price:"$398",
		subDetail1:"$70/mth",
		subDetail2:"on mySIM@ 70",
      }];  
	  
	  $scope.autoplay=[
	  				    { 
							"autoplayvideo": "false",
							"videotobeautoplay":"myVideo0",
							"videoid":"myVideo"							
						},
						{
							
						}
					];
	  
	  
	  	//play pause btn
	 
	 //auto play
	 
	 
	 var recoedLength=$scope.records.length;
	 //for stop all vedio and play one video
	  $scope.playbtn = function(curentvideo) {
		//outer current
		var myvideocurrent=$scope.autoplay[0].videoid+curentvideo;	
		var currentvideo=document.getElementById(myvideocurrent);
		for(var i=0;i<recoedLength;i++){
			var videotobepause=$scope.autoplay[0].videoid+i;
			console.log(videotobepause);
			var vid= document.getElementById(videotobepause);
			//or
			//angular.element(videotobepause);
			
			//cuurent compare with previeous
			if(myvideocurrent!= videotobepause)
				vid.pause(); 

		}
		//toggele play and pause 
		if(currentvideo.paused){
			currentvideo.play(); 
			
		}else{
			currentvideo.pause();
		}
	  };
	  
	  //autoplay video
	  $timeout(function () {
			var video=$scope.autoplay[0].videotobeautoplay;
			var autoplay=$scope.autoplay[0].autoplayvideo;
			var autoplaydom = document.getElementById(video);
			//console.log(autoplay);
			autoplaydom.autoplay =JSON.parse(autoplay);
			autoplaydom.load();
	  }, 1000);	  
		

	  
/*
			$timeout(function () {
				  //var myvideocurrent="myVideo"+curentvideo;	
					for(var i=0;i<recoedLength;i++){
						  var allvideo="myVideo"+i;
						  console.log(allvideo+"play");
						  var currentvideo = document.getElementById(allvideo);
						  currentvideo.onplay= function() {
								//$scope.playbtn(i);
								
						 }			  
					}			
		    }, 1000);	  
*/	
		
	  //
	  /*var vid1 = document.getElementsByClassName("myVideo");
            vid1.onplay= function() {
             alert("click");
      }; */
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
 });
 m1app.controller('footerController', function($scope,$timeout,$window) {
	$scope.scrollToTop = function() {
      $('html').animate({
             scrollTop: 0
      }, 800);
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
         template: '<div class="thumbnail col-md-{{ctrl.maxColVal}} col-xs-12" ng-repeat="imageDetail in ctrl.records"> <img ng-src="{{imageDetail.thumbanailUrl}}" alt="{{imageDetail.caption}}" style="width:100%"> <div class="caption"> <h4>{{imageDetail.caption}}</h4> </div> <div class="description"> <p>Get more done on your Device wherever you are.</p> <button type="button" class="btn btn-default">View Plans</button></div></div>',
         controller: function($attrs) {
            this.minColVal = colVal.getValue($attrs.minImages);
            this.maxColVal = colVal.getValue($attrs.maxImages);
			
			this.records = [{
          thumbanailUrl: "../Images/nature.jpg",
          caption: "MOBILE",
      }, {
        thumbanailUrl: "../Images/nature2.jpg",
        caption: "BROADBAND",
      }, {
       thumbanailUrl: "../Images/nature3.jpg",
        caption: "TRAVEL",
      },
	  {
       thumbanailUrl: "../Images/nature4.jpg",
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
          thumbanailUrl: "../Images/lights.jpg",
          caption: "Plans with Devices",
      }, {
        thumbanailUrl: "../Images/fjords.jpg",
        caption: "SIM Only",
      }, {
       thumbanailUrl: "../Images/nature.jpg",
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
          thumbanailUrl: "../Images/lights.jpg",
          caption: "MOBILE",
      }, {
        thumbanailUrl: "../Images/fjords.jpg",
        caption: "BROADBAND",
      }, {
       thumbanailUrl: "../Images/nature.jpg",
        caption: "TRAVEL",
      },];
      },
        controllerAs: 'ctrl'
    };
});
m1app.directive("carouselComponents",function($timeout){
	return{

        restrict: "A",
        
        scope: {
           
        }, 
		controller: function($element,$scope){	
				var videotag=$element.find(".video");
				console.log(videotag);
		},
		link: function (scope, element, attrs) {
			
			var minItem=parseInt(attrs.minitem);
			var maxItem=parseInt(attrs.maxitem);
			var speed= parseInt(attrs.speed);
		    autoplay= JSON.parse(attrs.autoplay);
			var infinite=JSON.parse(attrs.infinite);
			var autoplaySpeed= parseInt(attrs.autoplayspeed);
			var queryResult = element[0].querySelector('.slider');
            var wrappedQueryResult = angular.element(queryResult);
			
			$timeout(function () {
			
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
        },
		 controllerAs: 'ctrl'
	}
	
});