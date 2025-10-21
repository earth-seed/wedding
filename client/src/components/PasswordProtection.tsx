import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CORRECT_PASSWORD = "akyakalove";

export default function PasswordProtection() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("wedding-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("wedding-auth", "true");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // Don't render anything if authenticated
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            {/* Decorative Element */}
            <div className="flex items-center justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="mx-4 text-primary/70 text-2xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
            
            <CardTitle className="text-2xl font-display font-light tracking-wide">
              Welcome to Our Wedding
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground leading-relaxed">
              Please enter the password to access our wedding website and celebration details.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center font-display tracking-wide"
                  autoFocus
                />
                {error && (
                  <p className="text-sm text-destructive text-center animate-fade-in">
                    {error}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wider uppercase text-sm py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enter Site
              </Button>
            </form>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Celebrating Leyla & Bryce • September 24th, 2026
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
