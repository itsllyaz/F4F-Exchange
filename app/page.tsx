import Link from "next/link"
import {
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gray-100 blur-3xl opacity-60 -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black shadow-sm">
              <X className="h-5 w-5 text-white" />
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                F4F Exchange
              </h1>
              <p className="text-xs text-gray-500">
                Built for creators on X
              </p>
            </div>
          </div>

          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/twitter`}>
            <Button className="rounded-xl bg-black text-white hover:bg-gray-900">
              <X className="mr-2 h-4 w-4" />
              Sign in with X
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 pb-24 text-center md:pt-32">
          <Badge className="mb-6 rounded-full border border-gray-200 bg-gray-50 px-4 py-1 text-gray-700 hover:bg-gray-100">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Organic growth for X creators
          </Badge>

          <h1 className="max-w-5xl text-5xl font-black tracking-tight text-black md:text-7xl">
            Grow your{" "}
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              X network
            </span>
            <br />
            organically.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Join a curated follow-for-follow network designed for creators,
            indie hackers, and builders growing publicly on X.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/twitter`}>
              <Button
                size="lg"
                className="h-12 rounded-2xl bg-black px-8 text-base text-white shadow-lg hover:bg-gray-900"
              >
                <X className="mr-2 h-5 w-5" />
                Continue with X
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-gray-200 px-8 text-base"
            >
              See How It Works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <Avatar
                    key={item}
                    className="border-2 border-white h-8 w-8"
                  >
                    <AvatarFallback className="bg-gray-200 text-xs">
                      {item}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>

              <span>500+ creators growing together</span>
            </div>

            <div className="hidden h-4 w-px bg-gray-300 md:block" />

            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Real engagement. No bots.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Dashboard */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <div className="h-3 w-3 rounded-full bg-gray-300" />
              </div>

              <Badge className="rounded-full bg-black text-white hover:bg-black">
                Live Exchange Feed
              </Badge>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-2">
              {/* Feed */}
              <div className="space-y-4">
                {[
                  {
                    name: "@buildwithalex",
                    bio: "Indie hacker • SaaS builder",
                  },
                  {
                    name: "@designermaya",
                    bio: "UI/UX designer sharing daily tips",
                  },
                  {
                    name: "@devsam",
                    bio: "Full-stack developer in public",
                  },
                ].map((user, index) => (
                  <Card
                    key={index}
                    className="rounded-2xl border border-gray-100 shadow-none"
                  >
                    <CardContent className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-black text-white">
                            {user.name.charAt(1).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-gray-500">
                            {user.bio}
                          </p>
                        </div>
                      </div>

                      <Button className="rounded-xl bg-black hover:bg-gray-900">
                        Follow
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "New Followers",
                    value: "+128",
                    icon: TrendingUp,
                  },
                  {
                    title: "Mutuals",
                    value: "84",
                    icon: Users,
                  },
                  {
                    title: "Follow Back Rate",
                    value: "92%",
                    icon: UserCheck,
                  },
                  {
                    title: "Daily Matches",
                    value: "240+",
                    icon: Sparkles,
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="rounded-2xl border border-gray-100 bg-gray-50/60 shadow-none"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-gray-100">
                        <stat.icon className="h-5 w-5 text-black" />
                      </div>

                      <p className="text-sm text-gray-500">{stat.title}</p>

                      <h3 className="mt-2 text-3xl font-bold">
                        {stat.value}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 rounded-full bg-white text-black border border-gray-200 hover:bg-white">
              Features
            </Badge>

            <h2 className="text-4xl font-bold tracking-tight">
              Everything you need to grow
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Built for creators who want authentic reach and real audience
              growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fast Twitter Auth",
                desc: "Connect instantly with secure Twitter OAuth authentication.",
                icon: X,
              },
              {
                title: "Real Human Users",
                desc: "No fake engagement. Just genuine creators supporting creators.",
                icon: Users,
              },
              {
                title: "Track Your Growth",
                desc: "Monitor followers, mutuals, and engagement progress over time.",
                icon: TrendingUp,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <Badge className="mb-4 rounded-full bg-gray-100 text-black hover:bg-gray-100">
              How It Works
            </Badge>

            <h2 className="text-4xl font-bold tracking-tight">
              Simple. Fast. Effective.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect Your X Account",
                desc: "Securely sign in using Twitter OAuth in seconds.",
              },
              {
                step: "02",
                title: "Follow Other Creators",
                desc: "Discover relevant people building and sharing online.",
              },
              {
                step: "03",
                title: "Grow Together",
                desc: "Receive mutual follows and expand your audience organically.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-gray-200 p-8"
              >
                <div className="mb-6 text-5xl font-black text-gray-200">
                  {item.step}
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-black px-8 py-16 text-center text-white md:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />

            <Badge className="mb-6 rounded-full bg-white/10 text-white hover:bg-white/10">
              Start Growing Today
            </Badge>

            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Turn your X profile into a growth engine.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Join creators, founders, and builders already growing together
              through F4F Exchange.
            </p>

            <div className="mt-10 flex justify-center">
              <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/twitter`}>
                <Button
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-8 text-base text-black hover:bg-gray-100"
                >
                  <X className="mr-2 h-5 w-5" />
                  Sign in with X
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black">
              <X className="h-4 w-4 text-white" />
            </div>

            <div>
              <p className="font-medium">F4F Exchange</p>
              <p className="text-sm text-gray-500">
                Built in public on X
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
