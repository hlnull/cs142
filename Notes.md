
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
