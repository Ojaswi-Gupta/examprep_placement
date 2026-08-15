export const CONVERSIONS_DATA = [
  {
    category: "Speed & Velocity",
    icon: "🚀",
    units: ["km/h", "m/s", "mph"],
    // Base unit for calculation: m/s
    rates: {
      "m/s": 1,
      "km/h": 3.6,        // 1 m/s = 3.6 km/h
      "mph": 2.23694      // 1 m/s = 2.23694 mph
    },
    memorize: [
      "1 km/h = 5/18 m/s",
      "1 m/s = 18/5 km/h",
      "1 mph ≈ 1.609 km/h",
      "Speed = Distance / Time"
    ]
  },
  {
    category: "Length & Distance",
    icon: "📏",
    units: ["Meter (m)", "Kilometer (km)", "Centimeter (cm)", "Millimeter (mm)", "Mile (mi)", "Yard (yd)", "Foot (ft)", "Inch (in)"],
    // Base unit for calculation: Meter
    rates: {
      "Meter (m)": 1,
      "Kilometer (km)": 0.001,
      "Centimeter (cm)": 100,
      "Millimeter (mm)": 1000,
      "Mile (mi)": 0.000621371,
      "Yard (yd)": 1.09361,
      "Foot (ft)": 3.28084,
      "Inch (in)": 39.3701
    },
    memorize: [
      "1 km = 1000 m",
      "1 m = 100 cm",
      "1 cm = 10 mm",
      "1 mile ≈ 1.609 km",
      "1 yard = 3 feet",
      "1 foot = 12 inches",
      "1 inch = 2.54 cm"
    ]
  },
  {
    category: "Mass & Weight",
    icon: "⚖️",
    units: ["Kilogram (kg)", "Gram (g)", "Milligram (mg)", "Pound (lb)", "Ounce (oz)", "Metric Ton (t)"],
    // Base unit for calculation: Kilogram
    rates: {
      "Kilogram (kg)": 1,
      "Gram (g)": 1000,
      "Milligram (mg)": 1000000,
      "Pound (lb)": 2.20462,
      "Ounce (oz)": 35.274,
      "Metric Ton (t)": 0.001
    },
    memorize: [
      "1 kg = 1000 g",
      "1 g = 1000 mg",
      "1 Metric Ton = 1000 kg",
      "1 pound (lb) ≈ 0.4536 kg (453.6 g)",
      "1 kg ≈ 2.205 lbs",
      "1 pound (lb) = 16 ounces (oz)"
    ]
  },
  {
    category: "Time",
    icon: "⏱️",
    units: ["Second (s)", "Minute (min)", "Hour (hr)", "Day (d)", "Week (wk)", "Year (yr)"],
    // Base unit for calculation: Second
    rates: {
      "Second (s)": 1,
      "Minute (min)": 1 / 60,
      "Hour (hr)": 1 / 3600,
      "Day (d)": 1 / 86400,
      "Week (wk)": 1 / 604800,
      "Year (yr)": 1 / 31536000 // Approximate (365 days)
    },
    memorize: [
      "1 minute = 60 seconds",
      "1 hour = 60 minutes = 3600 seconds",
      "1 day = 24 hours = 1440 minutes = 86400 seconds",
      "1 week = 7 days",
      "1 normal year = 365 days (52 weeks + 1 day)",
      "1 leap year = 366 days (52 weeks + 2 days)"
    ]
  },
  {
    category: "Volume & Capacity",
    icon: "🧪",
    units: ["Liter (L)", "Milliliter (mL)", "Cubic Meter (m³)", "Gallon (US gal)", "Fluid Ounce (US fl oz)"],
    // Base unit for calculation: Liter
    rates: {
      "Liter (L)": 1,
      "Milliliter (mL)": 1000,
      "Cubic Meter (m³)": 0.001,
      "Gallon (US gal)": 0.264172,
      "Fluid Ounce (US fl oz)": 33.814
    },
    memorize: [
      "1 Liter = 1000 mL",
      "1 Cubic Meter (m³) = 1000 Liters",
      "1 mL = 1 Cubic Centimeter (cc or cm³)",
      "1 Gallon (US) ≈ 3.785 Liters",
      "1 Liter ≈ 33.814 US fluid ounces"
    ]
  },
  {
    category: "Area",
    icon: "🗺️",
    units: ["Square Meter (m²)", "Square Kilometer (km²)", "Hectare (ha)", "Acre (ac)", "Square Foot (sq ft)"],
    // Base unit for calculation: Square Meter
    rates: {
      "Square Meter (m²)": 1,
      "Square Kilometer (km²)": 0.000001,
      "Hectare (ha)": 0.0001,
      "Acre (ac)": 0.000247105,
      "Square Foot (sq ft)": 10.7639
    },
    memorize: [
      "1 Hectare = 10,000 Square Meters (m²)",
      "1 Square Kilometer (km²) = 100 Hectares",
      "1 Acre ≈ 4046.86 Square Meters (m²)",
      "1 Square Meter ≈ 10.764 Square Feet",
      "1 Square Yard = 9 Square Feet"
    ]
  }
];
