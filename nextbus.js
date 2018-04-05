function refreshData()
    {
        x = 30;  // 30 Seconds
        console.clear();
        // Do your thing here
        var rutgers = require('nextbusjs').client();
            rutgers.cacheAgency('rutgers', function (err) {
               if (err) {
                  throw err;
               } else {

                  rutgers.stopPredict('Hill Center', null, function (err, data) {
                     // data will contain:
                     //console.log(data);

                     for (var bus in data){

                       if(data[bus]["predictions"] != null){

                        console.log(data[bus]["title"]);
                        console.log(data[bus]["direction"]);
                        //console.console.log(data[bus]["predictions"]);
                        var time = "";
                        for(var min in data[bus]["predictions"]){
                            time += (data[bus]["predictions"][min] + ' min, ')

                        }
                        //console.log(data[bus]["predictions"]);
                        console.log(time);

                     	console.log("");

                      }
                     }

                  }, 'minutes');
               }
            });
        setTimeout(refreshData, x*1000);
    }
refreshData(); // execute function
