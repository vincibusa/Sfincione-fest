import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const stands = [
  {
    id: 1,
    name: "Lo Sfincione di Bagheria",
    description:
      "Il tradizionale sfincione bagherese con tuma, cipolla e acciughe",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
    location: [38.0875, 13.5125],
  },
  {
    id: 2,
    name: "Antica Focacceria",
    description: "Focacce e specialità siciliane dal 1950",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80",
    location: [38.0873, 13.5127],
  },
  {
    id: 3,
    name: "Sapori di Mare",
    description: "Specialità marinare della costa bagherese",
    image:
      "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&q=80",
    location: [38.0877, 13.5123],
  },
  {
    id: 4,
    name: "Dolci Tradizioni",
    description: "Cassate, cannoli e dolci tipici siciliani",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80",
    location: [38.0871, 13.5129],
  },
];

export default function DoveMangiare() {
  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: true });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center font-dancing text-5xl md:text-6xl text-[#B22222] mb-12"
      >
        Scopri i sapori della Sicilia
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stands.map((stand) => (
          <motion.div
            key={stand.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            viewport={{ once: true }}
            className="bg-[#F5F5DC] rounded-lg overflow-hidden border-2 border-[#6B8E23]"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={stand.image}
                alt={stand.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-montserrat font-bold text-xl text-[#003366] mb-2">
                {stand.name}
              </h3>
              <p className="font-montserrat text-gray-700">
                {stand.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={mapRef}
        initial={{ scale: 0.95 }}
        animate={{ scale: isMapInView ? 1 : 0.95 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto h-[400px] rounded-lg overflow-hidden shadow-lg"
      >
        <MapContainer
          center={[38.0875, 13.5125]}
          zoom={17}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {stands.map((stand) => (
            <Marker
              key={stand.id}
              position={stand.location as [number, number]}
              icon={
                new L.Icon({
                  iconUrl:
                    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
                  shadowUrl:
                    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })
              }
            >
              <Popup>
                <div className="font-montserrat">
                  <h3 className="font-bold text-[#003366]">{stand.name}</h3>
                  <p className="text-sm">{stand.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </section>
  );
}
