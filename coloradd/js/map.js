$(document).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamVrbm93bGVkZ2UiLCJhIjoiY2p3dXhkcTU3MDNpaTRhbW03cWlwbDUxbCJ9.oaCE14mVazBw12tkUXl8Jw';
  var map = new mapboxgl.Map({
    container: 'map_img',
    style: {
      "version": 8,
      "name": "Blank",
      "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:type": "template",
        "mapbox:sdk-support": {
          "js": "0.54.0",
          "android": "6.7.0",
          "ios": "4.7.0"
        }
      },
      zoom: 1.8,
      center: [-30, 25],
      "bearing": 0,
      "pitch": 0,
      "sources": {
        "composite": {
          "url": "mapbox://mapbox.mapbox-streets-v7",
          "type": "vector"
        }
      },
      "sprite": "mapbox://sprites/jeknowledge/cjx0muj1x03k31dmoitwi7tbh/draft",
      "glyphs": "mapbox://fonts/jeknowledge/{fontstack}/{range}.pbf",
      "layers": [{
          "id": "background",
          "type": "background",
          "paint": {
            "background-color": "hsl(0, 0%, 85%)"
          }
        },
        {
          "id": "water",
          "type": "fill",
          "source": "composite",
          "source-layer": "water",
          "layout": {},
          "paint": {
            "fill-color": "hsl(176, 0%, 100%)"
          }
        }
      ],
      "created": "2019-06-17T17:08:38.177Z",
      "id": "cjx0muj1x03k31dmoitwi7tbh",
      "modified": "2019-06-17T17:12:44.073Z",
      "owner": "jeknowledge",
      "visibility": "private",
      "draft": true
    }
  });


  var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-8, 40] // Ponto 1
        },
        properties: {
          title: 'Portugal',
          description: 'Some partners examples in Portugal are zippy (clothing brand), Metro do Porto (subway) and many Portuguese municipalities.'
        },
        overlay: {
          type: 'image',
          url: 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-100, 38] // Ponto 2
        },
        properties: {
          title: 'USA',
          description: 'Mattel company decided to adopt the ColorADD code making UNO the first card game adapted for color blind people.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-50, -10] // Ponto 3
        },
        properties: {
          title: 'Brasil',
          description: 'ColorADD code is present in all textbooks of Mackenzie teaching system.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-70, -30] // Ponto 4
        },
        properties: {
          title: 'Chile',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }

      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [38, -15] // Ponto 5
        },

        properties: {
          title: 'Mozambique',
          description: 'In Mozambique, ColorAD performed tests for the identification of color blind children an showed a way of identifying colors that includes everyone.'
        }
      },
      {

        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [78, 20] // Ponto 6
        },
        properties: {
          title: 'índia',
          description: 'ColorADD has been in the most colorful country in the world to help teachers and students to see and feel colors'
        }

      },
      {

        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [8, 50] // Ponto 6
        },
        properties: {
          title: 'Germany',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }



      }
    ]
  }

  geojson.features.forEach(function(marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({
          offset: 25
        }) // add popups
        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
      .addTo(map);
  })
  map.scrollZoom.disable();
})
