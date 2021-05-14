/// <reference path="angular.js" />

var app = angular
                  .module("myModule",[])
                  .controller("myController", function ($scope) {
                    var employees = [
                      { name: "Harsh", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
                      { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "female", salary: 68000 },
                      { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 },
                      { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "female", salary: 53000 },
                      { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 }
                    ];

                    $scope.employees = employees;
                    $scope.sortColumn = "name";
                  });
