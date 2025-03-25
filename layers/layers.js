ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([674384.746611, 5924819.041265, 675550.876102, 5925607.997976]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Casa_1 = new ol.format.GeoJSON();
var features_Casa_1 = format_Casa_1.readFeatures(json_Casa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Casa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa_1.addFeatures(features_Casa_1);
var lyr_Casa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casa_1, 
                style: style_Casa_1,
                popuplayertitle: 'Casa',
                interactive: true,
                title: '<img src="styles/legend/Casa_1.png" /> Casa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Casa_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Casa_1];
lyr_Casa_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'N°_Buenas': 'N°_Buenas', 'N°_malas': 'N°_malas', 'video': 'video', });
lyr_Casa_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunt': 'TextEdit', 'N°_Buenas': 'TextEdit', 'N°_malas': 'TextEdit', 'video': 'TextEdit', });
lyr_Casa_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_pregunt': 'inline label - always visible', 'N°_Buenas': 'inline label - always visible', 'N°_malas': 'inline label - always visible', 'video': 'inline label - always visible', });
lyr_Casa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});