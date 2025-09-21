"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Play, Pause, Volume2, Clock, CheckCircle, Star, ArrowLeft, QrCode, Users, MessageSquare, Zap, Euro, Smartphone, Send, Utensils, Settings } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [callStep, setCallStep] = useState("phone"); // phone, calling, conversation, result
  const [callScenario, setCallScenario] = useState<string | null>(null);

  const handlePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
      setTimeout(() => setPlayingIndex(null), 3000);
    }
  };

  const startCall = (scenario: string) => {
    setCallScenario(scenario);
    setCallStep("calling");

    setTimeout(() => {
      setCallStep("conversation");
    }, 2000);
  };

  const endCall = () => {
    setCallStep("result");
    setTimeout(() => {
      alert(`✅ ${callScenario} terminé avec succès!\n📱 Actions transmises à l'équipe`);
    }, 500);
  };

  const resetQRDemo = () => {
    setSelectedTable(null);
    setCallStep("phone");
    setCallScenario(null);
  };

  const demoCallsOrder = [
    {
      id: 1,
      title: "Commande Pizza - Client Satisfait",
      duration: "2m 34s",
      scenario: "Commande classique",
      transcript: "Bonjour ! Je voudrais commander une pizza margherita grande et une salade César. C'est pour une livraison au 12 rue de la Paix. Merci !",
      aiResponse: "Parfait ! Je note une pizza margherita grande à 14€ et une salade César à 9€. Soit un total de 23€. Votre commande sera livrée au 12 rue de la Paix dans 25-30 minutes. Puis-je avoir votre numéro de téléphone pour confirmer ?",
      sentiment: "positif",
      outcome: "Commande validée",
      revenue: "23€"
    },
    {
      id: 2,
      title: "Service à Table - Commande Rapide",
      duration: "1m 15s",
      scenario: "QR Service",
      transcript: "Table 3, on voudrait deux cafés et l'addition s'il vous plaît.",
      aiResponse: "Parfait ! Je note deux cafés pour la table 3. Je prépare votre addition et vous envoie le lien de paiement par SMS. Merci pour votre visite !",
      sentiment: "positif",
      outcome: "Paiement instantané",
      revenue: "6€"
    },
    {
      id: 3,
      title: "Réservation - Modification Acceptée",
      duration: "1m 45s",
      scenario: "Gestion réservation",
      transcript: "Bonjour, j'ai une réservation ce soir pour 4 personnes. Est-ce qu'on peut passer à 6 personnes ?",
      aiResponse: "Bien sûr ! Je retrouve votre réservation. Je peux vous proposer une table pour 6 personnes au même horaire. C'est parfait, c'est modifié !",
      sentiment: "positif",
      outcome: "Réservation mise à jour",
      revenue: "~120€"
    }
  ];

  interface CallData {
    id: number;
    title: string;
    duration: string;
    scenario: string;
    transcript: string;
    aiResponse: string;
    sentiment: string;
    outcome: string;
    revenue: string;
  }

  const CallCard = ({ call, index }: { call: CallData, index: number }) => (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg mb-2 flex items-center">
              {call.scenario === "QR Service" && <QrCode className="w-5 h-5 mr-2 text-blue-500" />}
              {call.scenario === "Commande classique" && <Phone className="w-5 h-5 mr-2 text-green-500" />}
              {call.scenario === "Gestion réservation" && <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />}
              {call.title}
            </CardTitle>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {call.duration}
              </div>
              <Badge variant="outline" className="text-xs">
                {call.scenario}
              </Badge>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => handlePlay(index)}
            className={`${playingIndex === index ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          >
            {playingIndex === index ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-gray-700 mb-2">🎤 Client :</h4>
            <p className="text-sm bg-gray-50 p-3 rounded-lg italic">"{call.transcript}"</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-blue-700 mb-2">🤖 CallChef.ai :</h4>
            <p className="text-sm bg-blue-50 p-3 rounded-lg">{call.aiResponse}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                call.sentiment === 'positif' ? 'bg-green-100 text-green-800' :
                call.sentiment === 'neutre' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {call.sentiment === 'positif' ? '😊 Positif' :
                 call.sentiment === 'neutre' ? '😐 Neutre' : '😟 Négatif'}
              </div>
              <span className="text-sm text-gray-600">{call.outcome}</span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600 flex items-center">
                <Euro className="w-4 h-4 mr-1" />
                {call.revenue}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link href="/#fonctionnalites" className="text-gray-600 hover:text-gray-900 transition-colors">Fonctionnalités</Link>
            <Link href="/#tarifs" className="text-gray-600 hover:text-gray-900 transition-colors">Tarifs</Link>
            <Link href="/demo" className="text-gray-600 hover:text-gray-900 transition-colors">Démo</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
              <Settings className="w-4 h-4 mr-1" />
              Admin
            </Link>
            <Button variant="outline" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button className="bg-[#4b0d63] hover:bg-[#3d0a52] text-white" asChild>
              <Link href="/login">Essayer gratuitement</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Découvrez CallChef.ai en action
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Testez nos assistants vocaux et QR en conditions réelles.
            Voyez comment nous transformons chaque interaction en revenus.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Volume2 className="w-5 h-5 mr-2" />
              Démos interactives
            </div>
            <div className="flex items-center">
              <QrCode className="w-5 h-5 mr-2" />
              Service à table
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              IA GPT-4o
            </div>
          </div>
        </div>
      </section>

      {/* Démos Tabs */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="calls" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="calls" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Appels vocaux
              </TabsTrigger>
              <TabsTrigger value="qr" className="flex items-center">
                <QrCode className="w-4 h-4 mr-2" />
                Service à table
              </TabsTrigger>
            </TabsList>

            {/* Appels vocaux */}
            <TabsContent value="calls">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Assistant vocal <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">IA</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Écoutez comment CallChef.ai gère les appels avec intelligence et génère des revenus instantanément.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {demoCallsOrder.map((call, index) => (
                  <CallCard key={call.id} call={call} index={index} />
                ))}
              </div>
            </TabsContent>

            {/* Service à table QR */}
            <TabsContent value="qr">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Service à table <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">QR</span>
                  <Badge className="ml-3 bg-green-100 text-green-800">NOUVEAUTÉ</Badge>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Le client scanne le QR → appelle l'IA vocale → l'IA sait qu'il est à sa table et peut tout gérer.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="shadow-xl border-2 border-blue-200">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b">
                    <CardTitle className="flex items-center text-2xl">
                      <Smartphone className="w-6 h-6 mr-3 text-blue-600" />
                      Simulation Service à Table QR
                    </CardTitle>
                    <CardDescription>
                      Workflow : QR Code → Numéro de téléphone → Appel IA vocal contextualisé
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">

                    {/* Sélection table */}
                    {!selectedTable && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">1. Le client scanne le QR de sa table</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {[1, 2, 3, 4].map((table) => (
                            <Button
                              key={table}
                              variant="outline"
                              className="h-20 flex flex-col items-center justify-center hover:bg-blue-50 hover:border-blue-300"
                              onClick={() => setSelectedTable(table)}
                            >
                              <QrCode className="w-6 h-6 mb-2 text-blue-600" />
                              Table {table}
                            </Button>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 text-center">
                          Choisissez une table pour simuler le scan QR
                        </p>
                      </div>
                    )}

                    {/* Numéro de téléphone */}
                    {selectedTable && callStep === "phone" && (
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-semibold">2. QR scanné → Numéro affiché sur l'écran</h3>
                          <Badge variant="outline" className="text-blue-600 border-blue-300">
                            Table {selectedTable}
                          </Badge>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
                          <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <h4 className="text-xl font-bold text-blue-800 mb-2">☎️ Appelez-nous</h4>
                          <div className="text-3xl font-bold text-blue-600 mb-4">
                            01 84 60 75 42
                          </div>
                          <p className="text-sm text-gray-600 mb-6">
                            Notre IA vocale CallChef.ai sait que vous appelez depuis la <strong>Table {selectedTable}</strong>
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <Button
                            onClick={() => startCall("Commande")}
                            className="bg-green-600 hover:bg-green-700 text-white h-16 flex flex-col items-center justify-center"
                          >
                            <Utensils className="w-6 h-6 mb-1" />
                            <span>Commander</span>
                          </Button>
                          <Button
                            onClick={() => startCall("Questions menu")}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white h-16 flex flex-col items-center justify-center"
                          >
                            <MessageSquare className="w-6 h-6 mb-1" />
                            <span>Questions</span>
                          </Button>
                          <Button
                            onClick={() => startCall("Appeler serveur")}
                            className="bg-purple-600 hover:bg-purple-700 text-white h-16 flex flex-col items-center justify-center"
                          >
                            <Users className="w-6 h-6 mb-1" />
                            <span>Service</span>
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <div className="font-medium text-green-800">Commander</div>
                            <div className="text-gray-600">Plats, boissons, desserts, addition</div>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded-lg text-center">
                            <div className="font-medium text-yellow-800">Questions</div>
                            <div className="text-gray-600">Allergènes, horaires, recommandations</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-center">
                            <div className="font-medium text-purple-800">Service</div>
                            <div className="text-gray-600">Appeler serveur, plus de serviettes</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* En cours d'appel */}
                    {callStep === "calling" && (
                      <div className="text-center py-12">
                        <div className="animate-pulse w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-green-600 mb-2">Appel en cours...</h3>
                        <p className="text-gray-600">Connexion avec CallChef.ai depuis la Table {selectedTable}</p>
                      </div>
                    )}

                    {/* Conversation */}
                    {callStep === "conversation" && (
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-semibold">3. Conversation avec l'IA vocale</h3>
                          <Badge className="bg-green-100 text-green-800">🎤 En ligne</Badge>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="font-semibold text-blue-800 mb-2">🤖 CallChef.ai :</div>
                            <p className="text-blue-700">
                              "Bonjour ! Je vois que vous appelez depuis la Table {selectedTable}.
                              Je suis là pour vous aider avec votre {callScenario?.toLowerCase()}. Que puis-je faire pour vous ?"
                            </p>
                          </div>

                          {callScenario === "Commande" && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="font-semibold text-gray-800 mb-2">👤 Client :</div>
                              <p className="text-gray-700">
                                "On voudrait deux cafés, un tiramisu et l'addition s'il vous plaît."
                              </p>
                            </div>
                          )}

                          {callScenario === "Questions menu" && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="font-semibold text-gray-800 mb-2">👤 Client :</div>
                              <p className="text-gray-700">
                                "Est-ce que vos pâtes carbonara contiennent du gluten ? Ma fille est coeliaque."
                              </p>
                            </div>
                          )}

                          {callScenario === "Appeler serveur" && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="font-semibold text-gray-800 mb-2">👤 Client :</div>
                              <p className="text-gray-700">
                                "Pouvez-vous nous apporter des serviettes supplémentaires s'il vous plaît ?"
                              </p>
                            </div>
                          )}

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="font-semibold text-blue-800 mb-2">🤖 CallChef.ai :</div>
                            <p className="text-blue-700">
                              {callScenario === "Commande" && "Parfait ! Je note deux cafés à 4€ et un tiramisu à 7€. Total : 11€. Je transmets votre commande en cuisine et vous envoie le lien de paiement par SMS."}
                              {callScenario === "Questions menu" && "Nos pâtes carbonara classiques contiennent du gluten, mais nous avons des pâtes sans gluten disponibles. Je peux vous préparer une carbonara sans gluten sur demande !"}
                              {callScenario === "Appeler serveur" && "Bien sûr ! J'informe immédiatement l'équipe. Un serveur vous apportera des serviettes dans moins de 2 minutes. Y a-t-il autre chose ?"}
                            </p>
                          </div>
                        </div>

                        <Button
                          onClick={endCall}
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Terminer l'appel
                        </Button>
                      </div>
                    )}

                    {/* Résultat */}
                    {callStep === "result" && (
                      <div className="text-center py-12">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-green-800 mb-2">{callScenario} traité avec succès !</h3>
                        <p className="text-gray-600 mb-6">
                          ✅ {callScenario} traité depuis Table {selectedTable}<br />
                          📱 Actions transmises à l'équipe<br />
                          💰 {callScenario === "Commande" ? "Revenus sécurisés : 11€" : "Service optimisé"}
                        </p>

                        <div className="flex gap-3 justify-center">
                          <Button
                            onClick={resetQRDemo}
                            variant="outline"
                          >
                            Nouveau test
                          </Button>

                          <Button asChild>
                            <Link href="/dashboard">
                              Voir le dashboard
                            </Link>
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Résultats en temps réel</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">149€</div>
              <p className="text-white/80">Revenus générés aujourd'hui</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <p className="text-white/80">Commandes traitées</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-white/80">Appels répondus</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <p className="text-white/80">Satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Convaincu ? Lancez votre essai maintenant
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Intégrez CallChef.ai dans votre restaurant en 24h.
            Essai gratuit 30 jours, configuration comprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/login">
                <Zap className="w-5 h-5 mr-2" />
                Essai gratuit 30 jours
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <Send className="w-5 h-5 mr-2" />
                Demander une présentation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
