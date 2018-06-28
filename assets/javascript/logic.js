// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

//Add Ghost Niko
var icon = "https://www.floridahauntedhouses.com/images/map/ghost_24x43_on.png";


function initAutocomplete() {
var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.0902, lng: -95.7129},
    zoom: 4,
    mapTypeId: 'roadmap'
});

// Create the search box and link it to the UI element.
var input = document.getElementById('location-name-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(""); //For some reason, deleting this line breaks the code?

// Bias the SearchBox results towards current map's viewport.
//map.addListener('bounds_changed', function() {
//    searchBox.setBounds(map.getBounds());
//});

//Add Kevin's Kool Koordinates
var markers = [
    {coords:{lat:40.3772, lng:-105.5217}, iconImage:icon, content:"<h3>The Stanley Hotel</h3> <p>Estes Park, Colorado</p><a href='https://www.google.com/maps/place/The+Stanley+Hotel/@40.3833751,-105.5213615,17z/data=!3m1!4b1!4m7!3m6!1s0x876965f3f19aec35:0x68e1f93ba638688!5m1!1s2018-07-09!8m2!3d40.383371!4d-105.5191728'>View on Google Maps</a>"},
    {coords:{lat:36.9859, lng:-119.2321}, iconImage:icon, content:"<h3>Big Foot Family Spotted</h3> <p>Fresno County, California</p><a href='https://www.google.com/maps/place/Fresno+County,+CA/@36.7433172,-120.7610072,8z/data=!3m1!4b1!4m7!3m6!1s0x8094e100be14836f:0xdd1447472d57b4d7!5m1!1s2018-07-09!8m2!3d36.9858984!4d-119.2320784'>View on Google Maps</a>},
    {coords:{lat:41.8781, lng:-87.6298}, iconImage:icon, content:"<h3>The Moth Man</h3> <p>Chicago, Illinois</p><a href='https://www.google.com/maps/place/Chicago,+IL/@41.8339042,-88.0121588,10z/data=!3m1!4b1!4m7!3m6!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!5m1!1s2018-07-09!8m2!3d41.8781136!4d-87.6297982'>View on Google Maps</a>"},
    {coords:{lat:33.3703, lng:-112.5838}, iconImage:icon, content:"<h3>Stardust Ranch</h3>  <p>Buckeye, Arizona</p><a href='https://www.google.com/maps/place/Stardust+Ranch/@33.3135694,-112.4915347,17z/data=!3m1!4b1!4m5!3m4!1s0x872b31a55d0e6869:0x6e48c08f00e1259!8m2!3d33.3135649!4d-112.489346 '>View on Google Maps</a>"},
    {coords:{lat:39.3254, lng:-77.7389}, iconImage:icon, content:"<h3>Ghostly Activites</h3> <p>Harpers Ferry, West Virginia</p><a href='https://www.google.com/maps/place/Harpers+Ferry,+WV+25425/@39.3257538,-77.7501523,15z/data=!3m1!4b1!4m5!3m4!1s0x89b6030decf1954d:0xd65b9aa758b4cd1e!8m2!3d39.3253786!4d-77.7388818'>View on Google Maps</a>"},
    {coords:{lat:36.1699, lng:-115.1398}, iconImage:icon, content:"<h3>Time Warp</h3> <p>Las Vegas, Nevada</p><a href='https://www.google.com/maps/place/Las+Vegas,+NV/@36.1252285,-115.4551984,10z/data=!3m1!4b1!4m5!3m4!1s0x80beb782a4f57dd1:0x3accd5e6d5b379a3!8m2!3d36.1699412!4d-115.1398296'>View on Google Maps</a>"},
    {coords:{lat:47.6253, lng:-122.3222}, iconImage:icon, content:"<h3>A series of Unfortunate Eents</h3> <p>Capitol Hill, Seattle</p><a href='https://www.google.com/maps/place/Capitol+Hill,+Seattle,+WA/@47.6278921,-122.3333217,14z/data=!3m1!4b1!4m5!3m4!1s0x5490152857c86161:0xef487dc6bbc25185!8m2!3d47.625305!4d-122.3221835'>View on Google Maps</a>"},
    {coords:{lat:25.7617, lng:-80.1918}, iconImage:icon, content:"<h3>Villa Paula</h3> <p>Miami, Florida</p><a href='https://www.google.com/maps/place/Villa+Paula+Mansion/@25.8290332,-80.19824,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b167a1d2d183:0x28a0f7e485265f5d!8m2!3d25.8290284!4d-80.1960513'>View on Google Maps</a>"},
    {coords:{lat:45.5264, lng:-123.1209}, iconImage:icon, content:"<h3>Ghostly Shrieks</h3> <p>Forest Grove, Oregon</p><a href='https://www.google.com/maps/place/Forest+Grove,+OR+97116/@45.5236152,-123.1470848,13z/data=!3m1!4b1!4m5!3m4!1s0x549505247745a3c7:0xce1e6d9cf72513f3!8m2!3d45.5263514!4d-123.1208596'>View on Google Maps</a>"},
    {coords:{lat:35.2532, lng:-82.1971}, iconImage:icon, content:"<h3>Mothership Siting</h3> <p>Columbus, North Carolina</p><a href='https://www.google.com/maps/place/Columbus,+NC+28722/@35.2495837,-82.2181495,14z/data=!3m1!4b1!4m5!3m4!1s0x885761ae0221a62d:0x1126dd1d593cbe93!8m2!3d35.2531698!4d-82.1970584'>View on Google Maps</a>"},
    {coords:{lat:29.4241, lng:-98.4936}, iconImage:icon, content:"<h3>Haunted Cafe</h3> <p>San Antonio, Texas</p><a href='https://www.google.com/maps/place/San+Antonio,+TX/@29.4817349,-98.7946064,10z/data=!3m1!4b1!4m5!3m4!1s0x865c58af04d00eaf:0x856e13b10a016bc!8m2!3d29.4241219!4d-98.4936282'>View on Google Maps</a>"},
    {coords:{lat:42.5092, lng:-84.6558}, iconImage:icon, content:"<h3>Stimson Bed and Breakfast</h3> <p>Eaton Rapids, Michigan</p><a href='https://www.google.com/maps/place/Eaton+Rapids,+MI+48827/@42.5095068,-84.686859,13z/data=!3m1!4b1!4m5!3m4!1s0x8822b68377c7c8b9:0xcf2fbeac792071dc!8m2!3d42.5092039!4d-84.655814'>View on Google Maps</a>"},
    {coords:{lat:42.8781, lng:-73.1968}, iconImage:icon, content:"<h3>The Bennington Triangle</h3> <p>Bennington, Vermont</p><a href='https://www.google.com/maps/place/Bennington,+VT+05201/@42.8716996,-73.2208611,13z/data=!3m1!4b1!4m5!3m4!1s0x89e095ac2d56b059:0xc0248b7c22b94623!8m2!3d42.8781345!4d-73.1967741'>View on Google Maps</a>"},
    {coords:{lat:40.2894, lng:-109.9432}, iconImage:icon, content:"<h3>Skinwalkers Ranch</h3> <p>Ballard, West Utah</p><a href='https://www.google.com/maps/place/Ballard,+UT/@40.2900338,-110.0162101,12z/data=!3m1!4b1!4m5!3m4!1s0x874f98633dfde8e7:0xccd24819742eb1cb!8m2!3d40.2894035!4d-109.9432035'>View on Google Maps</a>"},
    {coords:{lat:40.0428, lng:-86.1275}, iconImage:icon, content:"<h3>Fox Hollow Farm</h3> <p>Westfield, Indiana</p><a href='https://www.google.com/maps/place/Fox+Hollow+Farm/@40.0119805,-86.1399405,17z/data=!3m1!4b1!4m5!3m4!1s0x8814ae891d63e479:0xa667f97c0127b949!8m2!3d40.0119764!4d-86.1377518'>View on Google Maps</a>"},
    {coords:{lat:34.0522, lng:-118.2437}, iconImage:icon, content:"<h3>(Rosenheim Mansion) Murder House</h3> <p>Los Angelos, California</p><a href='https://www.google.com/maps/place/Los+Angeles,+CA/@34.0207305,-118.6919321,10z/data=!3m1!4b1!4m5!3m4!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0522342!4d-118.2436849'>View on Google Maps</a>"},
    {coords:{lat:41.9657, lng:-71.6745}, iconImage:icon, content:"<h3>The Conjuring</h3> <p>Harrisville, Rhode Island</p><a href='https://www.google.com/maps/place/The+Stanley+Hotel/@40.3833751,-105.5213615,17z/data=!3m1!4b1!4m7!3m6!1s0x876965f3f19aec35:0x68e1f93ba638688!5m1!1s2018-07-09!8m2!3d40.383371!4d-105.5191728'>View on Google Maps</a>"},
    {coords:{lat:37.235, lng:-115.811111}, iconImage:icon, content:"<h3>Area 51</h3> <p>Lincol County, Nevada</p><a href='https://www.google.com/maps/place/Lincoln+County,+NV/@37.7566176,-116.0940136,8z/data=!3m1!4b1!4m5!3m4!1s0x80b7adb2fe653531:0x30a14b4aeeb9da4!8m2!3d37.660825!4d-114.524264'>View on Google Maps</a>"},
    {coords:{lat:43.0389, lng:-87.9065}, iconImage:icon, content:"<h3>Slenderman</h3> <p>Milwaukee, Wisconsin</p><a href='https://www.google.com/maps/place/Milwaukee,+WI/@43.0580569,-88.1075164,11z/data=!3m1!4b1!4m5!3m4!1s0x880502d7578b47e7:0x445f1922b5417b84!8m2!3d43.0389025!4d-87.9064736'>View on Google Maps</a>"},
    {coords:{lat:38.8445, lng:-82.1371}, iconImage:icon, content:"<h3>The Other Monsters</h3> <p>Point Pleasant, West Virginia</p><a href='https://www.google.com/maps/place/Point+Pleasant,+WV/@38.8525781,-82.1648066,13z/data=!3m1!4b1!4m5!3m4!1s0x88489c818926aae1:0x4294c7ac07660e0f!8m2!3d38.8445251!4d-82.1370889'>View on Google Maps</a>"},
    {coords:{lat:33.4942, lng:-111.9261}, iconImage:icon, content:"<h3>Ghostly Activites</h3> <p>Scottsdale, Arizona</p><a href='https://www.google.com/maps/place/Scottsdale,+AZ/@33.6744664,-112.1386538,10z/data=!3m1!4b1!4m5!3m4!1s0x872b08d9a7772c97:0x26d2e412188fe618!8m2!3d33.4941704!4d-111.9260519'>View on Google Maps</a>"},
];

//loop through markers
for (var i = 0; i < markers.length; i++){
    addMarker(markers[i]);
    } console.log("test 2");

        // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        icon:props.iconImage
        });
        //check for custom icon
        
        if (props.iconImage) {
        //set icon image
        marker.setIcon(props.iconImage);
        }

        //check content
        if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
            content:props.content
        });

        marker.addListener("click", function(){
            infoWindow.open(map, marker);
        });
        }
    }

// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place. CHANGE
$(document).ready(function() {

    $("#search").on("click", function() {

        var places = searchBox.getPlaces();

        //if (places.length == 0) {
        //return;
        //}
        
        // Clear out the old markers.
        //markers.forEach(function(marker) {
        //marker.setMap(null);
        //});
        //markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
        if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
        }

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
        }));

        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
        });
        map.fitBounds(bounds);
    });


});

}
