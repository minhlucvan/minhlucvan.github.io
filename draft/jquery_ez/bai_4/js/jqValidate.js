/*
    jquery validate demo
    available rules:
    phone-number:
        + all are digits or start with "+"
        + following by 11 to 15 digits
    email:
        + split by @
        + before @: non-spacing
        + after @: host.domain
    ddmmyy:
        split by "/", " ", "-"

*/
(function ($) {
    var DEFAULT_OPTIONS = {
        autoCheck: false,
        successMessage: true,
        messageClass: "message",
        errorClass: "message message-error",
        successClass: "message message-success"
    };

    // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
    function isValidDate(dateString)
    {
        // First check for the pattern
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;

        // Parse the date parts to integers
        var parts = dateString.split("/");
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if(year < 1000 || year > 3000 || month == 0 || month > 12)
            return false;

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    };

    function isValidEmail(emailString) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailString);
    }

    function isValidPhone(phoneString) {
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if(phoneString.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }

    var rules = {
        "dd/mm/yyyy": {
            testFunction: isValidDate,
            errorMessage: "the input must match to dd/mm/yyyy format"
        },
        "email": {
            testFunction: isValidEmail,
            errorMessage: "this must me a email address"
        },
        "phone-number": {
            testFunction: isValidPhone,
            errorMessage: "this must me a phone number"

        }
    }
    
    function test(rule, string) {
        if(rules[rule] && typeof rules[rule].testFunction === 'function'){
            return rules[rule].testFunction(string);
        }
        return false;
    }

    $.fn.jqValidate = function (options) {
        var CONFIG = $.extend(DEFAULT_OPTIONS, options);
        var form  = $(this);
        var getVal = function (feild) {
            var value = form.find(feild).val();
            return value;
        };
        
        var onFeildFail = function (rule) {
            form.find("."+CONFIG.messageClass+"[for="+rule.feild.substring(1)+"]").text(rules[rule.rule].errorMessage);
        };

        var clearMessage = function () {
          form.find("."+CONFIG.messageClass).text("");
        };

        var instance = function () {
            this.run = function () {
                if(!CONFIG.rules) return;

                clearMessage();
                for(var rule of CONFIG.rules){
                    var feild = rule.feild;
                    var ruleName = rule.rule;
                    var value = getVal(feild);
                    if(value && value.length > 0){
                        if( test(ruleName, value)){

                        } else {
                            onFeildFail(rule);
                        }
                    };
                }
            }
        };

        return new instance();
    };

}(jQuery))