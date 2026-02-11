import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-haarlem.jpg";

type AuthView = "login" | "register" | "reset";

export default function AuthPage() {
  const [view, setView] = useState<AuthView>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Welcome back!", description: "You have been logged in successfully." });
      navigate("/");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { display_name: displayName },
      },
    });
    setLoading(false);
    if (error) {
      toast({ title: "Registration failed", description: error.message, variant: "destructive" });
    } else {
      toast({
        title: "Check your email",
        description: "We've sent you a confirmation link to verify your account.",
      });
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth`,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Reset failed", description: error.message, variant: "destructive" });
    } else {
      toast({
        title: "Email sent",
        description: "Check your inbox for the password reset link.",
      });
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const switchView = (newView: AuthView) => {
    clearForm();
    setView(newView);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={heroImage}
          alt="Historic Haarlem"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-burgundy-dark/80" />
        <div className="relative z-10 flex flex-col justify-center p-16 text-primary-foreground">
          <h1 className="font-display text-5xl font-bold mb-4 leading-tight">
            Welcome to<br />
            <span className="text-accent">Haarlem</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-md leading-relaxed">
            Sign in to explore everything Haarlem has to offer — from stories and history to restaurants, dance, and jazz.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-12 h-px bg-accent" />
            <span className="font-body text-sm uppercase tracking-widest text-accent">The City of Haarlem</span>
          </div>
        </div>
      </div>

      {/* Right side - forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 pt-24 lg:pt-6 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Back to home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          {/* Header */}
          <div className="space-y-2">
            <h2 className="font-display text-3xl font-bold text-foreground">
              {view === "login" && "Welcome Back"}
              {view === "register" && "Create Account"}
              {view === "reset" && "Reset Password"}
            </h2>
            <p className="font-body text-muted-foreground">
              {view === "login" && "Sign in to access all of Haarlem's features."}
              {view === "register" && "Join us and start exploring everything Haarlem has to offer."}
              {view === "reset" && "Enter your email and we'll send you a reset link."}
            </p>
          </div>

          {/* Login Form */}
          {view === "login" && (
            <form onSubmit={handleLogin} className="space-y-5 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body text-sm">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="font-body text-sm">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => switchView("reset")}
                  className="text-sm font-body text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Signing in…" : "Sign In"}
              </Button>
              <p className="text-center text-sm font-body text-muted-foreground">
                Don't have an account?{" "}
                <button type="button" onClick={() => switchView("register")} className="text-primary font-medium hover:underline">
                  Create one
                </button>
              </p>
            </form>
          )}

          {/* Register Form */}
          {view === "register" && (
            <form onSubmit={handleRegister} className="space-y-5 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="displayName" className="font-body text-sm">Display Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="displayName"
                    type="text"
                    placeholder="Your name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="regEmail" className="font-body text-sm">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="regEmail"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="regPassword" className="font-body text-sm">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="regPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Creating account…" : "Create Account"}
              </Button>
              <p className="text-center text-sm font-body text-muted-foreground">
                Already have an account?{" "}
                <button type="button" onClick={() => switchView("login")} className="text-primary font-medium hover:underline">
                  Sign in
                </button>
              </p>
            </form>
          )}

          {/* Reset Password Form */}
          {view === "reset" && (
            <form onSubmit={handleReset} className="space-y-5 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="resetEmail" className="font-body text-sm">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="resetEmail"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Sending…" : "Send Reset Link"}
              </Button>
              <p className="text-center text-sm font-body text-muted-foreground">
                Remember your password?{" "}
                <button type="button" onClick={() => switchView("login")} className="text-primary font-medium hover:underline">
                  Sign in
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
