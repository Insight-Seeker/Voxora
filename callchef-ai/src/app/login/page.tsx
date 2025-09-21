"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [restaurant, setRestaurant] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#2C3E50] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">VOXORA</span>
          </Link>
        </div>

        <Card className="bg-white shadow-xl border-0">
          <CardHeader className="text-center space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {isLogin ? "Connexion" : "Créer un compte"}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {isLogin
                ? "Accédez à votre dashboard CallChef.ai"
                : "Commencez votre essai gratuit de 14 jours"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jean Dupont"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="restaurant" className="text-sm font-medium text-gray-700">Nom du restaurant</Label>
                    <Input
                      id="restaurant"
                      type="text"
                      placeholder="Chez Marcel"
                      value={restaurant}
                      onChange={(e) => setRestaurant(e.target.value)}
                      className="border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                      required
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="vous@restaurant.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                    required
                  />
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <Link href="#" className="text-sm text-[#4b0d63] hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
              )}

              <Button type="submit" className="w-full bg-[#4b0d63] hover:bg-[#3d0a52] text-white">
                {isLogin ? "Se connecter" : "Créer mon compte"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
                {" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#4b0d63] hover:underline font-medium"
                >
                  {isLogin ? "Créer un compte" : "Se connecter"}
                </button>
              </p>
            </div>

            {!isLogin && (
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  En créant un compte, vous acceptez nos{" "}
                  <Link href="#" className="text-[#4b0d63] hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et notre{" "}
                  <Link href="#" className="text-[#4b0d63] hover:underline">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
