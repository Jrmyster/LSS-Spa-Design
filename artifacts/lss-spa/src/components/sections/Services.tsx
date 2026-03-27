import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Sparkles, PlusCircle } from "lucide-react";

const SERVICES = [
  {
    id: "cryoskin",
    title: "Cryoskin Therapy",
    icon: Snowflake,
    description: "Non-invasive body contouring technology that helps with fat loss, body toning, and cellulite reduction. Safe, painless, and effective.",
    features: ["Fat Loss Sessions", "Body Toning", "Cellulite Reduction"],
    image: "service-cryo.png",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    id: "facial",
    title: "Facial Treatments",
    icon: Sparkles,
    description: "Customized corrective facials designed to lift, brighten, and address your specific skin concerns using premium medical-grade products.",
    features: ["Corrective Facials", "Lifting Treatments", "Brightening"],
    image: "service-facial.png",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: "addons",
    title: "Treatment Add-ons",
    icon: PlusCircle,
    description: "Enhance any core service with our specialized add-ons to accelerate results and maximize your spa experience.",
    features: ["LED Light Therapy", "Micro-current", "Chemical Peels"],
    image: "service-addons.png",
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            From revolutionary Cryoskin treatments to relaxing, corrective facials, 
            we offer comprehensive solutions for your unique wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${service.image}`} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative pb-2">
                  <div className={`absolute -top-6 right-6 w-12 h-12 rounded-full ${service.bgColor} flex items-center justify-center shadow-lg border border-white`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.bgColor.split('/')[0]} mr-2`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
