import { motion } from "framer-motion";

const previousEditions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    year: "2023",
    title: "Campionato delle Pizze",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542282811-943ef1a977c3",
    year: "2023",
    title: "Sicily Young Bakery",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    year: "2022",
    title: "Campionato delle Pizze",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f",
    year: "2022",
    title: "Sicily Young Bakery",
  },
];

export default function Competizioni() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center font-dancing text-5xl md:text-6xl text-[#B22222] mb-12"
      >
        Le Nostre Competizioni
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Campionato Pizze dell'Identità */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 rounded-lg p-8"
        >
          <h3 className="font-dancing text-3xl text-[#B22222] mb-4">
            Campionato "Pizze dell'Identità"
          </h3>
          <p className="font-montserrat text-gray-300 mb-6">
            Una competizione unica che celebra l'arte della pizza tradizionale
            siciliana. I partecipanti si sfideranno nella creazione di pizze che
            rappresentano l'identità e la cultura del territorio.
          </p>
          <ul className="font-montserrat text-gray-300 mb-6 list-disc list-inside">
            <li>Utilizzo esclusivo di ingredienti locali</li>
            <li>Tre categorie: Tradizionale, Innovativa, Studenti</li>
            <li>Giuria composta da maestri pizzaioli e critici gastronomici</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD700] text-[#003366] px-8 py-3 rounded-full font-bold
              hover:bg-yellow-400 transition-colors"
          >
            Vota il tuo Preferito
          </motion.button>
        </motion.div>

        {/* Sicily Young Bakery Competition */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 rounded-lg p-8"
        >
          <h3 className="font-dancing text-3xl text-[#B22222] mb-4">
            Sicily Young Bakery Competition
          </h3>
          <p className="font-montserrat text-gray-300 mb-6">
            Una piattaforma per i giovani talenti della panificazione siciliana.
            Un'opportunità per mostrare creatività e abilità nella preparazione
            di prodotti da forno tradizionali e innovativi.
          </p>
          <ul className="font-montserrat text-gray-300 mb-6 list-disc list-inside">
            <li>Aperto a partecipanti sotto i 35 anni</li>
            <li>Workshop con maestri panificatori</li>
            <li>Premi e opportunità di stage professionali</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD700] text-[#003366] px-8 py-3 rounded-full font-bold
              hover:bg-yellow-400 transition-colors"
          >
            Iscriviti Ora
          </motion.button>
        </motion.div>

        {/* Galleria Edizioni Precedenti */}
        <div className="mt-16">
          <h3 className="font-dancing text-3xl text-[#B22222] mb-8 text-center">
            Edizioni Precedenti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previousEditions.map((edition) => (
              <motion.div
                key={edition.id}
                className="relative overflow-hidden rounded-lg aspect-square"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={edition.image}
                  alt={`${edition.title} ${edition.year}`}
                  className="w-full h-full object-cover transition-all duration-300
                    hover:brightness-75"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="font-montserrat text-white text-sm">
                    {edition.title} {edition.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
