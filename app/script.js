// /**
//  * Created by gl on 19/06/16.
//  */
// $scope.save = function () {
//     $.ajax({
//         type: "POST",
//         url: "EmpService.asmx/InsertEmployee",
//         data: "{'empID':'" + $scope.EmpID + "','firstName':'" +
//         $scope.EmpFirstName + "','lastName':'" + $scope.EmpLastName + "'
//         'address':'" + $scope.EmpAddress + "','city':'" + $scope.EmpCity +
//         "','pincode':'" + $scope.EmpPincode + "','state':'" +
//         $scope.EmpState + "','country':'" + $scope.country + "'}",
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (msg) {
//             alert(msg.d);
//         },
//         error: function (msg) {
//             alert(msg.d);
//         }
//     });
// };

// alert('hi')
var sql = require('mssql');

sql.connect("mssql://devuser:Admin@123@192.168.1.5:56617/Test").then(function() {
    // Query

    new sql.Request().query('select * from VehicleDetails')
        .then(
            function (recordset) {
                console.log(recordset);
            }).catch(function (err) {
                // ... query error checks
                console.log(err);
            });
});

// Test();