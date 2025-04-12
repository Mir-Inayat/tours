"use client";

import { useState, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Map,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  FileInput
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  );
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  
  // Sample notification counts (would come from API in real app)
  const [notificationCounts, setNotificationCounts] = useState({
    comments: 3,
    submissions: 5
  });
  
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
          <SidebarLink 
            href="/admin/dashboard" 
            icon={<LayoutDashboard className="h-5 w-5" />} 
            isActive={pathname === "/admin/dashboard"}
          >
            Dashboard
          </SidebarLink>
          
          <SidebarLink 
            href="/admin/tours" 
            icon={<Map className="h-5 w-5" />} 
            isActive={pathname === "/admin/tours"}
          >
            Tours
          </SidebarLink>
          
          <SidebarLink 
            href="/admin/blogs" 
            icon={<FileText className="h-5 w-5" />} 
            isActive={pathname === "/admin/blogs"}
          >
            Blogs
          </SidebarLink>
          
          <SidebarLink 
            href="/admin/comments" 
            icon={<MessageSquare className="h-5 w-5" />} 
            isActive={pathname === "/admin/comments"}
            badgeCount={notificationCounts.comments}
          >
            Comments
          </SidebarLink>
          
          <SidebarLink 
            href="/admin/submissions" 
            icon={<FileInput className="h-5 w-5" />} 
            isActive={pathname === "/admin/submissions"}
            badgeCount={notificationCounts.submissions}
          >
            Form Submissions
          </SidebarLink>
          
          <button
            onClick={() => router.push('/api/auth/signout')}
            className="flex items-center w-full px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Log Out</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              {pathname === "/admin/dashboard" && "Dashboard"}
              {pathname === "/admin/tours" && "Tours Management"}
              {pathname === "/admin/blogs" && "Blog Management"}
              {pathname === "/admin/comments" && "Comments Management"}
              {pathname === "/admin/submissions" && "Form Submissions"}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
                {(notificationCounts.comments + notificationCounts.submissions) > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white h-5 w-5 flex items-center justify-center p-0 rounded-full">
                    {notificationCounts.comments + notificationCounts.submissions}
                  </Badge>
                )}
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  {session?.user?.name?.charAt(0) || 'A'}
                </div>
                <span className="ml-2 text-gray-700">{session?.user?.name || 'Admin'}</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ href, icon, children, isActive, badgeCount = 0 }) {
  return (
    <Link href={href} className={`flex items-center w-full px-6 py-3 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} transition-colors`}>
      <span className="mr-3">{icon}</span>
      <span>{children}</span>
      {badgeCount > 0 && (
        <Badge className="ml-auto bg-red-500 text-white">
          {badgeCount}
        </Badge>
      )}
    </Link>
  );
}