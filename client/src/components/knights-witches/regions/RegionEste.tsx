export default function RegionEste() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-purple-500 pl-4">
        <h3 className="text-2xl font-bold text-purple-300 mb-2">Tierras del Este</h3>
        <p className="text-zinc-400 text-sm italic">Región de montañas místicas y bosques encantados</p>
      </div>

      {/* Pueblos y Lugares */}
      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg border border-purple-500/30">
        <h4 className="text-xl font-bold text-purple-300 mb-4">Pueblos y Lugares de Importancia</h4>
        <div className="space-y-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-purple-500/20">
            <h5 className="font-semibold text-purple-200 mb-1">Ciudadela de las Nubes</h5>
            <p className="text-zinc-400 text-sm">Fortaleza construida en los picos más altos de las montañas. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-purple-500/20">
            <h5 className="font-semibold text-purple-200 mb-1">Bosque de los Susurros</h5>
            <p className="text-zinc-400 text-sm">Lugar sagrado donde los árboles hablan con las brujas. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-purple-500/20">
            <h5 className="font-semibold text-purple-200 mb-1">Monasterio de la Luna</h5>
            <p className="text-zinc-400 text-sm">Centro de entrenamiento para caballeros y brujas. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Flora y Fauna */}
      <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-6 rounded-lg border border-pink-500/30">
        <h4 className="text-xl font-bold text-pink-300 mb-4">Flora y Fauna</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-pink-500/20">
            <h5 className="font-semibold text-pink-200 mb-1">Ciervos Luminosos</h5>
            <p className="text-zinc-400 text-sm">Criaturas mágicas que brillan bajo la luz de la luna. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-pink-500/20">
            <h5 className="font-semibold text-pink-200 mb-1">Árboles Cantores</h5>
            <p className="text-zinc-400 text-sm">Flora mágica cuyas hojas producen melodías al viento. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-pink-500/20">
            <h5 className="font-semibold text-pink-200 mb-1">Dragones de Montaña</h5>
            <p className="text-zinc-400 text-sm">Criaturas antiguas que anidan en las cumbres. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-pink-500/20">
            <h5 className="font-semibold text-pink-200 mb-1">Flores de Luna</h5>
            <p className="text-zinc-400 text-sm">Plantas que solo florecen durante la luna llena. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Personajes Importantes */}
      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg border border-purple-500/30">
        <h4 className="text-xl font-bold text-purple-300 mb-4">Personajes Importantes</h4>
        <div className="space-y-3">
          <div className="p-4 bg-zinc-900/40 rounded border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <h5 className="font-semibold text-purple-200 mb-1">Morgana de las Alturas</h5>
            <p className="text-sm text-purple-300 mb-2">Maestra del Coven Oriental</p>
            <p className="text-zinc-400 text-sm">Bruja poderosa que domina la magia de las montañas. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <h5 className="font-semibold text-purple-200 mb-1">Sir Aldric el Sabio</h5>
            <p className="text-sm text-purple-300 mb-2">Gran Maestro de la Orden</p>
            <p className="text-zinc-400 text-sm">Caballero veterano que enseña las artes marciales. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <h5 className="font-semibold text-purple-200 mb-1">Luna la Guardabosques</h5>
            <p className="text-sm text-purple-300 mb-2">Protectora del Bosque Encantado</p>
            <p className="text-zinc-400 text-sm">Joven bruja con conexión especial con la naturaleza. Placeholder...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
