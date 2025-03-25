// Navigation Links
export const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "contact", title: "Contact" },
];

// Energy Types
export const energyTypes = {
    SOLAR: "solar",
    WIND: "wind",
    HYDRO: "hydro",
    BIOMASS: "biomass",
    GEOTHERMAL: "geothermal",
};

// API Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

// Common Status
export const STATUS = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
};

// Units
export const ENERGY_UNITS = {
    KWH: "kWh",
    MWH: "MWh",
    GWH: "GWh",
};

// Default Values
export const DEFAULT_PAGINATION = {
    page: 1,
    limit: 10,
};