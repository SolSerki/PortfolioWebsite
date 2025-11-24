export default function RegionOeste() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-emerald-500 pl-4">
        <h3 className="text-2xl font-bold text-emerald-300 mb-2">Tierras del Oeste</h3>
        <p className="text-zinc-400 text-sm italic">Región de costas místicas y mares tormentosos</p>
      </div>

      {/* Pueblos y Lugares */}
      <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-6 rounded-lg border border-emerald-500/30">
        <h4 className="text-xl font-bold text-emerald-300 mb-4">Pueblos y Lugares de Importancia</h4>
        <div className="space-y-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-emerald-500/20">
            <h5 className="font-semibold text-emerald-200 mb-1">Puerto de las Mareas</h5>
            <p className="text-zinc-400 text-sm">Principal ciudad portuaria y centro de comercio marítimo. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-emerald-500/20">
            <h5 className="font-semibold text-emerald-200 mb-1">Isla de las Sirenas</h5>
            <p className="text-zinc-400 text-sm">Santuario mágico protegido por encantamientos antiguos. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-emerald-500/20">
            <h5 className="font-semibold text-emerald-200 mb-1">Faro del Guardián</h5>
            <p className="text-zinc-400 text-sm">Torre antigua que guía a los marineros y protege las costas. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Flora y Fauna */}
      <div className="bg-gradient-to-br from-teal-900/20 to-emerald-900/20 p-6 rounded-lg border border-teal-500/30">
        <h4 className="text-xl font-bold text-teal-300 mb-4">Flora y Fauna</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-zinc-900/40 rounded border border-teal-500/20">
            <h5 className="font-semibold text-teal-200 mb-1">Leviatanes Marinos</h5>
            <p className="text-zinc-400 text-sm">Criaturas gigantes que habitan las profundidades del océano. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-teal-500/20">
            <h5 className="font-semibold text-teal-200 mb-1">Algas Luminiscentes</h5>
            <p className="text-zinc-400 text-sm">Vegetación marina que brilla en la oscuridad. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-teal-500/20">
            <h5 className="font-semibold text-teal-200 mb-1">Gaviotas de Tormenta</h5>
            <p className="text-zinc-400 text-sm">Aves mágicas que predicen las tempestades. Placeholder...</p>
          </div>
          <div className="p-3 bg-zinc-900/40 rounded border border-teal-500/20">
            <h5 className="font-semibold text-teal-200 mb-1">Corales Cantores</h5>
            <p className="text-zinc-400 text-sm">Formaciones coralinas que emiten sonidos místicos. Placeholder...</p>
          </div>
        </div>
      </div>

      {/* Personajes Importantes */}
      <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-6 rounded-lg border border-emerald-500/30">
        <h4 className="text-xl font-bold text-emerald-300 mb-4">Personajes Importantes</h4>
        <div className="space-y-3">
          <div className="p-4 bg-zinc-900/40 rounded border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <h5 className="font-semibold text-emerald-200 mb-1">Marina la Domadora de Olas</h5>
            <p className="text-sm text-emerald-300 mb-2">Bruja del Mar</p>
            <p className="text-zinc-400 text-sm">Guardiana de los secretos del océano y sus criaturas. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <h5 className="font-semibold text-emerald-200 mb-1">Capitán Thorne</h5>
            <p className="text-sm text-emerald-300 mb-2">Almirante de la Flota Real</p>
            <p className="text-zinc-400 text-sm">Caballero navegante que protege las rutas marítimas. Placeholder...</p>
          </div>
          <div className="p-4 bg-zinc-900/40 rounded border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <h5 className="font-semibold text-emerald-200 mb-1">Coral la Sirena</h5>
            <p className="text-sm text-emerald-300 mb-2">Emisaria del Reino Submarino</p>
            <p className="text-zinc-400 text-sm">Mediadora entre el mundo de superficie y las profundidades. Placeholder...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
