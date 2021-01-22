"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var react_leaflet_1 = require("react-leaflet");
require("leaflet/dist/leaflet.css");
var logo_64px_svg_1 = require("../assets/images/logo-64px.svg");
var leaflet_1 = require("leaflet");
var fi_1 = require("react-icons/fi");
var react_router_dom_1 = require("react-router-dom");
var api_1 = require("../services/api");
require("../assets/styles/pages/stylesPopup.css");
var Sidebar_1 = require("../components/Sidebar");
var styled_components_1 = require("styled-components");
var tokens_1 = require("../config/tokens");
var Loader_1 = require("../components/Loader");
var bicycle_parked32x_png_1 = require("../assets/images/bicycle-parked32x.png");
var bike_canceled32x_png_1 = require("../assets/images/bike-canceled32x.png");
var parking_sign32x_png_1 = require("../assets/images/parking-sign32x.png");
var Image_1 = require("../components/Image");
var mapIcon = leaflet_1["default"].icon({
    iconUrl: logo_64px_svg_1["default"],
    iconSize: [52, 62],
    iconAnchor: [29, 68],
    popupAnchor: [0, -65]
});
var PageMap = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n\n  .map {\n    margin-top: 70px;\n    @media screen and (min-width: ", "px) {\n      margin-top: 0;\n    }\n  }\n"], ["\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n\n  .map {\n    margin-top: 70px;\n    @media screen and (min-width: ", "px) {\n      margin-top: 0;\n    }\n  }\n"])), tokens_1["default"].breakpoints.desktop);
function StationsMap(_a) {
    var isLogged = _a.isLogged;
    var _b = react_1.useState([]), stations = _b[0], setStations = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var theme = styles_1.useTheme();
    react_1.useEffect(function () {
        api_1["default"]
            .get("stations", { cancelToken: api_1.source.token })
            .then(function (response) {
            setStations(response.data);
        })["catch"](function (thrown) {
            if (api_1.isCancel(thrown)) {
                console.log("Request canceled", thrown.message);
            }
            else {
                setLoading(true);
            }
        });
        api_1.source.cancel("Operation canceled by the user.");
    }, []);
    return loading ? (react_1["default"].createElement(Loader_1["default"], { data: "Carregando..." })) : (react_1["default"].createElement(PageMap, { id: "page-map" },
        isLogged ? react_1["default"].createElement(Sidebar_1.SidebarLarge, { isLogged: true }) : react_1["default"].createElement(Sidebar_1.SidebarLarge, null),
        react_1["default"].createElement(react_leaflet_1.Map, { className: "map", center: [44.0614535, -123.0353531], zoom: 15, style: { width: "100%", height: "100%" } },
            react_1["default"].createElement(react_leaflet_1.TileLayer, { url: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN }),
            stations.map(function (station) {
                return (react_1["default"].createElement(react_leaflet_1.Marker, { key: station.id, position: [station.latitude, station.longitude], icon: mapIcon }, isLogged ? (react_1["default"].createElement(react_leaflet_1.Popup, { closeButton: false, minWidth: 240, className: "map-popup-is-logged", maxHeight: 240 },
                    station.name,
                    react_1["default"].createElement("div", { className: "flex flex-row justify-between mt-3 mb-3", style: { width: "80%" } },
                        react_1["default"].createElement("div", { className: "flex-col" },
                            react_1["default"].createElement(Image_1["default"], { src: bicycle_parked32x_png_1["default"], alt: "bicicletas disponiveis" }),
                            react_1["default"].createElement("div", { className: "mt-2 text-center" }, station.bikeAvailable)),
                        react_1["default"].createElement("div", { className: "flex-col" },
                            react_1["default"].createElement(Image_1["default"], { src: parking_sign32x_png_1["default"], alt: "vagas disponiveis" }),
                            react_1["default"].createElement("div", { className: "mt-2 text-center", style: { color: theme.colors.color.success } }, station.bikeUnavailable)),
                        react_1["default"].createElement("div", { className: "flex-col" },
                            react_1["default"].createElement(Image_1["default"], { src: bike_canceled32x_png_1["default"], alt: "bicicletas quebradas" }),
                            react_1["default"].createElement("div", { className: "mt-2 text-center", style: { color: theme.colors.color.error } }, "0"))),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/station/" + station.id },
                        react_1["default"].createElement(fi_1.FiArrowRight, { size: 20, color: "#fff" })))) : (react_1["default"].createElement(react_leaflet_1.Popup, { closeButton: false, minWidth: 240, className: "map-popup", maxHeight: 240, maxWidth: 260 },
                    "Fa\u00E7a o login para continuar",
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/login" },
                        react_1["default"].createElement(fi_1.FiArrowRight, { size: 20, color: "#fff" }))))));
            }))));
}
exports["default"] = StationsMap;
var templateObject_1;
