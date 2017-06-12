'use strict';

/**
 * Defined a controller named 'ExampleController' that works with the view template
 * exampleTemplate.html.  We assume that cs142App has already been defined by
 * the main.js controller.  To access this view need to include the controller:
 *
 *  <script src="components/example/exampleController.js"></script>
 *
 * and its view template:
 *   <div ng-include="'components/example/exampleTemplate.html'" ng-controller="ExampleController"></div>
 */

cs142App.controller('ExampleController', ['$scope', function($scope) {

   // $scope.main is defined if we are a child $scope of the main $scope in which
   // case it contains the page's title property.  We update it so the page title
   // will include this view's name "Example".
   if ($scope.main) {
      $scope.main.title = 'CS142 Project #4 - Example';
      $scope.main.motto = "Show me the code";
   }

   /*
    *  The view template accesses there properties:
    *
    *  testVariable = A string property that is displayed by the template. It demonstrates
    *  one-way binding from the scope to html.
    */
   $scope.testVariable = 'Hello World';

   /*  textInput - A string property that is written by a input tag and displayed. It
    *  demonstrates the two-way binding of Angular
    */
   $scope.textInput = '';

   /*  buttonWasClicked - A string property holding the name of the last button clicked.
    *  It is set the buttonClick() handler and read by the view template.
    */
   $scope.buttonWasClicked = '';

   /*
    *  buttonClick - The handler function called when a  button is clicked.  It is passed
    *  the button name.
    */

   $scope.buttonClick = function(buttonName) {
      $scope.buttonWasClicked = buttonName;
   };

    /*
    * name - We read the example model data into the scope variable 'name'
    */
   $scope.name = window.cs142models.exampleModel().name;
}]);
