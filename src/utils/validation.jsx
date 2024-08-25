


export const validation = {
    isNumberKey: function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },
    isNumber: function (str) {
        var pattern = /^\d+\.?\d*$/;
        return pattern.test(str);  // returns a boolean
    },
};