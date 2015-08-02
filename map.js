//create AmMap object
        var map = new AmCharts.AmMap();


 // add all your code to this method, as this will ensure that page is loaded
    AmCharts.ready(function() {
      
        
        // set path to images
        map.pathToImages = "ammap/images/";

        /* create data provider object
         map property is usually the same as the name of the map file.

         getAreasFromMap indicates that amMap should read all the areas available
         in the map data and treat them as they are included in your data provider.
         in case you don't set it to true, all the areas except listed in data
         provider will be treated as unlisted.
        */
        var icon = "M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z";
        var dataProvider = {
            map: "worldLow",
           // getAreasFromMap:true  
          // areas:[{id:"ZA", color:"#CC0000"},{id:"US"},{id:"FR"}] 
          images: [{latitude: -1.283300, longitude:36.816700, svgPath:icon, color:"#6c00ff", label:"Nairobi", labelShiftY:6, labelShiftX:3, zoomLevel:5, title:"41.89.73.2", description:"Traceroute"}],
          //areas:[{id:"KE", color:"#CC0000"}]                      
        }; 
        // pass data provider to the map object
        map.dataProvider = dataProvider;

        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: true,
            selectedColor: "#CC0000"
        };

        // let's say we want a small map to be displayed, so let's create it
        map.smallMap = new AmCharts.SmallMap();

        // write the map to container div
        map.write("mapdiv");
    });

 AmCharts.makeChart("mapdiv",
 {
dataProvider: [{
    "status": "ok", 
    "server_id": "stat-app1", 
    "status_code": 200, 
    "version": "2.2", 
    "cached": true, 
    "see_also": [], 
    "time": "2015-07-22T17:51:15.875721", 
    "messages": [], 
    "data_call_status": "supported - connecting to ursa for all data sets", 
    "process_time": 148, 
    "query_id": "3fbf480c-309a-11e5-a360-782bcb34677e", 
    "data": {
        "query_time": "2015-07-07T00:00:00", 
        "resource": "41.67.17.1", 
        "locations": [
            {
                "city": "Khartoum", 
                "country": "SD", 
                "longitude": 32.5342, 
                "covered_percentage": 100.0, 
                "prefixes": [
                    "41.67.16.0/21"
                ], 
                "latitude": 15.5881
            }
        ], 
        "unknown_percentage": 0.0
    }
}]
 } );


 


