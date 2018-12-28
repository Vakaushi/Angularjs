(function() {
    'use strict';
    //moose case controller start here 
    angular.module("m1cp.eshop.moose").controller("mooseCaseController", ["$scope", "$window", "errorHandler", "httpHandler", "$modal", function($scope, $window, errorHandler, httpHandler, $modal) {
        //accesories start here
        //moss cart section start here
        $scope.stepsJson = {
            "currentPossiton": 0,
            "steps": [{
                "Id": "Case",
                "Title": "",
                "Url": "https://www.google.com/",
                "IsComplete": false,
                "isActive": true,
                "IsDisabled": false
            }, {
                "Id": "Add-Ons",
                "Title": "",
                "Url": "https://www.google.com/",
                "IsComplete": false,
                "isActive": false,
                "IsDisabled": false
            }, {
                "Id": "Customer Info e-Bills",
                "Title": "",
                "Url": "https://www.google.com/",
                "IsComplete": false,
                "isActive": false,
                "IsDisabled": false
            }, {
                "Id": "Charges Waiver",
                "Title": "",
                "Url": "https://www.google.com/",
                "IsComplete": false,
                "isActive": false,
                "IsDisabled": false
            }]
        };
        /*not usable code*/
        //$scope.currentPossiton = $scope.stepsJson['currentPossiton'];
        //$scope.totalSteps = $scope.stepsJson['steps'].length - 1;
        //$scope.nextButton = function () {
        //    if ($scope.currentPossiton <= $scope.totalSteps) {
        //        $scope.stepsJson['currentPossiton']++;
        //        $scope.stepsJson['steps'][$scope.currentPossiton].IsComplete = true;
        //        $scope.currentPossiton = $scope.stepsJson['currentPossiton'];
        //        $scope.stepsJson['steps'][$scope.currentPossiton].IsDisabled = false;
        //        $scope.stepsJson['steps'][$scope.currentPossiton].isActive = true;
        //    }
        //};
        //$scope.stepsClick = function () {
        //    console.log($scope.stepsJson);
        //};
        //end moss cart section here
        //accesories end here
        /*not usable code*/
    }]);
    //moose case controller end  here 
    angular.module("m1cp.eshop.moose").controller("mooseheaderController", ["$scope", "$window", "errorHandler", "httpHandler", function($scope, $window, errorHandler) {
        //json start here
        var newOrder = {
            "Status": "AdditionalInfo",
            "Message": "All selections will be discarded. Do you want to proceed?",
            "Heading": "New Order",
            "Image": "../../images/book.png",
            "popup": true,
            "Action": [{
                "Action": "Yes",
                "Data": "uc=1&da=1",
                "PostUrl": ""
            }, {
                "Action": "No",
                "Data": "",
                "PostUrl": ""
            }]
        };
        var restartOrder = {
            "Status": "AdditionalInfo",
            "Message": "All selections will be discarded. Do you want to proceed?",
            "Heading": "Restart Order",
            "Image": "../../images/book.png",
            "popup": true,
            "Action": [{
                "Action": "Yes",
                "Data": "uc=1&da=1",
                "PostUrl": ""
            }, {
                "Action": "No",
                "Data": "",
                "PostUrl": ""
            }]
        };
        //end json start here
        //confirmation json start
        $scope.newOrder = function() {
            errorHandler.seterrorJSON(newOrder);
            errorHandler.notifyErrorService();
        }
        $scope.restartOrder = function() {
            errorHandler.seterrorJSON(restartOrder);
            errorHandler.notifyErrorService();
        }
        //confirmation json end
        //cart reqest updatation
        function cartUpdation() {
            var requestmethod = 'post';
            var requesturl = 'sitecore';
            var requestdatatype = 'json';
            //removable 
            var requestobject = {
                "unid": "asdasd"
            };
            var promisereturned = httpHandler.fetchdata(requestmethod, requesturl, requestobject, requestdatatype);
            promisereturned.then(function success(response) {
                if (response.Data) {
                    recieveOrderMode.retrivedAddress = response.Data;
                } else {
                    form.EditAddressZipcopde.serverError = true;
                    //form.$valid = false;
                }
            }, function error(response) {})
        };
        //end cart reqest updatation
    }]);
    angular.module("m1cp.eshop.moose").controller("moosecoriController", ["$scope", "$window", "errorHandler", "httpHandler", function($scope, $window, errorHandler, httpHandler) {
        $scope.open = function() {
            alert("click");
        };
        //cori details start
        $scope.coridetails = {
            "Heading": "Select CORI Company Deatils",
            "recordheading": [{
                "coriheadingfirst": "Company Name",
                "coriheadinglast": "Company BRN"
            }],
            "records": [{
                "Companyname": "Capgemini Tech",
                "BRNNumber": "123131231E",
                "emailDomain": "corp",
                "active": "false"
            }, {
                "Companyname": "Capgemini SG",
                "BRNNumber": "123131231R",
                "emailDomain": "corp",
                "active": "false"
            }, {
                "Companyname": "Capgemini Consulting",
                "BRNNumber": "123131231T",
                "emailDomain": "corp",
                "active": "false"
            }]
        };
        //cori details end 
    }]);
    //end mooseheader controller start here
    angular.module("m1cp.eshop.moose").controller("mooseCasePageController", ["$scope", "$window", "httpHandler", "mooseDeviceService", "moosePlanService", "mooseMainLineService", "navigationHandler", "eshopSelection", function($scope, $window, httpHandler, mooseDeviceService, moosePlanService, mooseMainLineService, navigationHandler, eshopSelection) {
        var mcp = this;
        $scope.mooseCasedata = {
            "heading": "CASE",
            "customer": {
                "IDtype": {
                    "label": "Customer ID Type",
                    "values": [{
                        "name": "NRIC",
                        "value": "NRIC - val"
                    }, {
                        "name": "FIN",
                        "value": "FIN - val"
                    }, {
                        "name": "Others",
                        "value": "Others - val"
                    }]
                },
                "IDnumber": {
                    "label": "Customer ID Number",
                    "placeholder": "Customer ID Number",
                    "value": "1234",
                    "errorMessage": "Customer ID number in required",
                    "nricErrorMessage": "Please enter the Customer ID number in right format"
                },
                "caseType": {
                    "label": "Case Type",
                    "values": [{
                        "name": "GSM/MBB",
                        "value": "GSM/MBB-val"
                    }, {
                        "name": "FBB",
                        "value": "FBB - val"
                    }, {
                        "name": "RRP",
                        "value": "RRP - val"
                    }, {
                        "name": "Supp",
                        "value": "Supp - val"
                    }]
                }
            }
        };
        $scope.customerData = {
            "connectionType": {
                "label": "Connection Type",
                "values": [{
                    "name": "New Line",
                    "value": "New Line - val"
                }, {
                    "name": "Re-Contract",
                    "value": "Re-Contract - val"
                }]
            },
            "category": {
                "label": "Category",
                "values": [{
                    "name": "Devices",
                    "value": "Devices - val"
                }, {
                    "name": "Accesories",
                    "value": "Accesories - val"
                }, {
                    "name": "Wearables",
                    "value": "Wearables - val"
                }],
                "resetLabel": "Reset"
            },
            "ReContract": {
                "label": "Select User Id to Re-contract",
                "values": [{
                    "name": "value -1",
                    "value": "value -1 - val"
                }, {
                    "name": "value -2",
                    "value": "value -2 - val"
                }, {
                    "name": "value -3",
                    "value": "value -3 - val"
                }],
                "errorMessage": "Please select a UserID to re-contract"
            },
            "CORIscheme": {
                "label": "Do your company have M1 CORI scheme?",
                "values": [{
                    "name": "Yes",
                    "value": "Yes - val"
                }, {
                    "name": "No",
                    "value": "No - val"
                }],
                "companyName": {
                    "label": "Company Name",
                    "placeholder": "Company Name"
                },
                "companyEmail": {
                    "label": "Company Email Domain",
                    "placeholder": "Company Email"
                },
                "companyBRN": {
                    "label": "Company BRN",
                    "placeholder": "Company BRN"
                },
                "btnLabel": "Check CORI"
            },
            "CasePrefrence": {
                "values": [{
                    "name": "Plan First",
                    "value": "Plan First - val"
                }, {
                    "name": "Device First",
                    "value": "Device First - val"
                }],
                "resetLabel": "Reset"
            },
        }
        $scope.resetcustomerIDNumber = function() {
            delete mcp.customerIDNumber;
        }
        $scope.submitcustomerIDForm = function() {
            if (mcp.customerIDNumber == true) {
                mcp.customerIDNumber = $('#nricNo').val();
            }
            if (mcp.customerIDNumber) {
                $scope.customerID = {
                    "IDType": mcp.selectedcustomerId,
                    "IDNumber": mcp.customerIDNumber,
                    "CaseType": mcp.caseType.name
                }
                console.log($scope.customerID);
                var requestmethod = 'POST';
                var requesturl = 'https/ukdhfghdghd/postnotifyme';
                var requestdatatype = 'JSON';
                var requestobject = $scope.requestObject;
                var promisereturned = httpHandler.fetchdata(requestmethod, requesturl, requestobject, requestdatatype);
                promisereturned.then(function success(response) {
                    $scope.mooseCustomerdata = response.data;
                }, function error(response) {
                    $scope.mooseCustomerdata = $scope.customerData;
                    // console.log($scope.mooseCustomerdata)
                });
            } else {
                console.log("Invalid Customer ID Number");
            }
        }
        $scope.resetLink = function() {
            delete mcp.selectedCasePrefrence;
            delete mcp.selectedCategory;
        }
		//MAIN LINE START
		$scope.changeOption = function() {
			$scope.submitted = false;
		};  
		$scope.getMainLineForm = function () {
			mooseMainLineService.getMainLineList().then(function(response){
				$scope.mainLineData = response;
			});
        }
		$scope.getMainLineForm();
			$scope.submitMainLineForm = function () {
				$scope.ErrorMsg = $scope.mainLineData.ErrorMsg;
				$scope.success = $scope.mainLineData.success;
				console.log($scope.submitted);
				if (angular.element(".mailLineForm button i").hasClass('glyphicon glyphicon-arrow-right') && $scope.mainLineSelection != undefined) {
					var URL = "mooseMainLine.json";
					var promise = httpHandler.fetchdata("GET", URL, $scope.mainLineSelection, "json");
					promise.then(
						function success(response) {
							$scope.validateSuccess = response.success;
							if ($scope.validateSuccess == true) {
								
							}
							else {
								$scope.mainLineServerError = true;
							}
						},function error(response) {
						}
					);
				}
				else {
					$scope.validateSuccess = false;
				}
			}
		//MAIN LINE END
        // $scope.coriSearch = function(){
        //     if(mcp.companyName && !mcp.companyEmail && !mcp.companyBRN || !mcp.companyName && mcp.companyEmail && !mcp.companyBRN || !mcp.companyName && !mcp.companyEmail && mcp.companyBRN){
        //         mcp.coriError = false;
        //         $('#mooseCori').modal('show');
        //     }
        //     else{
        //         mcp.coriError = true;
        //         //console.log(mcp.showMessage)
        //     }
        // }
        $scope.coriSearch = function() {
            if (mcp.companyName && !mcp.companyEmail && !mcp.companyBRN || !mcp.companyName && mcp.companyEmail && !mcp.companyBRN || !mcp.companyName && !mcp.companyEmail && mcp.companyBRN) {
                mcp.coriError = false;
                $scope.requestObject = {
                    "Companyname": mcp.companyName,
                    "emailDomain": mcp.companyEmail,
                    "BRNNumber": mcp.companyBRN
                }
                //console.log($scope.requestObject);
                var requestmethod = 'POST';
                var requesturl = 'https/ukdhfghdghd/postnotifyme';
                var requestdatatype = 'JSON';
                var requestobject = $scope.requestObject;
                var promisereturned = httpHandler.fetchdata(requestmethod, requesturl, requestobject, requestdatatype);
                promisereturned.then(function success(response) {
                    $scope.coridetails = response.data;
                    if (response.data.coriErrorMessage) {
                        mcp.coriErrorMessage = response.data.coriErrorMessage;
                    } else if (response.data.records.length == 1) {
                        mcp.showMessage = {
                            "companyName": response.data.records[0].Companyname,
                            "companyEmail": response.data.records[0].emailDomain,
                            "brnNumber": response.data.records[0].BRNNumber
                        }
                        //console.log(mcp.showMessage);
                    } else {
                        $('#mooseCori').modal('show');
                    }
                }, function error(response) {
                    response.data = $scope.coridetails;
                    if (response.data.coriErrorMessage) {
                        mcp.coriErrorMessage = response.data.coriErrorMessage;
                    } else if (response.data.records.length == 1) {
                        mcp.showMessage = {
                            "companyName": response.data.records[0].Companyname,
                            "companyEmail": response.data.records[0].emailDomain,
                            "brnNumber": response.data.records[0].BRNNumber
                        }
                    } else {
                        $('#mooseCori').modal('show');
                    }
                });
            } else {
                mcp.coriError = true;
                console.log(mcp.showMessage)
            }
        };
        //cori details start
        $scope.coridetails = {
            "coriErrorMessage": "", //The company name entered doesn’t have a CORI scheme.",
            "Heading": "Select CORI Company Deatils",
            "recordheading": [{
                "coriheadingfirst": "Company Name",
                "coriheadinglast": "Company BRN"
            }],
            "records": [{
                "Companyname": "Capgemini Tech",
                "BRNNumber": "123131231E",
                "emailDomain": "corp",
                //    "active": false
            }, {
                "Companyname": "Capgemini SG",
                "BRNNumber": "123131231R",
                "emailDomain": "corp",
                //    "active": false
            }, {
                "Companyname": "Capgemini Consulting",
                "BRNNumber": "123131231T",
                "emailDomain": "corp",
                //    "active": false
            }]
        };
        //cori details end
        $scope.devicePlanselection = function() {
            //$scope.showDeviceList = 
            console.log(mooseDeviceService.getDeviceList());
        }
        mcp.caseDetails = {
            "IdType": "NRIC",
            "customerID": "12345",
            "caseType": "RRP",
            "connectionType": "New"
        }
        /*check Coverage start here*/
        var stickycontainer = {
            "SelectPhone": {
                "VariantColor": null,
                "VaritantSize": null,
                "Image": null,
                "VariantId": null,
                "StepId": "ecfe5080-db2a-4064-9b34-34a5f9ba323a",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 0,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": "",
                "PostUrl": "",
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": false,
                    "previousactive": true,
                    "nextactive": true,
                    "isform": false,
                    "alignbutton": "right"
                },
                "Name": "PHONE",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": "{35de743a-42cc-4786-b739-8509bd1d7698}",
                "StickyBarText": "Alcatel PIXI4 7\" Smokey Grey Castle.Proxies.GlassBaseProxy 8GB",
                "CartText": null,
                "CartHelpText": "Alcatel PIXI4 7\" Smokey Grey",
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": {
                        "CurrencyCode": null,
                        "Amount": 199.0000
                    }
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            },
            "SelectPlan": {
                "PlanName": "2-13-GSM11392",
                "Recontract": false,
                "StepId": "4708d452-2f11-400f-b1aa-e620b21de40c",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 1,
                "Selection": {
                    "Id": "00000000-0000-0000-0000-000000000000",
                    "Contract": null,
                    "IsCORI": false,
                    "CORIEmail": null,
                    "Recontract": false,
                    "ListPrice": 28.0000,
                    "CompanyBRName": null,
                    "PlanName": "2-13-GSM11392",
                    "DisplayName": "Lite"
                },
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": true,
                    "previousactive": true,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": "right"
                },
                "Name": "PLAN",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": "{00000000-0000-0000-0000-000000000000}",
                "StickyBarText": "2-13-GSM11392",
                "CartText": null,
                "CartHelpText": "Lite",
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            },
            "SelectNumber": {
                "Number": "97932399",
                "StepId": "49a3fb93-02cf-48f9-86a7-eaf370a570a3",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 2,
                "Selection": {
                    "Number": "97932399",
                    "Price": 0.0,
                    "Promotion": null,
                    "PortIn": {
                        "Provider": null,
                        "IdType": 0,
                        "IdDocumentNumber": null,
                        "BillAccountNumber": null,
                        "SubscriberName": null
                    },
                    "NumberType": 3,
                    "CartText": null,
                    "PackageId": "d4f4f259d3074c43820ef664a6bffb1f"
                },
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": true,
                    "previousactive": true,
                    "nextactive": true,
                    "isform": false,
                    "alignbutton": "default"
                },
                "Name": "NUMBER",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": "PreferredNumber 97932399",
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": {
                        "CurrencyCode": null,
                        "Amount": 0.0
                    }
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            },
            "SelectAddon": {
                "addOn": null,
                "addonList": [],
                "StepId": "85dd7b74-ff6f-42c1-9624-506a61e8dd90",
                "IsActive": true,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 3,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": true,
                    "previousactive": true,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": "default"
                },
                "Name": "ADDON",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": null,
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            },
            "EntityId": "d4f4f259d3074c43820ef664a6bffb1f",
            "PackageType": 1,
            "Name": "PhoneEntry",
            "Identifier": "gsm.phoneentry",
            "CurrentStep": {
                "addOn": null,
                "addonList": [],
                "StepId": "85dd7b74-ff6f-42c1-9624-506a61e8dd90",
                "IsActive": true,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 3,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": "https://jkgghkhhiljhljhljljl",
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": true,
                    "previousactive": true,
                    "nextactive": true,
                    "isform": false,
                    "alignbutton": "default"
                },
                "Name": "ADDON",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": null,
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            },
            "Steps": [{
                "StoreName": null,
                "DeliveryDate": null,
                "DeliveryTime": null,
                "DeliveryCharge": 0.0,
                "DeliveryType": 0,
                "CustomerInformation": null,
                "PopStationId": null,
                "StepId": "e0b84046-6d62-41b8-a4ab-5b555c5c8840",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 4,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": null,
                    "previouslabel": null,
                    "buttontype": null,
                    "nextshow": false,
                    "previousshow": false,
                    "previousactive": false,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": null
                },
                "Name": "DELIVERY",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": null,
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            }, {
                "IsSunrise": false,
                "BillingAddress": null,
                "ResidentialAddress": null,
                "CustomerStatus": null,
                "FirstName": null,
                "LastName": null,
                "Email": null,
                "ContactNumber": null,
                "IsExistingCustomer": false,
                "StepId": "002b5a5f-fc2b-4501-bfb0-0f4914114b60",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 5,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": null,
                    "previouslabel": null,
                    "buttontype": null,
                    "nextshow": false,
                    "previousshow": false,
                    "previousactive": false,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": null
                },
                "Name": "VERIFYDETAIL",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": null,
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            }, {
                "VariantColor": null,
                "VaritantSize": null,
                "Image": null,
                "VariantId": null,
                "StepId": "ecfe5080-db2a-4064-9b34-34a5f9ba323a",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 0,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": "",
                "PostUrl": "",
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": false,
                    "previousactive": true,
                    "nextactive": true,
                    "isform": false,
                    "alignbutton": "right"
                },
                "Name": "PHONE",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": "{35de743a-42cc-4786-b739-8509bd1d7698}",
                "StickyBarText": "Alcatel PIXI4 7\" Smokey Grey Castle.Proxies.GlassBaseProxy 8GB",
                "CartText": null,
                "CartHelpText": "Alcatel PIXI4 7\" Smokey Grey",
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": {
                        "CurrencyCode": null,
                        "Amount": 199.0000
                    }
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            }, {
                "PlanName": "2-13-GSM11392",
                "Recontract": false,
                "StepId": "4708d452-2f11-400f-b1aa-e620b21de40c",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 1,
                "Selection": {
                    "Id": "00000000-0000-0000-0000-000000000000",
                    "Contract": null,
                    "IsCORI": false,
                    "CORIEmail": null,
                    "Recontract": false,
                    "ListPrice": 28.0000,
                    "CompanyBRName": null,
                    "PlanName": "2-13-GSM11392",
                    "DisplayName": "Lite"
                },
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": true,
                    "previousactive": true,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": "right"
                },
                "Name": "PLAN",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": "{00000000-0000-0000-0000-000000000000}",
                "StickyBarText": "2-13-GSM11392",
                "CartText": null,
                "CartHelpText": "Lite",
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            }, {
                "addOn": null,
                "addonList": [],
                "StepId": "85dd7b74-ff6f-42c1-9624-506a61e8dd90",
                "IsActive": true,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 3,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": true,
                    "previousactive": true,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": "default"
                },
                "Name": "ADDON",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": null,
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            }, {
                "Number": "97932399",
                "StepId": "49a3fb93-02cf-48f9-86a7-eaf370a570a3",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 2,
                "Selection": {
                    "Number": "97932399",
                    "Price": 0.0,
                    "Promotion": null,
                    "PortIn": {
                        "Provider": null,
                        "IdType": 0,
                        "IdDocumentNumber": null,
                        "BillAccountNumber": null,
                        "SubscriberName": null
                    },
                    "NumberType": 3,
                    "CartText": null,
                    "PackageId": "d4f4f259d3074c43820ef664a6bffb1f"
                },
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": "NEXT",
                    "previouslabel": "BACK",
                    "buttontype": "arrow",
                    "nextshow": true,
                    "previousshow": true,
                    "previousactive": true,
                    "nextactive": true,
                    "isform": false,
                    "alignbutton": "default"
                },
                "Name": "NUMBER",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": "PreferredNumber 97932399",
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": {
                        "CurrencyCode": null,
                        "Amount": 0.0
                    }
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            }],
            "IsComplete": false,
            "IsRecontract": false,
            "IsCori": false,
            "IsEdit": true,
            "IsFreeGiftIncluded": false,
            "CustomerInfo": {
                "CustomerId": null,
                "FirstName": null,
                "LastName": null,
                "DateOfBirth": "0001-01-01T00:00:00",
                "Email": null,
                "Type": null,
                "NationUIdNo": null,
                "Nationality": null,
                "IdExpiryDate": "0001-01-01T00:00:00",
                "BillingAddress": {
                    "AddressId": null,
                    "PostalCode": null,
                    "AddressLine1": null,
                    "AddressLine2": null,
                    "AddressLine3": null,
                    "UnitNo": {
                        "FloorNumber": null,
                        "DoorNumber": null
                    },
                    "AddressTypeCd": null
                },
                "ResidentialAddress": {
                    "AddressId": null,
                    "PostalCode": null,
                    "AddressLine1": null,
                    "AddressLine2": null,
                    "AddressLine3": null,
                    "UnitNo": {
                        "FloorNumber": null,
                        "DoorNumber": null
                    },
                    "AddressTypeCd": null
                },
                "CustomerStatus": null,
                "Ebillsubscription": false,
                "SameAsRegisteredAddress": false,
                "AccountCollection": []
            },
            "DeliveryLocation": {
                "FulfillmentType": 0,
                "FulfillmentName": null,
                "PopStationId": null,
                "PopStationPostalCode": null,
                "ShopAddress": null,
                "DeliveryCharge": 0.0,
                "CustomeInfo": null,
                "Delivery": null,
                "Id": null,
                "Name": null,
                "Comments": null,
                "Policies": [],
                "ChildComponents": []
            },
            "SelectDelivery": {
                "StoreName": null,
                "DeliveryDate": null,
                "DeliveryTime": null,
                "DeliveryCharge": 0.0,
                "DeliveryType": 0,
                "CustomerInformation": null,
                "PopStationId": null,
                "StepId": "e0b84046-6d62-41b8-a4ab-5b555c5c8840",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 4,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": null,
                    "previouslabel": null,
                    "buttontype": null,
                    "nextshow": false,
                    "previousshow": false,
                    "previousactive": false,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": null
                },
                "Name": "DELIVERY",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": null,
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            },
            "SelectVerifyDetail": {
                "IsSunrise": false,
                "BillingAddress": null,
                "ResidentialAddress": null,
                "CustomerStatus": null,
                "FirstName": null,
                "LastName": null,
                "Email": null,
                "ContactNumber": null,
                "IsExistingCustomer": false,
                "StepId": "002b5a5f-fc2b-4501-bfb0-0f4914114b60",
                "IsActive": false,
                "IsEdit": false,
                "IsComplete": false,
                "Ignore": true,
                "Order": 5,
                "Selection": {},
                "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
                "BackUrl": null,
                "PostUrl": null,
                "NavStyle": {
                    "nextlabel": null,
                    "previouslabel": null,
                    "buttontype": null,
                    "nextshow": false,
                    "previousshow": false,
                    "previousactive": false,
                    "nextactive": false,
                    "isform": false,
                    "alignbutton": null
                },
                "Name": "VERIFYDETAIL",
                "Title": null,
                "ExternalId": null,
                "SelectedEntitySitecoreId": null,
                "StickyBarText": null,
                "CartText": null,
                "CartHelpText": null,
                "Price": {
                    "Monthly": null,
                    "FirstTimeToBill": null,
                    "SellingPrice": null
                },
                "ListPrice": null,
                "Value": null,
                "Values": [],
                "Documents": []
            }
        };
        $scope.postalCodedisable = false;
        $scope.chechCoverageValidate = false;
        $scope.checkCoveragetext = "CHECK COVERAGE";
        $scope.disableEdit = function() {
            //  alert("click");
        };
        //btn check coverage btn api start here 
        //send check coverage start here
        function sentCheckCoverage() {
            var requestmethod = 'get';
            var requesturl = 'http://sitecore825/m1api/AddressService/FindAddress';
            var requestdatatype = 'json';
            var requestobject = mcp.EditAddressZipcopde;
            var promisereturned = httpHandler.fetchdata(requestmethod, requesturl, requestobject, requestdatatype);
            promisereturned.then(
                 function success(response) {

                 },
                 function error(response) {
                     // $scope.checkCoveragetext = "EDIT";
                     $scope.postalCodedisable = false;
                     $scope.checkCoveragetext = "CHECK COVERAGE";
                 }
             )
        }
        //send check coverage end here
        $scope.checkCoverage = function () {
            /*validate btn error msg start here*/
            
            if (!mcp.EditAddressZipcopde) {
                $scope.chechCoverageValidate = true;
            }
            validateform();
            /*validate btn error msg start here*/
            if (validateform() && $scope.checkCoveragetext == "CHECK COVERAGE") {
                //sentCheckCoverage();
                $scope.chechCoverageValidate = false;
                //later we have to put success function start here 
                if (validateform() && $scope.checkCoveragetext == "CHECK COVERAGE") {
                    $scope.postalCodedisable = true;
                    $scope.checkCoveragetext = "EDIT";
                }
                //later we have to put success function end here 
            }
            else if ($scope.checkCoveragetext = "EDIT" && validateform()) {
                $scope.postalCodedisable = false;
                $scope.checkCoveragetext = "CHECK COVERAGE";
            }
            else {
                $scope.checkCoveragetext = "CHECK COVERAGE";
            }
        };
            //btn check coverage  key up btn api start  here 
            $scope.postalfieldchanges = function () {
                if (mcp.EditAddressZipcopde) {
                    $scope.chechCoverageValidate = false;
                }
            };
            //btn check coverage key up btn api end  here 
            $scope.retriveAddressfmZipCode = function (form, event) {
            console.log(form.EditAddressZipcopde.serverError);
            if (mcp.EditAddressZipcopde) {
                if ($scope.postalCodedisable) {
                    $scope.postalCodedisable = false;
                    console.log("from if" + $scope.postalCodedisable);
                } else {
                    $scope.postalCodedisable = true;
                    console.log("from else" + $scope.postalCodedisable);
                }
                mcp.retrivedAddress = {
                    "Data": {
                        "AddressId": "AddressIde8313ddb",
                        "PostalCode": "434343",
                        "AddressLine1": "Balestier Road",
                        "AddressLine2": "Singapore",
                        "AddressLine3": "w536n 4uy34 ",
                        "UnitNo": "699-96",
                        "CountryCode": "Singapore",
                        "ShowMandatoryUnitNumber": false,
                        "IsBlocked": false,
                        "ShowOptionalUnitNumber": true,
                        "checkCoerage": true
                    },
                    "IsSuccess": true,
                    "StatusCode": 0,
                    "Message": null
                };
                //getAddressfrmZipCode(mcp.EditAddressZipcopde, form);
            } else {
                $scope.postalCodedisable = false;
                form.EditAddressZipcopde.$dirty = true;
            }
        }
        function getAddressfrmZipCode(zipcode, form) {
            var requestmethod = 'get';
            var requesturl = 'http://sitecore825/m1api/AddressService/FindAddress';
            var requestdatatype = 'json';
            var requestobject = zipcode;
            var promisereturned = httpHandler.fetchdata(requestmethod, requesturl, requestobject, requestdatatype);
            promisereturned.then(
                 function success(response) {
                     if (response.Data) {
                         mcp.retrivedAddress = response.Data;
                         mcp.retrivedAddress = {
                             "Data": {
                                 "AddressId": "AddressIde8313ddb-0626-4e2f-be3a-ea31d1ea26c4",
                                 "AddressId": "",
                                 "PostalCode": "434343",
                                 "PostalCode": "",
                                 "AddressLine1": "",
                                 "AddressLine1": "Balestier Road",
                                 "AddressLine2": "Singapore",
                                 "AddressLine3": "w536n 4uy34 ",
                                 "UnitNo": "699-96",
                                 "CountryCode": "Singapore",
                                 "ShowMandatoryUnitNumber": false,
                                 "IsBlocked": false,
                                 "ShowOptionalUnitNumber": true,
                                 "checkCoerage": true
                             },
                             "IsSuccess": true,
                             "StatusCode": 0,
                             "Message": null
                         };
                     }
                     else {
                         form.EditAddressZipcopde.serverError = true;
                     }
                 },
                 function error(response) {
                 }
             )
        }
        //mcp.retrivedAddress = {
        var selectedFormName = 'm1eshopEditAddressFormModal';
        var navStyle = stickycontainer.CurrentStep.NavStyle;
        var postUrl = stickycontainer.CurrentStep.PostUrl;
        navigationHandler.setButtonStyle(navStyle);
        eshopSelection.setposturl(postUrl);
        navigationHandler.setForm(true);
        navigationHandler.subscribeFormSubmit($scope, function formSubmitted() {
            console.log("dddd");
            $scope.nextButtonForCoverage();
        });
        $scope.nextButtonForCoverage = function () {
            if (validateform()) {
                eshopSelection.setselecttion($scope.selectedAddress);
            } else {
            }
        };
        function validateform() {
            var currenActiveformName = selectedFormName;
            var currentActiveForm = document.getElementById(currenActiveformName);
            var formValid = true;
            angular.forEach(angular.element(currentActiveForm).scope()[currenActiveformName].$error.required, function (field) {
                field.$setDirty();
            });
            if (angular.element(currentActiveForm).scope()[currenActiveformName].$valid) {
                navigationHandler.setFormValid(true);
                formValid = true;
            }
            else {
                navigationHandler.setFormValid(false);
                formValid = false;
            }
            return formValid;
        };
        /*phone accessories filter start here*/
                $scope.phoneaccessories = {
                    "filtersections": {
                        "shops": [
                            { id: 1, name: "Bugis", selectedBy: "store", check: false },
                            { id: 2, name: "M1 eshope", selectedBy: "store", check: false },
                            { id: 3, name: "IMM Koisk", selectedBy: "store", check: false },
                            { id: 4, name: "T3 Koisk", selectedBy: "store", check: false },
                            { id: 5, name: "Suntec Koisk", selectedBy: "store", check: false },
                            { id: 6, name: "Westmall Koisk", selectedBy: "store", check: false },
                            { id: 7, name: "Tampines Koisk", selectedBy: "store", check: false },
                            { id: 8, name: "Parkway Koisk", selectedBy: "store", check: false },
                            { id: 9, name: "IIM Koisk", selectedBy: "store", check: false },
                            { id: 10, name: "M1 eshope Virtual ", selectedBy: "store", check: false },
                            { id: 11, name: "Compasspoint Koisk", selectedBy: "store", check: false },
                            { id: 12, name: "Paragon Koisk", selectedBy: "store", check: false },
                            { id: 13, name: "Wetest", selectedBy: "store", check: false },
                            { id: 14, name: "Setest", selectedBy: "store", check: false }

                        ],
                        "colors": [
                            { id: 15, name: "Space Grey", selectedBy: "Color", check: false },
                            { id: 16, name: "Silver", selectedBy: "Color", check: false },
                            { id: 17, name: "Gold", selectedBy: "Color", check: false }
                        ],
                        "variant": [
                            { id: 18, name: "64GB", selectedBy: "Size", check: false },
                            { id: 19, name: "256GB", selectedBy: "Size", check: false },
                            { id: 20, name: "512GB", selectedBy: "Size", check: false }
                        ],
                        "InStock": [{ id: 21, name: true, selectedBy: "InStock", check: false }]
                    },
                    "Productdata": [
                        {
                            "ShopName": "Bugis",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}",
                            "Variants": [
                                {
                                    "Name": "iPhone 8 64GB  Grey",
                                    "VarinatId": "2-13-1836812q",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone  64GB ",
                                    "VarinatId": "2-13-1836923w",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 20
                                },
                                {
                                    "Name": "iPhone  Gold",
                                    "VarinatId": "2-13-1837045e",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 8  Grey",
                                    "VarinatId": "2-13-1837167r",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 30
                                },
                                {
                                    "Name": "iPhone Silver",
                                    "VarinatId": "2-13-1837289t",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 40
                                },
                                {
                                    "Name": "iPhone Gold",
                                    "VarinatId": "2-13-18373101y",
                                    "Color": "Gold",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 70
                                }
                            ]
                        },
                        {
                            "ShopName": "M1 eshope",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112u",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415i",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617o",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819p",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021a",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223s",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "IMM Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112d",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415f",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617g",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819h",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021j",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223k",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "T3 Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112l",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415z",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617x",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819c",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021v",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223b",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Suntec Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112n",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415m",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617q",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819w",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021e",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223r",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Westmall Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112t",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415y",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617u",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819i",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021o",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223p",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Tampines Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112as",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415sd",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617fg",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819hj",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021kl",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223zx",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Parkway Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112xc",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415vb",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617nm",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819qw",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021er",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223ty",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "IIM Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112yu",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415op",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617as",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819df",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021gh",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223hj",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "M1 eshope Virtual ",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112kl",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415zx",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617xcv",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819bnm",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021qwe",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223rty",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Compasspoint Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112yui",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415opa",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617sdfg",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819ghj",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021klz",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223xcv",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Paragon Koisk",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112nmjg",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415mngf",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617cvgf",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819cvdf",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021vcdf",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223mnjk",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Wetest",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112mnbhj",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415mnbhj",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617mnbhj",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819mnbhjk",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021cvbnmlkj",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223mnbvcfghy",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        },
                        {
                            "ShopName": "Wetest",
                            "ShopId": "{D5DC5070-C334-436F-B64E-6B2A08332DAB}s",
                            "Variants": [
                                {
                                    "Name": "Grey",
                                    "VarinatId": "2-13-183681112xcvbnmkj",
                                    "Color": "Space Grey",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 90
                                },
                                {
                                    "Name": "Silver",
                                    "VarinatId": "2-13-183691415xdsxcfvgb",
                                    "Color": "Silver",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 70
                                },
                                {
                                    "Name": "i 8",
                                    "VarinatId": "2-13-183701617dcxcswert",
                                    "Color": "Gold",
                                    "Size": "64GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": " 8",
                                    "VarinatId": "2-13-183711819ytredfghnb",
                                    "Color": "Space Grey",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 10
                                },
                                {
                                    "Name": "iPhone 9",
                                    "VarinatId": "2-13-183722021poiukjmn",
                                    "Color": "Silver",
                                    "Size": "256GB",
                                    "InStock": false,
                                    "StockCount": 1
                                },
                                {
                                    "Name": "Gold 5",
                                    "VarinatId": "2-13-183732223uytghjmnb",
                                    "Color": "Gold",
                                    "Size": "512GB",
                                    "InStock": false,
                                    "StockCount": 2
                                }
                            ]
                        }
                    ]
                };
                /*Variant selection start here */
                variantSelection();
                function variantSelection() {
                    var variantdata = [];
                    $scope.variantsection = {
                        "Variants": [
                        ]
                    };
                    for (var i = 0; i < $scope.phoneaccessories.Productdata.length; i++) {
                        variantdata = $scope.phoneaccessories.Productdata[i].Variants;
                        for (var j = 0; j < variantdata.length; j++) {
                            variantdata[j].store = $scope.phoneaccessories.Productdata[i].ShopName;
                            variantdata[j].ShopId = $scope.phoneaccessories.Productdata[i].ShopId;
                            $scope.variantsection.Variants.push(variantdata[j]);
                        }
                    }
                    console.log($scope.variantsection.Variants);
                }
                $scope.resultArray = $scope.variantsection.Variants;
                /*add active flag start here*/
                for (var i = 0; i < $scope.variantsection.Variants.length; i++) {
                    $scope.variantsection.Variants[i].active = false;
                }
                /*add active flag end  here*/
                /*plan selection flag start here*/
                $scope.selectedPlan;
                $scope.index;
                $scope.selectedRow = function (phoneaccessorie) {
                    for (var i = 0; i < $scope.variantsection.Variants.length; i++) {
                        console.log($scope.variantsection.Variants[i].VarinatId == phoneaccessorie.VarinatId);
                        $scope.variantsection.Variants[i].active = false;
                        if ($scope.variantsection.Variants[i].VarinatId == phoneaccessorie.VarinatId) {
                            $scope.variantsection.Variants[i].active = true;
                            if ($scope.index) {
                                $scope.variantsection.Variants[$scope.index].active = false;
                            }
                            $scope.selectedPlan = phoneaccessorie;

                        }
                    }
                    console.log(phoneaccessorie);
                    //$scope.selectedPlan = phoneaccessorie;
                };
                console.log($scope.variantsection.Variants);
                /*plan selection flag end here*/
                /*Variant selection end  here */
                /*filter section start here */
                var filterArray = [];
                $scope.disableflag = false;
                // var filterArray = [
                //     {'Color':['Silver','Space Grey']},
                //     {'Size':['64GB','256GB']}
                // ];
                /*check box filter section start here*/
                $scope.filterSection = function (selectionobject, status) {
                    $scope.checkedflag = undefined;
                    if (status) {
                        // var keypresent = false;
                        if (filterArray.hasOwnProperty(selectionobject.selectedBy)) {

                            if (!$scope.disableflag) {
                                $scope.disableflag = true;
                                filterArray[selectionobject.selectedBy].push(selectionobject.name);
                                $scope.disableflag = false;
                            }
                            // keypresent = true;
                            // filterArrayOnLoop(filterArray, $scope.variantsection.Variants);
                        } else {
                            if (!$scope.disableflag) {
                                $scope.disableflag = true;
                                filterArray[selectionobject.selectedBy] = [];
                                filterArray[selectionobject.selectedBy].push(selectionobject.name);
                                $scope.disableflag = false;
                            }
                        }
                        filterArrayOnLoop(filterArray, $scope.variantsection.Variants);
                    }
                    else {
                        //if (filterArray !== undefined && filterArray.length != 0 && filterArray[selectionobject.selectedBy] !== undefined) {
                        if (!$scope.disableflag) {
                            $scope.disableflag = true;
                            var index = filterArray[selectionobject.selectedBy].indexOf(selectionobject.name);
                            if (index > -1) {
                                filterArray[selectionobject.selectedBy].splice(index, 1);
                            }
                            $scope.disableflag = false;
                        }
                        //}
                        filterArrayOnLoop(filterArray, $scope.variantsection.Variants);
                    }
                    return false;
                };
                /*check box filter section end here*/
                /*filter function start here*/
                var resultArray;
                var data = $scope.variantsection.Variants;
                function filterArrayOnLoop(filterArray, data) {

                    var filteredarray = [];
                    $scope.resultArray = [];
                    for (var i in filterArray) {
                        if (filterArray.hasOwnProperty(i)) {
                            var obj = {};
                            obj[i] = filterArray[i];
                            filteredarray.push(obj);
                        }
                    }
                    filterArray = filteredarray;
                    data.forEach(function (record) {
                        let isEligible = true;
                        filterArray.forEach(
                            (filter) => {
                                var selectedkey = Object.keys(filter)[0];
                                let isMatched = false;
                                if (filter[selectedkey] != null && filter[selectedkey].length > 0) {
                                    //to check the recored present i parent object start here
                                    isMatched = filter[selectedkey].some((value) => {
                                        return value === record[selectedkey];
                                    });
                                    //to check the recored present i parent object end here
                                } else {
                                    isMatched = true;
                                }
                                if (!isMatched)
                                    isEligible = false;
                            });
                        if (isEligible) {
                            //resultArray=[];
                            $scope.resultArray.push(record);
                        }
                    });
                    $scope.disableflag = false;
                    console.log(filterArray);
                    console.log($scope.resultArray);
                }
                /*filter function end here*/
                /*filter section end  here */
                /* shop drop down start here*/
                $scope.shopSelection = function () {
                    mcp.activeShop = !mcp.activeShop;
                };
                $scope.clearFilter = function () {
                    var filterArray = [{ 'Color': [] }];
                    $scope.checkedflag = false;
                    filterArrayOnLoop(filterArray, $scope.variantsection.Variants);
                }
                /* shop drop down end here*/
                /* shop filter section start here */
                $scope.shopSection = function () {

                };
                $scope.shopApply = function () {
                    filterArrayOnLoop(filterArray, $scope.variantsection.Variants);
                };
                $scope.clearShop = function () {
                    filterArray = {};
                    $scope.shopcheck = false;
                };
                /*shop filter section end  here */
        /*phone accessories end here*/
    }]);
    angular.module("m1cp.eshop.moose").controller("mooseDevicePlanController", ["$scope", "$window", "httpHandler", "mooseDeviceService", "moosePlanService", function($scope, $window, httpHandler, mooseDeviceService, moosePlanService) {
        var mdp = this;
        mdp.deviceDetails;
        mdp.planDetails;
        mdp.selectedPlan = "";
        $scope.getDeviceData = function(selectedPlan, caseType, resultType) {
            //mdp.deviceDetails = reqObj;
            console.log(selectedPlan);
            console.log(caseType.name);
            console.log(resultType);
            // console.log(mdp.selectedPlan);
            if (caseType.name != "FBB" && (resultType == 'planFirst' && selectedPlan || resultType == 'deviceFirst')) {
                $scope.mooseDevicedata = mooseDeviceService.getDeviceList();
            }
            if (caseType.name == "FBB") {
            $scope.mooseBundledata = {"a":"b"};
            }
            // if(mdp.selectedPlan){
            // $scope.mooseDevicedata = mooseDeviceService.getDeviceList();
            // }
        }
        $scope.getRouterData = function() {
            $scope.mooseRouterdata = {"a":"b"};
        }
        $scope.getPlanData = function(reqObj) {
            console.log(reqObj)
            //mdp.planDetails = reqObj;
            $scope.moosePlandata = moosePlanService.getPlanList();
        }
        $scope.showPlanDetails = function(item) {
        }
        $scope.EditPlanData = function(item) {
            delete $scope.mooseDevicedata;
        }
        $scope.onlyPlanReq = function() {
            if (mdp.onlyPlanReq) {
                delete $scope.mooseDevicedata;
            }
        }
    }]);
    angular.module("m1cp.eshop.moose").service("mooseDeviceService", ["$rootScope", "httpHandler", function($rootScope, httpHandler) {
        var data = {
            "heading": "DEVICE AND PLAN",
            "devices": {
                "title": "Device",
                "type": [{
                    "title": "Mobile",
                    "plans": [{
                        "name": "Alcatel",
                        "id": "Alcatel",
                        "plan": "Alcatel",
                        "Equipment": [{
                            "name": "Iphone X"
                        }, {
                            "name": "Iphone 8 Plus"
                        }]
                    }, {
                        "name": "Apple",
                        "id": "Apple",
                        "plan": "Apple",
                        "Equipment": [{
                            "name": "Iphone X"
                        }, {
                            "name": "Iphone 8 Plus"
                        }, {
                            "name": "Iphone 8"
                        }, {
                            "name": "Iphone 7 Plus"
                        }, {
                            "name": "Iphone 7"
                        }, {
                            "name": "Iphone SE"
                        }, {
                            "name": "Iphone 6s"
                        }, {
                            "name": "Iphone 6s"
                        }, {
                            "name": "Iphone 6 Plus"
                        }, {
                            "name": "Iphone 6"
                        }]
                    }, {
                        "name": "ASUS",
                        "id": "ASUS",
                        "plan": "ASUS",
                        "Equipment": [{}]
                    }, {
                        "name": "Blackberry",
                        "id": "Blackberry",
                        "plan": "Blackberry",
                        "Equipment": [{}]
                    }, {
                        "name": "HTC",
                        "id": "HTC",
                        "plan": "HTC",
                        "Equipment": [{}]
                    }, {
                        "name": "Huawei",
                        "id": "Huawei",
                        "plan": "Huawei",
                        "Equipment": [{}]
                    }, {
                        "name": "LG",
                        "id": "LG",
                        "plan": "LG",
                        "Equipment": [{}]
                    }, {
                        "name": "Motorola",
                        "id": "Motorola",
                        "plan": "Motorola",
                        "Equipment": [{}]
                    }, {
                        "name": "Nokia",
                        "id": "Nokia",
                        "plan": "Nokia",
                        "Equipment": [{}]
                    }, {
                        "name": "OPPO",
                        "id": "OPPO",
                        "plan": "OPPO",
                        "Equipment": [{}]
                    }, {
                        "name": "Samsung",
                        "id": "Samsung",
                        "plan": "Samsung",
                        "Equipment": [{}]
                    }, {
                        "name": "Sharp",
                        "id": "Sharp",
                        "plan": "Sharp",
                        "Equipment": [{}]
                    }, {
                        "name": "Sony",
                        "id": "Sony",
                        "plan": "Sony",
                        "Equipment": [{}]
                    }, {
                        "name": "Xiaomi",
                        "id": "Xiaomi",
                        "plan": "Xiaomi",
                        "Equipment": [{}]
                    }]
                }, {
                    "title": "Tablets",
                    "plans": [{
                        "name": "Apple",
                        "id": "Apple-1",
                        "plan": "Apple"
                    }, {
                        "name": "Samsung",
                        "id": "Samsung-1",
                        "plan": "Samsung"
                    }]
                }, {
                    "title": "Dongles",
                    "plans": [{
                        "name": "Huawei",
                        "id": "Huawei-1",
                        "plan": "Huawei"
                    }, {
                        "name": "Prolink",
                        "id": "Prolink-1",
                        "plan": "Prolink"
                    }]
                }]
            }
        }
        var data_2 = {
              "Id": "P201-231231-231",
              "Title": "Apple iPhoneX.", 
              "Description": "Key USP.",
              "FreeGift": "FreeGift Section",
              "Specification": {
                "Values": {
                  "Camera": "Front:5MP, Rear:12MP",
                  "Image": "{77565679-3B2D-4611-8E86-ECC2F8388F67}",
                  "Memory": "",
                  "Network": "LTE",
                  "Operating System": "{EBC7BB0C-8A39-47EA-895B-149B385218C2}",
                  "Processor": "MSM8953/2.0GHz",
                  "Screen Size": "5.2\""
                }
              },
              "Variants": [
                {
                  "VariantId": "2-3012-123012",
                  "Color": "Silver",
                  "Size": "64GB",
                  "Images": [
                    "../../images/phonedetails-samplePhone-desktop.PNG",
                   "../../images/Phone4-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:false
                },  {
                  "VariantId": "2-3012-123012",
                  "Color": "Silver",
                  "Size": "246 GB",
                  "Images": [
                    "../../images/Phone6-2x-desktop.png",
                   "../../images/Phone4-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:true
                },
                {
                  "VariantId": "2-3012-123012",
                  "Color": "Red",
                  "Size": "252GB",
                  "Images": [
                    "../../images/Phone6-2x-desktop.png",
                   "../../images/Phone4-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:true
                },
                  {
                  "VariantId": "2-3012-123012",
                  "Color": "Silver",
                  "Size": "640 GB",
                  "Images": [
                    "../../images/Phone6-2x-desktop.png",
                   "../../images/Phone4-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:false
                },
                {
                  "VariantId": "2-3012-123012",
                  "Color": "Red",
                  "Size": "640GB",
                  "Images": [
                    "../../images/Phone6-2x-desktop.png",
                   "../../images/Phone4-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:false
                },
                {
                  "VariantId": "2-3012-123013",
                  "Color": "Black",
                  "Size": "64GB",
                  "Images": [
                     "../../images/Phone4-2x-desktop.png",
                   "../../images/Phone6-2x-desktop.png",
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:false
                },
                {
                  "VariantId": "2-3012-123014",
                  "Color": "Black",
                  "Size": "128GB",
                   "Images": [
                    "../../images/Phone6-2x-desktop.png",
                   "../../images/Phone4-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:true
                },
                 {
                  "VariantId": "2-3012-123015",
                  "Color": "Blue",
                  "Size": "128GB",
                   "Images": [
                    "../../images/Phone6-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png",
                   "../../images/Phone4-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:false
                },
                {
                  "VariantId": "2-3012-123016",
                  "Color": "Gold",
                  "Size": "128GB",
                   "Images": [
                    "../../images/Phone6-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:true
                },
                {
                  "VariantId": "2-3012-123017",
                  "Color": "Gold",
                  "Size": "108GB",
                  "Images": [
                   "../../images/Phone4-2x-desktop.png",
                    "../../images/Phone6-2x-desktop.png"
                  ],
                  "Price": {
                    "ListPrice": "$1212",
                    "Price": "$122"
                  },
                  outOfStock:false
                }
              ],
              "BrochureDownloadLink": "/-/media/documents/m1cp/product/applex.pdf",
              "PromotionBanners": [
                {
                  "Title": "",
                  "Image": "",
                  "Description": "",
                  "Cta": ""
                },
                {
                  "Title": "",
                  "Image": "",
                  "Description": "",
                  "Cta": ""
                }
              ]
            }
        this.value = "";
        // this.getDeviceList= function(){
        //   var requestmethod = 'POST';
        //   var requesturl = '';
        //   var requestdatatype = 'JSON';
        //   var requestobject = {"hi":"hello"};
        //   var promisereturned = httpHandler.fetchdata(requestmethod, requesturl, requestobject, requestdatatype);
        //   promisereturned.then(
        //     function success(response) {
        //       return  response.data;
        //     },
        //       function error(response) {
        //         return response.error;
        //     }
        //   )
        // };
        this.getDeviceList = function() {
            return data;
        }
    }]);
    angular.module("m1cp.eshop.moose").service("moosePlanService", ["$rootScope", function($rootScope) {
        var data = {
            "categoryProductData": [{
                "__interceptors": [{}],
                "__target": null,
                "order": 1,
                "categoryName": "Smartphone (Big Data)",
                "Name": "SmartPhoneBigData",
                "Id": "e02e4d2a-888e-494e-8bff-62b388fda551",
                "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SmartPhoneBigData",
                "plans": [{
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": "40.0000",
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": "2",
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "mins",
                    "planSMSMMSDisplay": "SMS/MMS",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG206514",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11502",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(e) 40",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11502",
                    "Id": "9983eb8a-c018-447f-9bfa-e7e5be50d248",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11502",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 70,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 15,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG206515",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11503",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(e) 70",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11503",
                    "Id": "b15651c2-c4ef-4b24-ba19-c6fdbef87842",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11503",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }],
                "ItemId": {
                    "Guid": "00000000-0000-0000-0000-000000000000",
                    "IsGlobalNullId": true,
                    "IsNull": true
                },
                "TemplateId": "dba296f4-7206-4a82-9ce5-5870e120c4df"
            }, {
                "__interceptors": [{}],
                "__target": null,
                "order": 2,
                "categoryName": "Smartphone (Voice+)",
                "plans": [{
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 42,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "200 mins",
                    "planSMSMMSDisplay": "1000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204778",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11433",
                    "planCannotRecontract": false,
                    "displayName": "i-Lite+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11381",
                    "Id": "1332f85e-cbe6-4b13-b9d1-b2fcdd70ec34",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11381",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 62,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 4,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "300 mins",
                    "planSMSMMSDisplay": "1200",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204780",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11434",
                    "planCannotRecontract": false,
                    "displayName": "i-Reg",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11382",
                    "Id": "c98f67c1-12ad-42f6-aa55-cde6224bcc67",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11382",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 102,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 7,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "800 mins",
                    "planSMSMMSDisplay": "2000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204784",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11436",
                    "planCannotRecontract": false,
                    "displayName": "i-Max",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11384",
                    "Id": "6900c557-c1e4-43ba-8a22-773a117755c5",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11384",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 228,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 13,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "5000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204786",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11437",
                    "planCannotRecontract": false,
                    "displayName": "i-Max+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11385",
                    "Id": "2ba427ec-8c89-4072-95f1-c09293cb6d73",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11385",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 28,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 300,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "500",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204787",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11438",
                    "planCannotRecontract": false,
                    "displayName": "Lite",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11392",
                    "Id": "c6c94b8e-16b0-482b-b0e1-a3fd87383d48",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11392",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 42,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "200 mins",
                    "planSMSMMSDisplay": "1000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204788",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11439",
                    "planCannotRecontract": false,
                    "displayName": "Lite+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11393",
                    "Id": "09e79845-ce9b-4220-8a22-f1af444de86e",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11393",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 62,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 4,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "300 mins",
                    "planSMSMMSDisplay": "1200",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204790",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11440",
                    "planCannotRecontract": false,
                    "displayName": "Reg",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11394",
                    "Id": "ef4b4d16-ce53-448d-86ce-5421bab2d903",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11394",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 82,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 5,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "400 mins",
                    "planSMSMMSDisplay": "1500",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204792",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11441",
                    "planCannotRecontract": false,
                    "displayName": "Reg+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11395",
                    "Id": "797b3e18-bb94-4e9c-aba4-f812f7bb52e5",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11395",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 102,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 7,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "800 mins",
                    "planSMSMMSDisplay": "2000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204794",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11442",
                    "planCannotRecontract": false,
                    "displayName": "Max",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11396",
                    "Id": "2eb12ed9-5a92-4624-9550-cd75ce28e579",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11396",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 228,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 13,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "5000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204796",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11443",
                    "planCannotRecontract": false,
                    "displayName": "Max+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11397",
                    "Id": "c225e1d4-f392-41bf-adaa-956c0d37e02e",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11397",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 90,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 30,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG206516",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11504",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(e) 90",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11504",
                    "Id": "deff6295-55a4-4708-be21-07edd4d07b2e",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SmartphoneVoicePlus/2-13-GSM11504",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }],
                "ItemId": {
                    "Guid": "00000000-0000-0000-0000-000000000000",
                    "IsGlobalNullId": true,
                    "IsNull": true
                },
                "Name": "SmartphoneVoicePlus",
                "Id": "56d6457a-c128-407b-a008-c761fd5da26b",
                "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SmartphoneVoicePlus",
                "TemplateId": "dba296f4-7206-4a82-9ce5-5870e120c4df"
            }, {
                "__interceptors": [{}],
                "__target": null,
                "order": 3,
                "categoryName": "SIM-Only (Big Data)",
                "plans": [{
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 25.68,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 6,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "500 mins",
                    "planSMSMMSDisplay": "10000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG200384",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "",
                    "planComponentId": "11326",
                    "planCannotRecontract": false,
                    "displayName": "ConnectSurf",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM0013",
                    "Id": "312948c8-4a0b-4360-a572-d55576033b93",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SIMOnlyBigData/2-13-GSM0013",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 28,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 200,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "500",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204777",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11432",
                    "planCannotRecontract": false,
                    "displayName": "i-Lite",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11380",
                    "Id": "7dc19dde-de34-4b02-bc57-b487f153b124",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SIMOnlyBigData/2-13-GSM11380",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 82,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 5,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "400 mins",
                    "planSMSMMSDisplay": "1500",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204782",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11435",
                    "planCannotRecontract": false,
                    "displayName": "i-Reg+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11383",
                    "Id": "2af2878e-62b3-4aa4-a294-c15642b4b15c",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SIMOnlyBigData/2-13-GSM11383",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 20,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 2,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800661",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11493",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 20",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11493",
                    "Id": "a69e81b2-a9e3-4241-9bde-abc890d0f53d",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11493",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 20,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 5,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800661",
                    "planContractNonCORI": "{8746BB9B-29D5-4AE7-9568-D4560D144C57}",
                    "planContractCORI": "{8746BB9B-29D5-4AE7-9568-D4560D144C57}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11493",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 20 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11493C",
                    "Id": "0db4e775-1feb-4c2f-b9a1-3cd686172fec",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11493C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 40,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 10,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800662",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11494",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 40",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11494",
                    "Id": "4c15776a-03c5-4f1e-b835-41f52fb473f7",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11494",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 40,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 15,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800662",
                    "planContractNonCORI": "{9DC7A792-6C31-464E-99B0-DAE27F6999AD}",
                    "planContractCORI": "{9DC7A792-6C31-464E-99B0-DAE27F6999AD}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11494",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 40 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11494C",
                    "Id": "3a627052-76c0-4490-a08a-eb98f60c1fa8",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11494C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 50,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 15,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800663",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11495",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 50",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11495",
                    "Id": "4a25dbe5-e726-4130-b761-df3c716a24c0",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11495",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 50,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 30,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800663",
                    "planContractNonCORI": "{A68E05DD-BA3F-4270-ADEC-2B61283DAE12}",
                    "planContractCORI": "{A68E05DD-BA3F-4270-ADEC-2B61283DAE12}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11495",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 50 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11495C",
                    "Id": "96bda332-2af0-49bb-abc6-9aeee8b738ad",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11495C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 98,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 25,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "Unlimited",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800664",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11496",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 98",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11496",
                    "Id": "b048fc50-2272-4137-a715-53b243d50cc2",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11496",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 98,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": "Unlimited",
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "Unlimited",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800664",
                    "planContractNonCORI": "{673621DE-21C7-403C-9623-B79C569A01F2}",
                    "planContractCORI": "{673621DE-21C7-403C-9623-B79C569A01F2}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11496",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 98 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11496C",
                    "Id": "726b33bc-842b-4116-ae5d-03f0fdf65efb",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11496C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }],
                "ItemId": {
                    "Guid": "00000000-0000-0000-0000-000000000000",
                    "IsGlobalNullId": true,
                    "IsNull": true
                },
                "Name": "SIMOnlyBigData",
                "Id": "af613db7-fcc7-4513-a940-26f12d87ef65",
                "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SIMOnlyBigData",
                "TemplateId": "dba296f4-7206-4a82-9ce5-5870e120c4df"
            }, {
                "__interceptors": [{}],
                "__target": null,
                "order": 4,
                "categoryName": "Others",
                "plans": [{
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 25.68,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 6,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "500 mins",
                    "planSMSMMSDisplay": "10000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG200384",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "",
                    "planComponentId": "11326",
                    "planCannotRecontract": false,
                    "displayName": "ConnectSurf",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM0013",
                    "Id": "312948c8-4a0b-4360-a572-d55576033b93",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/SIMOnlyBigData/2-13-GSM0013",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 29.96,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "50 mins",
                    "planSMSMMSDisplay": "10000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG200383",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "",
                    "planComponentId": "11327",
                    "planCannotRecontract": false,
                    "displayName": "BlackBerry MessageSurf+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM0014",
                    "Id": "8e7ae33b-409b-4bca-a417-95f8c53f5dd2",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM0014",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }],
                "ItemId": {
                    "Guid": "00000000-0000-0000-0000-000000000000",
                    "IsGlobalNullId": true,
                    "IsNull": true
                },
                "Name": "Others",
                "Id": "cd49de29-8cf2-4a22-940a-bbaecbb65d35",
                "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/Others",
                "TemplateId": "dba296f4-7206-4a82-9ce5-5870e120c4df"
            }, {
                "__interceptors": [{}],
                "__target": null,
                "order": 5,
                "categoryName": "Mobile",
                "plans": [{
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 29.96,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "50 mins",
                    "planSMSMMSDisplay": "10000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG200383",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "",
                    "planComponentId": "11327",
                    "planCannotRecontract": false,
                    "displayName": "BlackBerry MessageSurf+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM0014",
                    "Id": "8e7ae33b-409b-4bca-a417-95f8c53f5dd2",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM0014",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 42,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "200 mins",
                    "planSMSMMSDisplay": "1000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204778",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11433",
                    "planCannotRecontract": false,
                    "displayName": "i-Lite+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11381",
                    "Id": "1332f85e-cbe6-4b13-b9d1-b2fcdd70ec34",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11381",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 62,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 4,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "300 mins",
                    "planSMSMMSDisplay": "1200",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204780",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11434",
                    "planCannotRecontract": false,
                    "displayName": "i-Reg",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11382",
                    "Id": "c98f67c1-12ad-42f6-aa55-cde6224bcc67",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11382",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 102,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 7,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "800 mins",
                    "planSMSMMSDisplay": "2000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204784",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11436",
                    "planCannotRecontract": false,
                    "displayName": "i-Max",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11384",
                    "Id": "6900c557-c1e4-43ba-8a22-773a117755c5",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11384",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 228,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 13,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "5000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204786",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11437",
                    "planCannotRecontract": false,
                    "displayName": "i-Max+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11385",
                    "Id": "2ba427ec-8c89-4072-95f1-c09293cb6d73",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11385",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 28,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 100,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "500",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204787",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11438",
                    "planCannotRecontract": false,
                    "displayName": "Lite",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11392",
                    "Id": "c6c94b8e-16b0-482b-b0e1-a3fd87383d48",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11392",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 42,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "200 mins",
                    "planSMSMMSDisplay": "1000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204788",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11439",
                    "planCannotRecontract": false,
                    "displayName": "Lite+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11393",
                    "Id": "09e79845-ce9b-4220-8a22-f1af444de86e",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11393",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 62,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 4,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "300 mins",
                    "planSMSMMSDisplay": "1200",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204790",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11440",
                    "planCannotRecontract": false,
                    "displayName": "Reg",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11394",
                    "Id": "ef4b4d16-ce53-448d-86ce-5421bab2d903",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11394",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 82,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 5,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "400 mins",
                    "planSMSMMSDisplay": "1500",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204792",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11441",
                    "planCannotRecontract": false,
                    "displayName": "Reg+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11395",
                    "Id": "797b3e18-bb94-4e9c-aba4-f812f7bb52e5",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11395",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 102,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 7,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "800 mins",
                    "planSMSMMSDisplay": "2000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204794",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11442",
                    "planCannotRecontract": false,
                    "displayName": "Max",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11396",
                    "Id": "2eb12ed9-5a92-4624-9550-cd75ce28e579",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11396",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 228,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 13,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "5000",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204796",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11443",
                    "planCannotRecontract": false,
                    "displayName": "Max+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11397",
                    "Id": "c225e1d4-f392-41bf-adaa-956c0d37e02e",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11397",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 42,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "200 mins",
                    "planSMSMMSDisplay": "1000",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204779",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11444",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare i-Lite+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11444",
                    "Id": "27936ba4-88db-4bdd-905a-b089c8115a70",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11444",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 62,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 4,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "300 mins",
                    "planSMSMMSDisplay": "1200",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204781",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11445",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare i-Reg",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11445",
                    "Id": "b7209ee6-d86e-448f-97e3-11a3320299f4",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11445",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 82,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 5,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "400 mins",
                    "planSMSMMSDisplay": "1500",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204783",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11446",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare i-Reg+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11446",
                    "Id": "39bb2db0-0bf3-4e7d-b630-78ed0a73ece9",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11446",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 102,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 7,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "800 mins",
                    "planSMSMMSDisplay": "2000",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204785",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11447",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare i-Max",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11447",
                    "Id": "963e7a3f-7bb3-489b-acda-06f92c8671ba",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11447",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 42,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 3,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "200 mins",
                    "planSMSMMSDisplay": "1000",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204789",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11448",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare Lite+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11448",
                    "Id": "b682f02c-2e99-49dd-87b8-a87b321f8e66",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11448",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 62,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 4,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "300 mins",
                    "planSMSMMSDisplay": "1200",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204791",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11449",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare Reg",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11449",
                    "Id": "020e134e-f596-42ef-b878-7cf8f1e17d7f",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11449",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 82,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 5,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "400 mins",
                    "planSMSMMSDisplay": "1500",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204793",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11450",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare Reg+",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11450",
                    "Id": "5abe1a7e-b261-4c83-9273-89970c05edbb",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11450",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 102,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 7,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "800 mins",
                    "planSMSMMSDisplay": "2000",
                    "planSupplimentaryLine": true,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG204795",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11451",
                    "planCannotRecontract": false,
                    "displayName": "SurfShare Max",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11451",
                    "Id": "5db39c86-be48-4371-8de2-805dedee4315",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11451",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 20,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 2,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800661",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11493",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 20",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11493",
                    "Id": "a69e81b2-a9e3-4241-9bde-abc890d0f53d",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11493",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 20,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 5,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800661",
                    "planContractNonCORI": "{8746BB9B-29D5-4AE7-9568-D4560D144C57}",
                    "planContractCORI": "{8746BB9B-29D5-4AE7-9568-D4560D144C57}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11493",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 20 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11493C",
                    "Id": "0db4e775-1feb-4c2f-b9a1-3cd686172fec",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11493C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 40,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 10,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800662",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11494",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 40",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11494",
                    "Id": "4c15776a-03c5-4f1e-b835-41f52fb473f7",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11494",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 40,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 15,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800662",
                    "planContractNonCORI": "{9DC7A792-6C31-464E-99B0-DAE27F6999AD}",
                    "planContractCORI": "{9DC7A792-6C31-464E-99B0-DAE27F6999AD}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11494",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 40 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11494C",
                    "Id": "3a627052-76c0-4490-a08a-eb98f60c1fa8",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11494C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 50,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 15,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800663",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11495",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 50",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11495",
                    "Id": "4a25dbe5-e726-4130-b761-df3c716a24c0",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11495",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 50,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 30,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800663",
                    "planContractNonCORI": "{A68E05DD-BA3F-4270-ADEC-2B61283DAE12}",
                    "planContractCORI": "{A68E05DD-BA3F-4270-ADEC-2B61283DAE12}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11495",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 50 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11495C",
                    "Id": "96bda332-2af0-49bb-abc6-9aeee8b738ad",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11495C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 98,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 25,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "Unlimited",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800664",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11496",
                    "planCannotRecontract": true,
                    "displayName": "mySIM(3) 98",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11496",
                    "Id": "b048fc50-2272-4137-a715-53b243d50cc2",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11496",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 98,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": "Unlimited",
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "Unlimited",
                    "planSMSMMSDisplay": "Unlimited",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG800664",
                    "planContractNonCORI": "{673621DE-21C7-403C-9623-B79C569A01F2}",
                    "planContractCORI": "{673621DE-21C7-403C-9623-B79C569A01F2}",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11496",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(3) 98 (12-month)",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11496C",
                    "Id": "726b33bc-842b-4116-ae5d-03f0fdf65efb",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11496C",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 40,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 2,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "mins",
                    "planSMSMMSDisplay": "SMS/MMS",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG206514",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11502",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(e) 40",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11502",
                    "Id": "9983eb8a-c018-447f-9bfa-e7e5be50d248",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11502",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }, {
                    "__interceptors": [{}],
                    "__target": null,
                    "ListPrice": 70,
                    "CORIUser": false,
                    "Recontract": false,
                    "CORIEmail": null,
                    "ParentCategories": [],
                    "M1_Addon_NewUser_Hidden": null,
                    "M1_Addon_CORI_Default": null,
                    "M1_Addon_CORI_Hidden": null,
                    "M1_Addon_CORI_Optional": null,
                    "M1_Addon_NewUser_Default": null,
                    "M1_Addon_NewUser_Optional": null,
                    "planDataBundleDisplay": 15,
                    "planRetired": false,
                    "planOutgoingCallsDisplay": "100 mins",
                    "planSMSMMSDisplay": "100",
                    "planSupplimentaryLine": false,
                    "planInfoOnly": false,
                    "planServicePlanId": "PKG206515",
                    "planContractNonCORI": "",
                    "planContractCORI": "",
                    "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                    "planComponentId": "11503",
                    "planCannotRecontract": false,
                    "displayName": "mySIM(e) 70",
                    "ItemId": {
                        "Guid": "00000000-0000-0000-0000-000000000000",
                        "IsGlobalNullId": true,
                        "IsNull": true
                    },
                    "Name": "2-13-GSM11503",
                    "Id": "b15651c2-c4ef-4b24-ba19-c6fdbef87842",
                    "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11503",
                    "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686"
                }],
                "ItemId": {
                    "Guid": "00000000-0000-0000-0000-000000000000",
                    "IsGlobalNullId": true,
                    "IsNull": true
                },
                "Name": "MobilePlans",
                "Id": "94f263c1-1cfe-4094-9676-c679c05eb1a5",
                "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans",
                "TemplateId": "dba296f4-7206-4a82-9ce5-5870e120c4df"
            }],
            "defaultPlan": {
                "__interceptors": [{}],
                "__target": null,
                "ListPrice": 228,
                "CORIUser": false,
                "Recontract": false,
                "CORIEmail": null,
                "ParentCategories": [],
                "M1_Addon_NewUser_Hidden": null,
                "M1_Addon_CORI_Default": null,
                "M1_Addon_CORI_Hidden": null,
                "M1_Addon_CORI_Optional": null,
                "M1_Addon_NewUser_Default": null,
                "M1_Addon_NewUser_Optional": null,
                "planDataBundleDisplay": 12,
                "planRetired": false,
                "planOutgoingCallsDisplay": "Unlimited",
                "planSMSMMSDisplay": "5000",
                "planSupplimentaryLine": false,
                "planInfoOnly": false,
                "planServicePlanId": "PKG204786",
                "planContractNonCORI": "",
                "planContractCORI": "",
                "planContract": "{91B5EB9A-2820-47B0-AAA9-BBD8E68764EE}",
                "planComponentId": "11437",
                "planCannotRecontract": false,
                "displayName": "i-Max+",
                "categoryName": "Smartphone (Voice+)",
                "Name": "2-13-GSM11385",
                "Id": "2ba427ec-8c89-4072-95f1-c09293cb6d73",
                "Path": "/sitecore/Commerce/Catalog Management/Catalogs/M1CPPlanMaster/Plans/MobilePlans/2-13-GSM11385",
                "TemplateId": "09e6e40f-6bc8-4622-9308-b52113f5a686",
                "ItemId": {
                    "Guid": "00000000-0000-0000-0000-000000000000",
                    "IsGlobalNullId": true,
                    "IsNull": true
                }
            }
        };
        this.getPlanList = function() {
            return data;
        }
    }]);
    //start here moose waiver Controller
	angular.module("m1cp.eshop.moose").service("mooseMainLineService", ["$rootScope", "httpHandler", function ($rootScope, httpHandler) {
		this.getMainLineList = function () {
            var URL = "serviceLines.json";
            return httpHandler.fetchdata('GET', URL, "", "json");
        }
    }]);

	angular.module("m1cp.eshop.moose").controller("moosewaiverController", ["$scope", "$window", "errorHandler", "httpHandler",'navigationHandler', 'eshopSelection', function($scope, $window, errorHandler, httpHandler,navigationHandler,eshopSelection) {
	    /*moose waiver start here*/
	    var stickycontainer = {
	        "SelectPhone": {
	            "VariantColor": null,
	            "VaritantSize": null,
	            "Image": null,
	            "VariantId": null,
	            "StepId": "ecfe5080-db2a-4064-9b34-34a5f9ba323a",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 0,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": "",
	            "PostUrl": "",
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": false,
	                "previousactive": true,
	                "nextactive": true,
	                "isform": false,
	                "alignbutton": "right"
	            },
	            "Name": "PHONE",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": "{35de743a-42cc-4786-b739-8509bd1d7698}",
	            "StickyBarText": "Alcatel PIXI4 7\" Smokey Grey Castle.Proxies.GlassBaseProxy 8GB",
	            "CartText": null,
	            "CartHelpText": "Alcatel PIXI4 7\" Smokey Grey",
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": {
	                    "CurrencyCode": null,
	                    "Amount": 199.0000
	                }
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        },
	        "SelectPlan": {
	            "PlanName": "2-13-GSM11392",
	            "Recontract": false,
	            "StepId": "4708d452-2f11-400f-b1aa-e620b21de40c",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 1,
	            "Selection": {
	                "Id": "00000000-0000-0000-0000-000000000000",
	                "Contract": null,
	                "IsCORI": false,
	                "CORIEmail": null,
	                "Recontract": false,
	                "ListPrice": 28.0000,
	                "CompanyBRName": null,
	                "PlanName": "2-13-GSM11392",
	                "DisplayName": "Lite"
	            },
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": true,
	                "previousactive": true,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": "right"
	            },
	            "Name": "PLAN",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": "{00000000-0000-0000-0000-000000000000}",
	            "StickyBarText": "2-13-GSM11392",
	            "CartText": null,
	            "CartHelpText": "Lite",
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        },
	        "SelectNumber": {
	            "Number": "97932399",
	            "StepId": "49a3fb93-02cf-48f9-86a7-eaf370a570a3",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 2,
	            "Selection": {
	                "Number": "97932399",
	                "Price": 0.0,
	                "Promotion": null,
	                "PortIn": {
	                    "Provider": null,
	                    "IdType": 0,
	                    "IdDocumentNumber": null,
	                    "BillAccountNumber": null,
	                    "SubscriberName": null
	                },
	                "NumberType": 3,
	                "CartText": null,
	                "PackageId": "d4f4f259d3074c43820ef664a6bffb1f"
	            },
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": true,
	                "previousactive": true,
	                "nextactive": true,
	                "isform": false,
	                "alignbutton": "default"
	            },
	            "Name": "NUMBER",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": "PreferredNumber 97932399",
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": {
	                    "CurrencyCode": null,
	                    "Amount": 0.0
	                }
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        },
	        "SelectAddon": {
	            "addOn": null,
	            "addonList": [],
	            "StepId": "85dd7b74-ff6f-42c1-9624-506a61e8dd90",
	            "IsActive": true,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 3,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": true,
	                "previousactive": true,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": "default"
	            },
	            "Name": "ADDON",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": null,
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        },
	        "EntityId": "d4f4f259d3074c43820ef664a6bffb1f",
	        "PackageType": 1,
	        "Name": "PhoneEntry",
	        "Identifier": "gsm.phoneentry",
	        "CurrentStep": {
	            "addOn": null,
	            "addonList": [],
	            "StepId": "85dd7b74-ff6f-42c1-9624-506a61e8dd90",
	            "IsActive": true,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 3,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": "https://jkgghkhhiljhljhljljl",
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "button",
	                "nextshow": true,
	                "previousshow": true,
	                "previousactive": true,
	                "nextactive": true,
	                "isform": false,
	                "alignbutton": "default"
	            },
	            "Name": "ADDON",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": null,
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        },
	        "Steps": [{
	            "StoreName": null,
	            "DeliveryDate": null,
	            "DeliveryTime": null,
	            "DeliveryCharge": 0.0,
	            "DeliveryType": 0,
	            "CustomerInformation": null,
	            "PopStationId": null,
	            "StepId": "e0b84046-6d62-41b8-a4ab-5b555c5c8840",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 4,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": null,
	                "previouslabel": null,
	                "buttontype": null,
	                "nextshow": false,
	                "previousshow": false,
	                "previousactive": false,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": null
	            },
	            "Name": "DELIVERY",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": null,
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        }, {
	            "IsSunrise": false,
	            "BillingAddress": null,
	            "ResidentialAddress": null,
	            "CustomerStatus": null,
	            "FirstName": null,
	            "LastName": null,
	            "Email": null,
	            "ContactNumber": null,
	            "IsExistingCustomer": false,
	            "StepId": "002b5a5f-fc2b-4501-bfb0-0f4914114b60",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 5,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": null,
	                "previouslabel": null,
	                "buttontype": null,
	                "nextshow": false,
	                "previousshow": false,
	                "previousactive": false,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": null
	            },
	            "Name": "VERIFYDETAIL",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": null,
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        }, {
	            "VariantColor": null,
	            "VaritantSize": null,
	            "Image": null,
	            "VariantId": null,
	            "StepId": "ecfe5080-db2a-4064-9b34-34a5f9ba323a",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 0,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": "",
	            "PostUrl": "",
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": false,
	                "previousactive": true,
	                "nextactive": true,
	                "isform": false,
	                "alignbutton": "right"
	            },
	            "Name": "PHONE",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": "{35de743a-42cc-4786-b739-8509bd1d7698}",
	            "StickyBarText": "Alcatel PIXI4 7\" Smokey Grey Castle.Proxies.GlassBaseProxy 8GB",
	            "CartText": null,
	            "CartHelpText": "Alcatel PIXI4 7\" Smokey Grey",
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": {
	                    "CurrencyCode": null,
	                    "Amount": 199.0000
	                }
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        }, {
	            "PlanName": "2-13-GSM11392",
	            "Recontract": false,
	            "StepId": "4708d452-2f11-400f-b1aa-e620b21de40c",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 1,
	            "Selection": {
	                "Id": "00000000-0000-0000-0000-000000000000",
	                "Contract": null,
	                "IsCORI": false,
	                "CORIEmail": null,
	                "Recontract": false,
	                "ListPrice": 28.0000,
	                "CompanyBRName": null,
	                "PlanName": "2-13-GSM11392",
	                "DisplayName": "Lite"
	            },
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": true,
	                "previousactive": true,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": "right"
	            },
	            "Name": "PLAN",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": "{00000000-0000-0000-0000-000000000000}",
	            "StickyBarText": "2-13-GSM11392",
	            "CartText": null,
	            "CartHelpText": "Lite",
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        }, {
	            "addOn": null,
	            "addonList": [],
	            "StepId": "85dd7b74-ff6f-42c1-9624-506a61e8dd90",
	            "IsActive": true,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 3,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": true,
	                "previousactive": true,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": "default"
	            },
	            "Name": "ADDON",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": null,
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        }, {
	            "Number": "97932399",
	            "StepId": "49a3fb93-02cf-48f9-86a7-eaf370a570a3",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 2,
	            "Selection": {
	                "Number": "97932399",
	                "Price": 0.0,
	                "Promotion": null,
	                "PortIn": {
	                    "Provider": null,
	                    "IdType": 0,
	                    "IdDocumentNumber": null,
	                    "BillAccountNumber": null,
	                    "SubscriberName": null
	                },
	                "NumberType": 3,
	                "CartText": null,
	                "PackageId": "d4f4f259d3074c43820ef664a6bffb1f"
	            },
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": "NEXT",
	                "previouslabel": "BACK",
	                "buttontype": "arrow",
	                "nextshow": true,
	                "previousshow": true,
	                "previousactive": true,
	                "nextactive": true,
	                "isform": false,
	                "alignbutton": "default"
	            },
	            "Name": "NUMBER",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": "PreferredNumber 97932399",
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": {
	                    "CurrencyCode": null,
	                    "Amount": 0.0
	                }
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        }],
	        "IsComplete": false,
	        "IsRecontract": false,
	        "IsCori": false,
	        "IsEdit": true,
	        "IsFreeGiftIncluded": false,
	        "CustomerInfo": {
	            "CustomerId": null,
	            "FirstName": null,
	            "LastName": null,
	            "DateOfBirth": "0001-01-01T00:00:00",
	            "Email": null,
	            "Type": null,
	            "NationUIdNo": null,
	            "Nationality": null,
	            "IdExpiryDate": "0001-01-01T00:00:00",
	            "BillingAddress": {
	                "AddressId": null,
	                "PostalCode": null,
	                "AddressLine1": null,
	                "AddressLine2": null,
	                "AddressLine3": null,
	                "UnitNo": {
	                    "FloorNumber": null,
	                    "DoorNumber": null
	                },
	                "AddressTypeCd": null
	            },
	            "ResidentialAddress": {
	                "AddressId": null,
	                "PostalCode": null,
	                "AddressLine1": null,
	                "AddressLine2": null,
	                "AddressLine3": null,
	                "UnitNo": {
	                    "FloorNumber": null,
	                    "DoorNumber": null
	                },
	                "AddressTypeCd": null
	            },
	            "CustomerStatus": null,
	            "Ebillsubscription": false,
	            "SameAsRegisteredAddress": false,
	            "AccountCollection": []
	        },
	        "DeliveryLocation": {
	            "FulfillmentType": 0,
	            "FulfillmentName": null,
	            "PopStationId": null,
	            "PopStationPostalCode": null,
	            "ShopAddress": null,
	            "DeliveryCharge": 0.0,
	            "CustomeInfo": null,
	            "Delivery": null,
	            "Id": null,
	            "Name": null,
	            "Comments": null,
	            "Policies": [],
	            "ChildComponents": []
	        },
	        "SelectDelivery": {
	            "StoreName": null,
	            "DeliveryDate": null,
	            "DeliveryTime": null,
	            "DeliveryCharge": 0.0,
	            "DeliveryType": 0,
	            "CustomerInformation": null,
	            "PopStationId": null,
	            "StepId": "e0b84046-6d62-41b8-a4ab-5b555c5c8840",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 4,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": null,
	                "previouslabel": null,
	                "buttontype": null,
	                "nextshow": false,
	                "previousshow": false,
	                "previousactive": false,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": null
	            },
	            "Name": "DELIVERY",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": null,
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        },
	        "SelectVerifyDetail": {
	            "IsSunrise": false,
	            "BillingAddress": null,
	            "ResidentialAddress": null,
	            "CustomerStatus": null,
	            "FirstName": null,
	            "LastName": null,
	            "Email": null,
	            "ContactNumber": null,
	            "IsExistingCustomer": false,
	            "StepId": "002b5a5f-fc2b-4501-bfb0-0f4914114b60",
	            "IsActive": false,
	            "IsEdit": false,
	            "IsComplete": false,
	            "Ignore": true,
	            "Order": 5,
	            "Selection": {},
	            "CurrentUrl": "http://m1cpeshop/en/EShop/Gsm/Phones",
	            "BackUrl": null,
	            "PostUrl": null,
	            "NavStyle": {
	                "nextlabel": null,
	                "previouslabel": null,
	                "buttontype": null,
	                "nextshow": false,
	                "previousshow": false,
	                "previousactive": false,
	                "nextactive": false,
	                "isform": false,
	                "alignbutton": null
	            },
	            "Name": "VERIFYDETAIL",
	            "Title": null,
	            "ExternalId": null,
	            "SelectedEntitySitecoreId": null,
	            "StickyBarText": null,
	            "CartText": null,
	            "CartHelpText": null,
	            "Price": {
	                "Monthly": null,
	                "FirstTimeToBill": null,
	                "SellingPrice": null
	            },
	            "ListPrice": null,
	            "Value": null,
	            "Values": [],
	            "Documents": []
	        },
	        "checkCoverage": {
	            "zipcode": 788889,
	            "IsEdit": true,
	            "unitNumber": {
	                "floorNumber": null,
	                "Doornumber": null
	            }
	        }
	    };
        $scope.waivers = {
                "charges": [
                    {
                        "offlinecharges": "Delivery Charge -Reservation",
                        "price": "$20.00",
                        "url": "https://www.google.com/"
                    },
                    {
                        "offlinecharges": "Cam Removal Warranty (Hard Bundle Promo)",
                        "price": "$20.00",
                        "url": "https://www.google.com/"
                    },
                    {
                        "offlinecharges": "Cam Removal Warranty (Genral)",
                        "price": "$20.00",
                        "url": "https://www.google.com/"
                    },
                    {
                        "offlinecharges": "Cam Removal Warranty $100 (Genral)",
                        "price": "$20.00",
                        "url": "https://www.google.com/"
                    },
                    {
                        "offlinecharges": "Cam Removal Service",
                        "price": "$20.00",
                        "url": "https://www.google.com/"
                    },
                    {
                        "offlinecharges": "Cam Removal Service and Warranty",
                        "price": "$20.00",
                        "url": "https://www.google.com/"
                    },
                    {
                        "offlinecharges": "Cam Removal Warranty (Hard Bundle Promo)",
                        "price": "$20.00",
                        "url": "https://www.google.com/"
                    },
                    {
                        "offlinecharges": "Cam Removal Warranty (Hard Bundle)",
                        "price": "$70.00",
                        "url": "https://www.google.com/"
                    }
                ]
        };
        $scope.flag = false;
        $scope.redirection = function(check, url) {
            $scope.disableFlag = check;
            if (check) {
                $window.open(url, '_blank');
            }
        };
        $scope.addionalcharges = {
            "addionalchargesCount": 0,
            "additionalheading": "ADDITIONAL CHARGES",
            "addionaladdchargediscountbtn": "Add Charges",
                "addionalchargesgrid": [
                    {
                "additionalcharegeslabel": "Additional Charges Description 1",
                "pricelabel": "price",
                "chargesDescription": "Pre payment",
                "price": "",
                "buttonapply": "Apply",
                "buttonadd": "Add Charges",
                "voucherApplyFilter": false
                    }
                ]
        };
        $scope.addionalDiscount = {
            "addionalchargesCount": 0,
            "additionalheading": "ADDITIONAL DISCOUNT",
            "addionaladdchargediscountbtn": "Add Discount",
                "addionalchargesgrid": [
                    {
                "additionalcharegeslabel": "Additional Charges Description 1",
                "pricelabel": "price",
                "chargesDescription": "Pre payment",
                "price": "",
                "buttonapply": "Apply",
                "buttonadd": "Add Charges",
                "voucherApplyFilter": false
                    }
                ]
        };
	    /*passing data on next button start here*/
        navigationHandler.subscribeFormSubmit($scope, function formSubmitted() {
            console.log("dddd");
            $scope.nextButtonForCoverage();
        });
        $scope.nextButtonForCoverage = function () {
            console.log($scope.addionalcharges);
            console.log($scope.addionalDiscount);
            eshopSelection.setselecttion($scope.addionalcharges);
        };
	    /*passing data on next button end here*/

        /*moose waiver end here*/
    }]);
	
	angular.module("m1cp.eshop.moose").controller("mooseFlowController", ["$scope", "httpHandler", "$window", function ($scope, httpHandler, $window) {
		
		$scope.checkViolations = function() {
		var URL = "mooseManager.json";
		if ($scope.isSkip == true) {
			 $scope.selection = "skip";
		}
		else {
			$scope.selection = "approve";
		}
		$scope.approvalObj = {
			username : $scope.approval.manager_username,
			password: $scope.approval.manager_password,
			selection: $scope.selection
		}
            var promise = httpHandler.fetchdata("GET", URL, $scope.approvalObj, "json");
            promise.then(
                function success(response) {
					$scope.ErrorMsg = response.ErrorMessage;
					$scope.postUrl = response.postUrl;
					if (response.success == true) {
						$window.location.href = $scope.postUrl;
					}
					else {
						$scope.errorMsg = true;
					}
				}
			);
		}
		$scope.skipViolations = function () {
			$scope.isSkip = true;
			$scope.checkViolations();
		}
		$scope.approveViolations = function () {
			$scope.isSkip = false;
			$scope.checkViolations();
		}
		
	}]);

})();

///
// m1cp.moose - main module
// m1cp.moose.sidebar - child module
// moose.header - child module
// moose.case - child module
// moose.device - child module