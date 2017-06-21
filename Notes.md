
```
<span ng-bind="module.attr"></span>

<input type="text" <ng-module="module.attr">
```

+ 定义一个filter：
```
module.filter('myfilter', function() {
    return function(statesModel, subString) {
        return statesModel.filter(function (item) {
            if (subString) {
                return item.includes(subString);
            } else {
                return true;
            }
        })
    }
});
```

+ 使用filter:
```
<input type="text" ng-model="subString">
<li ng-repeat="state in statesModel | myfilter:subString">
    <span>{{ state }}</span>
</li>
```

+ 实现switch view：
  考虑ngroute：https://docs.angularjs.org/api/ngRoute/service/$route#example

+ route:
  templateUrl使用文件，controller使用controller name. 

+ week5 的build web application讲述了如何利用AngularJS material设计web app界面。可参考：https://material.angularjs.org/latest/ .
