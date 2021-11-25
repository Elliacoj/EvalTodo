const checkOldMatchers = {
    toBeAdult: function () {
        return {
            compare: function (actual) {
                if(actual === undefined) {
                    actual = 0;
                }

                let result = [];

                result.pass = actual >= 18;

                if(result.pass) {
                    result.message = "Expected " + actual + " is adult";
                }
                else {
                    result.message = "Expected " + actual + " is not adult";
                }

                return result;
            }
        }
    }
}

export {checkOldMatchers};