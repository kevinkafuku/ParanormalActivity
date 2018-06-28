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
    {coords:{lat:38.7395, lng:-89.6712}, iconImage:icon, content:"<h3>Southern Illinois UFO Triangle</h3> Highland, Illinois"},
    {coords:{lat:33.6198, lng:-86.6089}, iconImage:icon, content:"<h3>Wampus Cat</h3> Truusville, Alabama"},
    {coords:{lat:32.8649, lng:-84.8541}, iconImage:icon,content:"<h3>Beaver Shark</h3> Pine Mountain, Georgia"},
    {coords:{lat:31.3852, lng:-83.22299}, iconImage:icon,
    content:"<h3>Hogzilla</h3> Alpaha, Georgia "}
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
