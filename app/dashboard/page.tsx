"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  ImageIcon,
  Briefcase,
  Users,
  Settings,
  Bell,
  ChevronDown,
  Plus,
  Upload,
  Edit,
  Trash,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "Blog Posts", href: "/dashboard/posts" },
  { icon: ImageIcon, label: "Media", href: "/dashboard/media" },
  { icon: Briefcase, label: "Portfolio", href: "/dashboard/portfolio" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

const quickStats = [
  { title: "Total Posts", value: "124", change: "+4%" },
  { title: "Page Views", value: "45.2K", change: "+11%" },
  { title: "New Subscribers", value: "524", change: "+7%" },
  { title: "Avg. Read Time", value: "3:12", change: "-2%" },
]

const recentPosts = [
  { id: 1, title: "Introducing Our New Cloud Solution", author: "Jane Doe", date: "2023-06-15", status: "Published" },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    author: "John Smith",
    date: "2023-06-10",
    status: "Draft",
  },
  {
    id: 3,
    title: "10 Tips for Scaling Your SaaS Product",
    author: "Alice Johnson",
    date: "2023-06-05",
    status: "Published",
  },
]

const draftPosts = [
  { id: 4, title: "Optimizing Database Performance", author: "Bob Wilson", lastEdited: "2023-06-14" },
  { id: 5, title: "The Rise of Low-Code Platforms", author: "Emma Brown", lastEdited: "2023-06-12" },
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [bannerImage, setBannerImage] = useState<string | null>(null)
  const router = useRouter()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setBannerImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePortfolioUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Mock function to handle portfolio update
    console.log("Portfolio updated")
    // In a real application, you would send this data to your backend
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-2xl font-semibold">TechCo</span>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {sidebarItems.map((item, index) => (
            <Link key={index} href={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <LayoutDashboard className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>Jane Doe</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Blog Posts */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Blog Posts</CardTitle>
                  <Button onClick={() => router.push("/dashboard/posts/new")}>
                    <Plus className="mr-2 h-4 w-4" /> New Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell>{post.status}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="mr-2">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Banner Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Update Banner Image</CardTitle>
                <CardDescription>Upload a new banner image for your blog</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center w-full">
                  <Label
                    htmlFor="banner-upload"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    {bannerImage ? (
                      <Image
                        src={bannerImage || "/placeholder.svg"}
                        alt="Banner preview"
                        width={300}
                        height={200}
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    )}
                    <Input
                      id="banner-upload"
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            {/* Portfolio Update */}
            <Card>
              <CardHeader>
                <CardTitle>Update Portfolio</CardTitle>
                <CardDescription>Add or edit your latest software projects</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePortfolioUpdate}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="project-name">Project Name</Label>
                      <Input id="project-name" placeholder="Enter project name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="project-description">Description</Label>
                      <Input id="project-description" placeholder="Brief project description" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="project-url">Project URL</Label>
                      <Input id="project-url" placeholder="https://..." />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Add Project</Button>
              </CardFooter>
            </Card>

            {/* Draft Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Draft Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Last Edited</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {draftPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>{post.lastEdited}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="mr-2">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

