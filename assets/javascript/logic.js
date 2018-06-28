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
    {coords:{lat:40.3772, lng:-105.5217}, iconImage:icon, content:"<h3>The Stanley Hotel</h3> Estes Park, Colorado,"},
    {coords:{lat:36.9859, lng:-119.2321}, iconImage:icon, content:"<h3>Big Foot Family Spotted</h3> Fresno County, California,"},
    {coords:{lat:41.8781, lng:-87.6298}, iconImage:icon, content:"<h3>The Moth Man</h3> Chicago, Illinois"},
    {coords:{lat:33.3703, lng:-112.5838}, iconImage:icon, content:"<h3>Stardust Ranch</h3> Buckeye, Arizona"},
    {coords:{lat:39.3254, lng:-77.7389}, iconImage:icon, content:"<h3>Ghostly Activites</h3> Harpers Ferry, West Virginia"},
    {coords:{lat:36.1699, lng:-115.1398}, iconImage:icon, content:"<h3>Time Warp</h3> Las Vegas, Nevada"},
    {coords:{lat:47.6253, lng:-122.3222}, iconImage:icon, content:"<h3>A series of unfortunate events</h3> Capitol Hill, Seattle"},
    {coords:{lat:25.7617, lng:-80.1918}, iconImage:icon, content:"<h3>Villa Paula</h3> Miami, Florida"},
    {coords:{lat:45.5264, lng:-123.1209}, iconImage:icon, content:"<h3>Ghostly Shrieks</h3> Forest Grove, Oregon"},
    {coords:{lat:35.2532, lng:-82.1971}, iconImage:icon, content:"<h3>Mothership Siting</h3> Columbus, North Carolina"},
    {coords:{lat:29.4241, lng:-98.4936}, iconImage:icon, content:"<h3>Haunted Cafe</h3> San Antonio, Texas"},
    {coords:{lat:42.5092, lng:-84.6558}, iconImage:icon, content:"<h3>Stimson Bed and Breakfast</h3> Eaton Rapids, Michigan"},
    {coords:{lat:42.8781, lng:-73.1968}, iconImage:icon, content:"<h3>The Bennington Triangle</h3> Bennington, Vermont"},
    {coords:{lat:40.2894, lng:-109.9432}, iconImage:icon, content:"<h3>Skinwalkers Ranch</h3> Ballard, West Utah"},
    {coords:{lat:40.0428, lng:-86.1275}, iconImage:icon, content:"<h3>Fox Hallow Farm</h3> Westfield, Indiana"},
    {coords:{lat:34.0522, lng:-118.2437}, iconImage:icon, content:"<h3>(Rosenheim Mansion) Murder House</h3> Los Angelos, California"},
    {coords:{lat:41.9657, lng:-71.6745}, iconImage:icon, content:"<h3>The Conjuring</h3> Harrisville, Rhode Island"},
    {coords:{lat:37.235, lng:-115.811111}, iconImage:icon, content:"<h3>Area 51</h3> Lincol County, Nevada"},
    {coords:{lat:43.0389, lng:-87.9065}, iconImage:icon, content:"<h3>Slenderman</h3>Milwaukee, Wisconsin"},
    {coords:{lat:38.8445, lng:-82.1371}, iconImage:icon, content:"<h3>The Other Monsters</h3> Point Pleasant, West Virginia"},
    {coords:{lat:33.4942, lng:-111.9261}, iconImage:icon, content:"<h3>Ghostly Activites</h3> Scottsdale, Arizona"},
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
