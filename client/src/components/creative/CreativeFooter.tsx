import { useLanguage } from '../../contexts/LanguageContext'

export default function CreativeFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-purple-500/20 mt-8 sm:mt-12 md:mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-6 text-xs sm:text-sm text-zinc-400">
        <div className="text-center mb-2 sm:mb-3">
          {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
        </div>
        <div className="text-center text-xs text-zinc-500 mb-1.5 sm:mb-2 px-2">
          {t('footer.creativeRights')}
        </div>
        <div className="text-center text-xs text-zinc-600">
          {t('footer.builtWith')}
        </div>
      </div>
    </footer>
  )
}
