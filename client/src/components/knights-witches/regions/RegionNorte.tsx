export default function RegionNorte() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-2xl font-bold text-blue-300 mb-2">Tierras del Norte</h3>
        <p className="text-zinc-400 text-sm italic">Región de hielo eterno y magia ancestral</p>
      </div>

      {/* Pueblos y Lugares */}
      <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 rounded-lg border border-blue-500/30">
        <h4 className="text-xl font-bold text-blue-300 mb-4">Pueblos y Lugares de Importancia</h4>
        <div className="space-y-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-blue-500/20">
            <h5 className="font-semibold text-blue-200 mb-1">Fortaleza de Hielo</h5>
            <p className="text-zinc-400 text-sm">Capital del norte, construida en el corazón de un glaciar milenario. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-blue-500/20">
            <h5 className="font-semibold text-blue-200 mb-1">Pueblo de la Aurora</h5>
            <p className="text-zinc-400 text-sm">Asentamiento místico donde las brujas del norte practican sus artes. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-blue-500/20">
            <h5 className="font-semibold text-blue-200 mb-1">Torres de Observación</h5>
            <p className="text-zinc-400 text-sm">Red de torres que vigilan las fronteras heladas. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Flora y Fauna */}
      <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-lg border border-cyan-500/30">
        <h4 className="text-xl font-bold text-cyan-300 mb-4">Flora y Fauna</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-cyan-500/20">
            <h5 className="font-semibold text-cyan-200 mb-1">Lobos de Hielo</h5>
            <p className="text-zinc-400 text-sm">Criaturas majestuosas que habitan las tundras heladas. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-cyan-500/20">
            <h5 className="font-semibold text-cyan-200 mb-1">Pinos Eternos</h5>
            <p className="text-zinc-400 text-sm">Árboles mágicos que nunca pierden su verdor. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-cyan-500/20">
            <h5 className="font-semibold text-cyan-200 mb-1">Águilas de las Nieves</h5>
            <p className="text-zinc-400 text-sm">Aves gigantes usadas como monturas por los caballeros. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-cyan-500/20">
            <h5 className="font-semibold text-cyan-200 mb-1">Flores de Cristal</h5>
            <p className="text-zinc-400 text-sm">Flora mágica que crece en el hielo. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Personajes Importantes */}
      <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 rounded-lg border border-blue-500/30">
        <h4 className="text-xl font-bold text-blue-300 mb-4">Personajes Importantes</h4>
        <div className="space-y-3">
          <div className="p-4 bg-zinc-900/40 rounded border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <h5 className="font-semibold text-blue-200 mb-1">Lady Freya del Hielo</h5>
            <p className="text-sm text-blue-300 mb-2">Gran Bruja del Norte</p>
            <p className="text-zinc-400 text-sm">Guardiana de los secretos ancestrales del hielo. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <h5 className="font-semibold text-blue-200 mb-1">Sir Bjorn el Intrépido</h5>
            <p className="text-sm text-blue-300 mb-2">Comandante de la Guardia Glacial</p>
            <p className="text-zinc-400 text-sm">Caballero legendario que defiende las fronteras del norte. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <h5 className="font-semibold text-blue-200 mb-1">Elara la Vidente</h5>
            <p className="text-sm text-blue-300 mb-2">Oráculo de las Auroras</p>
            <p className="text-zinc-400 text-sm">Joven bruja con el don de la profecía. Placeholder...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
