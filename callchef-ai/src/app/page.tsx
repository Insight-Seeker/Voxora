import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Bot, DollarSign, BarChart3, Calendar, Users, MessageSquare, Zap, Globe, CheckCircle, Star, Settings, Mic, Clock, Shield, Smartphone, HeadphonesIcon, Building2, Stethoscope, Hammer, Home as HomeIcon, TrendingUp, Play, Calculator, Utensils } from "lucide-react";
import { getHomeContent, getPricingContent } from "@/lib/content";
import Link from "next/link";

export default function Home() {
  const homeContent = getHomeContent();
  const pricingContent = getPricingContent();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 bg-white">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#2C3E50] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">VOXORA</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#fonctionnalites" className="text-gray-600 hover:text-gray-900 transition-colors">Fonctionnalités</a>
            <a href="#tarifs" className="text-gray-600 hover:text-gray-900 transition-colors">Tarifs</a>
            <Link href="/demo" className="text-gray-600 hover:text-gray-900 transition-colors">Démo</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
              <Settings className="w-4 h-4 mr-1" />
              Admin
            </Link>
            <Button variant="outline" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button className="gradient-cta text-white" asChild>
              <Link href="/login">Essai gratuit 14j</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section avec gradient */}
      <section className="gradient-hero text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm animate-bounce-gentle">
            🚀 La voix qui travaille pour vous
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            {homeContent.hero_title || "Ne ratez plus jamais un appel."}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            {homeContent.hero_subtitle || "VOXORA répond, qualifie et valorise votre business 24/7 — restaurants, artisans, médecins, agents, influenceurs et grandes entreprises."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Voir une démo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
              Essai gratuit 14j
            </Button>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {([
              { value: "0", description: "Appel manqué avec VOXORA" },
              { value: "24/7", description: "Disponibilité complète" },
              { value: "+25%", description: "Augmentation moyenne des revenus" }
            ]).map((stat, index) => (
              <div key={`stat-${index}`} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl font-bold text-white mb-2 animate-pulse-soft">{stat.value}</div>
                <p className="text-white/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problème & promesse */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Un appel manqué = une opportunité perdue
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            VOXORA s'assure que chaque appel est pris, filtré et transformé en valeur — automatiquement, 24/7.
          </p>

          {/* Features universelles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aucun appel manqué</h3>
              <p className="text-gray-600">Plus de revenus garantis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingue 24/7</h3>
              <p className="text-gray-600">Image professionnelle renforcée</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plug & Play</h3>
              <p className="text-gray-600">Intégration avec vos outils (POS, CRM, Agenda, WhatsApp)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions par secteur */}
      <section id="fonctionnalites" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              SOLUTIONS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une solution adaptée à <span className="gradient-text">votre secteur</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VOXORA s'adapte parfaitement à votre activité avec des fonctionnalités spécialisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Restauration */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Restauration</CardTitle>
                <CardDescription>Commandes & réservations automatiques</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Upsell vocal intelligent → +15% panier moyen
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Intégration POS + confirmation SMS
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Aucune commande manquée
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Artisans */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Artisans</CardTitle>
                <CardDescription>Appels pris même sur chantier</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Devis notés, interventions planifiées
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    +20% de CA en 3 mois
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Clients satisfaits même en déplacement
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Médical */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Médical</CardTitle>
                <CardDescription>Prise de RDV simple et fluide</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Urgences priorisées intelligemment
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Patients rassurés, secrétaire soulagée
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Disponibilité 24/7 pour les urgences
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Immobilier */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Immobilier</CardTitle>
                <CardDescription>Prospects qualifiés 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Visites programmées automatiquement
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    +30% de rendez-vous confirmés
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Lead qualification automatique
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Agents & VIP */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Agents & VIP</CardTitle>
                <CardDescription>Filtrage intelligent</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Tri automatique (presse, sponsors, urgences)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Confidentialité totale garantie
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sérénité & image professionnelle
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Influenceurs */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Influenceurs & Créateurs</CardTitle>
                <CardDescription>Collaborations qualifiées automatiquement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Fans redirigés vers le bon canal
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ton adapté à l'image personnelle
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    +30% de temps créatif libéré
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fonctionnalités communes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités incluses dans tous les plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Réception et routage intelligent</h3>
                <p className="text-gray-600 text-sm">Chaque appel est analysé et dirigé vers la bonne réponse</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Gestion des RDV</h3>
                <p className="text-gray-600 text-sm">Prise automatique de rendez-vous et commandes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmations SMS/WhatsApp</h3>
                <p className="text-gray-600 text-sm">Notifications automatiques pour rassurer vos clients</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Multilingue 24/7</h3>
                <p className="text-gray-600 text-sm">Disponible dans toutes les langues, jour et nuit</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mic className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Scripts personnalisés</h3>
                <p className="text-gray-600 text-sm">Ton et réponses adaptés à votre marque</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics & intégrations</h3>
                <p className="text-gray-600 text-sm">Connexion avec vos outils (POS, CRM, Agenda)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ils ont choisi VOXORA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-center mb-4 italic">
                  "+20% de revenus en 3 mois grâce à Voxora."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Marc D.</p>
                  <p className="text-sm text-gray-500">Électricien</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-center mb-4 italic">
                  "0 appel manqué et +15% d'upsell."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Sophie L.</p>
                  <p className="text-sm text-gray-500">Bistrot Marcel</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-center mb-4 italic">
                  "Enfin, mes collabs sont triées sans perdre de temps."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Alex M.</p>
                  <p className="text-sm text-gray-500">500K followers</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-center mb-4 italic">
                  "Sérénité totale, aucun appel critique manqué."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Caroline R.</p>
                  <p className="text-sm text-gray-500">Agent artistique</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="tarifs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              NOS TARIFS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {pricingContent.section_title || "Choisissez le bon plan pour vous"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pricingContent.section_subtitle || "Peu importe le type ou la taille de votre business, il y a un plan pour vous."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {(pricingContent.plans || []).map((plan, index) => (
              <Card key={`plan-${index}`} className={`bg-white shadow-lg ${plan.highlighted ? 'shadow-xl border-2 border-blue-500 relative' : ''}`}>
                {plan.badge && plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={`feature-${index}-${featureIndex}`} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.highlighted ? 'gradient-cta text-white' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.button_text}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Calculez votre retour sur investissement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez combien d'argent vous perdez chaque mois et comment VOXORA peut transformer votre business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            ✅ Calculateur de revenus : Utilisez notre formule ROI pour estimer les revenus que vous perdez chaque mois.
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            ✅ Identifiez les fuites : Analysez les appels manqués, heures de pointe et opportunités de vente.
          </div>

          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">
            COMMENCEZ À TRANSFORMER LES APPELS MANQUÉS EN PROFITS DÈS AUJOURD'HUI !
          </h3>

          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
            <Link href="/roi-calculator">
              <Calculator className="w-5 h-5 mr-2" />
              CALCULATEUR DE REVENUS
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Laissez VOXORA travailler pour vous. Commencez aujourd'hui.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ne perdez plus jamais un client. VOXORA s'occupe de vos appels pendant que vous vous concentrez sur votre métier.
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold mr-4">
            <Link href="/login">Essai gratuit</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
            <Link href="/contact">Parler à un expert</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">VOXORA</span>
              </div>
              <p className="text-gray-400 mb-6">
                Assistants vocaux IA pour tous secteurs d'activité, pour une interaction client fluide
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/demo" className="hover:text-white transition-colors">Essayer "VOXORA"</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Intégrations</a></li>
                <li><a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Nous contacter</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-3" />
                  Nous envoyer un email
                </div>
                <p className="text-sm">info@voxora.ai</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contenu, Marketing & Design Web</h3>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 VOXORA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
