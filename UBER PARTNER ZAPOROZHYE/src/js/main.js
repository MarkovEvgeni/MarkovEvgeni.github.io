document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    //
    //Third party components
    //


    //
    //Custom components
    //
    
    numberPositionConversion(inputnumber) {
    if (parseFloat(inputnumber) < 0) {
      var stringifiedNumber = String(inputnumber).slice(1);
    } else {
      var stringifiedNumber = String(inputnumber);
    }
    if (stringifiedNumber.length > 3) {
      var numberPositionQuantity = Math.floor(stringifiedNumber.length / 3);
      var slicer = -3;
      for (var i=1; i<numberPositionQuantity+1; i++) {
        var stringifiedSubstringEnd = stringifiedNumber.slice(slicer);
        var stringifiedSubstringStart = stringifiedNumber.slice(0, slicer);
        if (stringifiedSubstringStart.length == 0) {
        } else {
          stringifiedSubstringStart = stringifiedSubstringStart + ',';
          stringifiedNumber = stringifiedSubstringStart + stringifiedSubstringEnd;
          slicer = slicer - 4;
        }
      }
      if (parseFloat(inputnumber) < 0) {
        stringifiedNumber = '-' + stringifiedNumber;
      }
      return stringifiedNumber
    } else {
      if (parseFloat(inputnumber) < 0) {
        stringifiedNumber = '-' + stringifiedNumber;
      }
      return stringifiedNumber;
    }
  };
  
  
  console.log(numberPositionConversion(31714.88));
    
    //
    //Custom components typescript
    //
    
    //= custom/custom.js

    //= ts/tscript.js

});