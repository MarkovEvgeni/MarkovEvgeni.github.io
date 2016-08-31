var round = {
        rounder: function (val) {
            return Math.round(val*100)/100
        }
    };

try {
    module.exports = round;     
} catch (e) {}