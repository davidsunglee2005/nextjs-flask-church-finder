/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yzdNR2buYeS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export default function Home() {
  return (
  <div className="flex flex-col min-h-screen">
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Church Finder</h1>
        <div className="flex items-center">
          <label className="mr-2" htmlFor="location">
            Enter your location:
          </label>
          <Input
            className="bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            id="location"
            placeholder="City or Zip Code"
            type="text"
          />
          <Button className="ml-4 bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200">Search</Button>
        </div>
      </div>
    </header>
    <main className="flex-1 bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Churches in Your Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">First Baptist Church</h3>
              <p className="text-gray-600 mb-2">123 Main St, Anytown USA</p>
              <p className="text-gray-600 mb-2">Sunday Service: 9:00 AM, 11:00 AM</p>
              <p className="text-gray-600 mb-2">Baptist</p>
              <Link className="text-blue-500 hover:underline" href="#">
                Visit Website
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Grace Community Church</h3>
              <p className="text-gray-600 mb-2">456 Oak Rd, Anytown USA</p>
              <p className="text-gray-600 mb-2">Sunday Service: 10:30 AM</p>
              <p className="text-gray-600 mb-2">Non-denominational</p>
              <Link className="text-blue-500 hover:underline" href="#">
                Visit Website
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">St. John's Episcopal Church</h3>
              <p className="text-gray-600 mb-2">789 Elm St, Anytown USA</p>
              <p className="text-gray-600 mb-2">Sunday Service: 8:00 AM, 10:00 AM</p>
              <p className="text-gray-600 mb-2">Episcopal</p>
              <Link className="text-blue-500 hover:underline" href="#">
                Visit Website
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Cornerstone Community Church</h3>
              <p className="text-gray-600 mb-2">321 Pine Rd, Anytown USA</p>
              <p className="text-gray-600 mb-2">Sunday Service: 9:30 AM, 11:00 AM</p>
              <p className="text-gray-600 mb-2">Non-denominational</p>
              <Link className="text-blue-500 hover:underline" href="#">
                Visit Website
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Bethel Assembly of God</h3>
              <p className="text-gray-600 mb-2">654 Oak St, Anytown USA</p>
              <p className="text-gray-600 mb-2">Sunday Service: 10:45 AM</p>
              <p className="text-gray-600 mb-2">Pentecostal</p>
              <Link className="text-blue-500 hover:underline" href="#">
                Visit Website
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Redeemer Lutheran Church</h3>
              <p className="text-gray-600 mb-2">987 Maple Ave, Anytown USA</p>
              <p className="text-gray-600 mb-2">Sunday Service: 8:30 AM, 11:00 AM</p>
              <p className="text-gray-600 mb-2">Lutheran</p>
              <Link className="text-blue-500 hover:underline" href="#">
                Visit Website
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
    <footer className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <p>© 2023 Church Finder. All rights reserved.</p>
        <nav>
          <Link className="text-gray-400 hover:text-white mr-4" href="#">
            About
          </Link>
          <Link className="text-gray-400 hover:text-white mr-4" href="#">
            Contact
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  </div>
  )
}
