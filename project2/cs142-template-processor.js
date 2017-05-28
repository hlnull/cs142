class Cs142TemplateProcessor{
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        var temp = this.template;
        for (var key in dictionary) {
            var re = new RegExp('\\{\\{' + key + '\\}\\}');
            temp = temp.replace(re, dictionary[key]);
        }
        temp = temp.replace(new RegExp('\\{\\{\\w+\\}\\}', "g"), "");
        return temp;
    }
}
