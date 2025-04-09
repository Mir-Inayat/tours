"use client";

import Link from "next/link";
import { useSession, SessionProvider } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    if (status === "unauthenticated" && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [status, router, pathname]);

  if (pathname === "/admin/login") {
    return children;
  }

  if (status === "loading") {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!session && pathname !== "/admin/login") {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <Link href="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/admin/tours" className="block px-4 py-2 hover:bg-gray-700">
            Manage Tours
          </Link>
          <Link href="/admin/blogs" className="block px-4 py-2 hover:bg-gray-700">
            Manage Blogs
          </Link>
          <Link href="/admin/testimonials" className="block px-4 py-2 hover:bg-gray-700">
            Testimonials
          </Link>
          <Link href="/admin/settings" className="block px-4 py-2 hover:bg-gray-700">
            Settings
          </Link>
          <Link href="/admin/comments" className="block px-4 py-2 hover:bg-gray-700">
            Manage Comments
          </Link>
          <Button 
            variant="ghost" 
            className="w-full justify-start px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
          >
            Logout
          </Button>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        <header className="bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Yashika Tour & Travels Admin</h1>
            <div className="flex items-center gap-4">
              <span>Welcome, {session?.user?.name}</span>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  );
}