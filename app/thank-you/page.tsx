import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>

        <h1 className="text-3xl font-bold">Thank You!</h1>

        <p className="text-gray-600 dark:text-gray-400">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>

        <Link href="/">
          <Button className="mt-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </main>
  )
}
