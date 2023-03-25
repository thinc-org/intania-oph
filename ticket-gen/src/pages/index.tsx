import Link from "next/link"

import DescribeRoute from "@/components/common/DescribeRoute"

export default function HomePage() {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <main className="bg-red-50 p-6 text-zinc-900">
        <div className="flex min-h-screen flex-col gap-4">
          <h1 className="text-xl font-bold sm:text-6xl">Next.js App</h1>
          <p className="text-lg font-medium">
            Generated using{" "}
            <Link href="https://github.com/betich/next-boilerplate">
              <a target="_blank" rel="noreferrer" className="underline hover:no-underline">
                {"betich's"}
              </a>
            </Link>{" "}
            Next.js boilerplate template
          </p>
        </div>
      </main>
    </DescribeRoute>
  )
}
