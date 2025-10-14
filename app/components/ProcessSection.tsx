'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Calendar, Settings, Truck } from 'lucide-react'

const ProcessSection = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: 'Projelendirme',
      description: 'Satış temsilcilerimiz işinizi projelendirir ve size iletilen tasarım ve maliyete onay vermeniz beklenir.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Planlama',
      description: 'Onayınız alındığında işiniz planlama aşamasına geçer ve adım adım takip edilir.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      title: 'Üretim',
      description: 'İmalat, tasarım aşamasından organize edilerek montaja kadar deneyimli kadromuzla kısa ve hızlı şekilde gerçekleştirilir.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Truck,
      title: 'Teslimat',
      description: 'Üretim tamamlandıktan sonra profesyonel montaj ekibimiz ile teslimat gerçekleştirilir.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Çalışma Sürecimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesyonel ekibimizle birlikte projelerinizi en verimli şekilde hayata geçiriyoruz.
            Her adımda kalite ve müşteri memnuniyeti önceliğimizdir.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-turquoise-200 via-turquoise-300 to-turquoise-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-turquoise-600">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-turquoise-400 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Neden Ahlat Tasarım?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-turquoise-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">32 Yıllık Tecrübe</h4>
                  <p className="text-gray-600 text-sm">Binlerce başarılı proje</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-turquoise-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Hızlı Teslimat</h4>
                  <p className="text-gray-600 text-sm">Zamanında teslimat garantisi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-turquoise-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Kalite Garantisi</h4>
                  <p className="text-gray-600 text-sm">1. kalite malzeme ve işçilik</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
