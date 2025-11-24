export default function RegionSur() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-amber-500 pl-4">
        <h3 className="text-2xl font-bold text-amber-300 mb-2">Tierras del Sur</h3>
        <p className="text-zinc-400 text-sm italic">Región de desiertos ardientes y antiguas ruinas</p>
      </div>

      {/* Pueblos y Lugares */}
      <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-6 rounded-lg border border-amber-500/30">
        <h4 className="text-xl font-bold text-amber-300 mb-4">Pueblos y Lugares de Importancia</h4>
        <div className="space-y-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-amber-500/20">
            <h5 className="font-semibold text-amber-200 mb-1">Ciudad del Sol Eterno</h5>
            <p className="text-zinc-400 text-sm">Capital del sur, construida sobre ruinas de civilizaciones antiguas. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-amber-500/20">
            <h5 className="font-semibold text-amber-200 mb-1">Oasis de las Sombras</h5>
            <p className="text-zinc-400 text-sm">Santuario oculto donde las brujas del desierto se reúnen. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-amber-500/20">
            <h5 className="font-semibold text-amber-200 mb-1">Templo de las Arenas</h5>
            <p className="text-zinc-400 text-sm">Antigua estructura que guarda secretos olvidados. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Flora y Fauna */}
      <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 p-6 rounded-lg border border-orange-500/30">
        <h4 className="text-xl font-bold text-orange-300 mb-4">Flora y Fauna</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-orange-500/20">
            <h5 className="font-semibold text-orange-200 mb-1">Escorpiones de Fuego</h5>
            <p className="text-zinc-400 text-sm">Criaturas venenosas que brillan bajo el sol del desierto. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-orange-500/20">
            <h5 className="font-semibold text-orange-200 mb-1">Cactus Sanador</h5>
            <p className="text-zinc-400 text-sm">Planta medicinal adaptada al clima extremo. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-orange-500/20">
            <h5 className="font-semibold text-orange-200 mb-1">Serpientes de Arena</h5>
            <p className="text-zinc-400 text-sm">Depredadores que se ocultan bajo las dunas. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-orange-500/20">
            <h5 className="font-semibold text-orange-200 mb-1">Palmeras Místicas</h5>
            <p className="text-zinc-400 text-sm">Árboles que solo crecen cerca de fuentes mágicas. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Personajes Importantes */}
      <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-6 rounded-lg border border-amber-500/30">
        <h4 className="text-xl font-bold text-amber-300 mb-4">Personajes Importantes</h4>
        <div className="space-y-3">
          <div className="p-4 bg-zinc-900/40 rounded border border-amber-500/20 hover:border-amber-500/40 transition-all">
            <h5 className="font-semibold text-amber-200 mb-1">Zara la Guardiana del Sol</h5>
            <p className="text-sm text-amber-300 mb-2">Suma Sacerdotisa del Desierto</p>
            <p className="text-zinc-400 text-sm">Bruja poderosa que controla las arenas del tiempo. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-amber-500/20 hover:border-amber-500/40 transition-all">
            <h5 className="font-semibold text-amber-200 mb-1">Comandante Khalid</h5>
            <p className="text-sm text-amber-300 mb-2">Líder de los Caballeros del Sol</p>
            <p className="text-zinc-400 text-sm">Guerrero incansable que protege las rutas del desierto. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-amber-500/20 hover:border-amber-500/40 transition-all">
            <h5 className="font-semibold text-amber-200 mb-1">Nadia la Exploradora</h5>
            <p className="text-sm text-amber-300 mb-2">Arqueóloga y Bruja</p>
            <p className="text-zinc-400 text-sm">Busca los secretos perdidos en las ruinas antiguas. Placeholder...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
