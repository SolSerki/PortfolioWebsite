import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Stepper, { Step } from '../components/Stepper'
import { HiEnvelope } from 'react-icons/hi2'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t } = useLanguage()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    platform: '',
    hasDesign: '',
    features: '',
    maintenance: '',
    integrations: '',
    additionalInfo: ''
  })

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSimpleContact = () => {
    window.location.href = 'mailto:solserki237@gmail.com?subject=Consulta General'
  }

  const handleComplete = async () => {
    setSending(true)
    
    try {
      // Aquí usaremos EmailJS
      const emailData = {
        to_email: 'solserki237@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        service_type: formData.serviceType,
        platform: formData.platform,
        has_design: formData.hasDesign,
        features: formData.features,
        maintenance: formData.maintenance,
        integrations: formData.integrations,
        additional_info: formData.additionalInfo
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        'service_3aalicu', // Service ID
        'template_yjpia3k', // Template ID
        emailData,
        'xH49oiQKBMdnSuBb_' // Public Key
      )
      
      console.log('Email enviado exitosamente')
      setSent(true)
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setSent(false)
        setFormData({
          name: '',
          email: '',
          serviceType: '',
          platform: '',
          hasDesign: '',
          features: '',
          maintenance: '',
          integrations: '',
          additionalInfo: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Error al enviar:', error)
      alert('Error al enviar. Por favor intenta nuevamente.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="transition-language mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>

          <div className="flex justify-center">
            <button
              onClick={handleSimpleContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition shadow-lg"
            >
              <HiEnvelope className="text-xl" />
              {t('contact.quickContact')}
            </button>
          </div>
          
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-6 mb-8">
            {t('contact.orFillForm')}
          </p>
        </div>

        {!sent && (
          <Stepper
            initialStep={1}
            onFinalStepCompleted={handleComplete}
            backButtonText={t('contact.stepper.back')}
            nextButtonText={t('contact.stepper.next')}
            stepCircleContainerClassName="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
            contentClassName="text-zinc-900 dark:text-zinc-100"
            footerClassName=""
          >
            {/* Step 1: Información Básica */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step1.title')}</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.step1.nameLabel')}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder={t('contact.step1.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.step1.emailLabel')}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder={t('contact.step1.emailPlaceholder')}
                  />
                </div>
              </div>
            </Step>

            {/* Step 2: Tipo de Servicio */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step2.title')}</h2>
                <select
                  value={formData.serviceType}
                  onChange={(e) => updateFormData('serviceType', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                >
                  <option value="">{t('contact.step2.selectOption')}</option>
                  <option value="website">{t('contact.step2.website')}</option>
                  <option value="web-app">{t('contact.step2.webApp')}</option>
                  <option value="mobile-app">{t('contact.step2.mobileApp')}</option>
                  <option value="api-backend">{t('contact.step2.apiBackend')}</option>
                  <option value="ecommerce">{t('contact.step2.ecommerce')}</option>
                  <option value="other">{t('contact.step2.other')}</option>
                </select>
              </div>
            </Step>

            {/* Step 3: Plataforma */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step3.title')}</h2>
                <div className="space-y-2">
                  {[
                    { key: 'webDesktop', label: t('contact.step3.webDesktop') },
                    { key: 'webMobile', label: t('contact.step3.webMobile') },
                    { key: 'ios', label: t('contact.step3.ios') },
                    { key: 'android', label: t('contact.step3.android') },
                    { key: 'multiplatform', label: t('contact.step3.multiplatform') }
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.platform.includes(label)}
                        onChange={(e) => {
                          const current = formData.platform.split(',').filter(Boolean)
                          if (e.target.checked) {
                            updateFormData('platform', [...current, label].join(','))
                          } else {
                            updateFormData('platform', current.filter(p => p !== label).join(','))
                          }
                        }}
                        className="w-4 h-4 text-accent"
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Step>

            {/* Step 4: Diseño */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step4.title')}</h2>
                <select
                  value={formData.hasDesign}
                  onChange={(e) => updateFormData('hasDesign', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                >
                  <option value="">{t('contact.step4.selectOption')}</option>
                  <option value="yes-complete">{t('contact.step4.yesComplete')}</option>
                  <option value="yes-partial">{t('contact.step4.yesPartial')}</option>
                  <option value="no-need-design">{t('contact.step4.noNeedDesign')}</option>
                  <option value="no-use-template">{t('contact.step4.noUseTemplate')}</option>
                </select>
              </div>
            </Step>

            {/* Step 5: Funcionalidades */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step5.title')}</h2>
                <textarea
                  value={formData.features}
                  onChange={(e) => updateFormData('features', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-y"
                  placeholder={t('contact.step5.placeholder')}
                />
              </div>
            </Step>

            {/* Step 6: Mantenimiento */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step7.title')}</h2>
                <select
                  value={formData.maintenance}
                  onChange={(e) => updateFormData('maintenance', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                >
                  <option value="">{t('contact.step7.selectOption')}</option>
                  <option value="no">{t('contact.step7.no')}</option>
                  <option value="occasional">{t('contact.step7.occasional')}</option>
                  <option value="monthly">{t('contact.step7.monthly')}</option>
                  <option value="full">{t('contact.step7.full')}</option>
                </select>
              </div>
            </Step>

            {/* Step 7: Integraciones */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step8.title')}</h2>
                <textarea
                  value={formData.integrations}
                  onChange={(e) => updateFormData('integrations', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-y"
                  placeholder={t('contact.step8.placeholder')}
                />
              </div>
            </Step>

            {/* Step 8: Info Adicional */}
            <Step>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t('contact.step9.title')}</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t('contact.step9.subtitle')}
                </p>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-y"
                  placeholder={t('contact.step9.placeholder')}
                />
              </div>
            </Step>
          </Stepper>
        )}

        {sent && (
          <div className="text-center py-12">
            <div className="inline-block p-6 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
              <HiEnvelope className="text-5xl text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{t('contact.sent.title')}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('contact.sent.message')}
            </p>
          </div>
        )}

        {sending && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-zinc-600 dark:text-zinc-400">{t('contact.sending')}</p>
          </div>
        )}
      </div>
    </div>
  )
}
