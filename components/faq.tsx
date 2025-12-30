"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What types of transportation does CORE Car provide?",
    answer:
      "We offer a comprehensive range of executive transportation services including corporate car service, airport transfers, group transport, roadshows, event transportation, and both hourly and point-to-point bookings. Our fleet includes luxury sedans, SUVs, executive vans, and motorcoaches.",
  },
  {
    question: "How do I book a ride with CORE Car?",
    answer:
      "You can book through our website, mobile app, or by calling our 24/7 concierge service. Corporate accounts also have access to our dedicated booking platform with advanced scheduling and billing features.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer flexible cancellation policies based on your service tier. Standard bookings can be cancelled up to 2 hours before pickup without charge. Corporate accounts have customized cancellation terms tailored to their needs.",
  },
  {
    question: "Do you provide service internationally?",
    answer:
      "Yes, we operate in over 50 cities across 6 continents through our carefully vetted partner network. You'll receive the same level of professional service and vehicle quality regardless of location.",
  },
  {
    question: "What makes CORE Car different from ride-sharing services?",
    answer:
      "CORE Car is designed exclusively for business professionals. Our chauffeurs undergo extensive background checks and professional training, our vehicles are meticulously maintained luxury models, and we prioritize discretion, reliability, and on-time service above all else.",
  },
  {
    question: "How do corporate accounts work?",
    answer:
      "Corporate accounts receive consolidated billing, dedicated account management, priority booking, custom reporting, and volume-based pricing. Contact our sales team for a customized quote based on your company's needs.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6"
          >
            Frequently Asked
            <span className="block text-accent mt-2">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Find answers to common questions about our services
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
