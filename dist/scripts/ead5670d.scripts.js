"use strict";angular.module("iGemPlates2014App",["ui.utils"]),angular.module("iGemPlates2014App").controller("TeamCtrl",["$scope","$http",function(a,b){b.get("teams.json").success(function(b){console.log(b),a.entries=b})}]);