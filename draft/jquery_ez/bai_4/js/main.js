$(document).ready(function () {
    var validator  = $("#demo-form").jqValidate({
        rules: [
            {
                feild: "#phone",
                rule: "phone-number"
            },
            {
                feild: "#email",
                rule: "email"
            },
            {
                feild: "#date",
                rule: "dd/mm/yyyy"
            }
        ]
    });
    
    $("#run-validate").click(function () {
        validator.run();
    })
})