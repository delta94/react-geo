webpackJsonp([5],{30:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(31),a=function(e){var t,o=e||{};t=void 0!==o.attributions?o.attributions:[a.ATTRIBUTION];var i=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",n=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:i,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:n,wrapX:o.wrapX})};i.a.inherits(a,r.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=a},31:function(e,t,o){"use strict";var i=o(0),r=o(43),a=o(37),n=function(e){var t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};i.a.inherits(n,r.a),t.a=n},926:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=o(1),a=i(r),n=o(9),l=o(20),c=o(28),u=i(c),s=o(42),d=i(s),p=o(35),m=i(p),h=o(30),f=i(h),v=o(21),g=i(v),w=new u.default({layers:[new m.default({name:"OSM",source:new f.default})],view:new d.default({center:g.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,n.render)(a.default.createElement("div",null,a.default.createElement("div",{id:"map",style:{width:"400px",height:"400px",right:"0px",position:"absolute"}}),a.default.createElement("div",{className:"example-block"},a.default.createElement("span",null,"Just a NominatimSearch:"),a.default.createElement(l.NominatimSearch,{map:w}))),document.getElementById("exampleContainer"),function(){w.setTarget("map")})}},[926]);