"use client";

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { User, BookOpen, Settings } from "lucide-react";
import { useToast } from "@/components/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Book enthusiast and avid reader",
    location: "New York, USA",
    website: "https://johndoe.com"
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    darkMode: false,
    newsletterSubscription: true
  });

  const { toast } = useToast();

  const handleProfileUpdate = (e: any) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated"
    });
  };

  const handlePreferencesUpdate = (e: any) => {
    e.preventDefault();
    toast({
      title: "Preferences updated",
      description: "Your preferences have been successfully updated"
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500 mx-auto flex items-center justify-center mb-2">
                <User size={40} className="text-white" />
              </div>
              <CardTitle>{profile.name}</CardTitle>
              <CardDescription>{profile.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-center">
                <p className="text-sm text-muted-foreground">{profile.bio}</p>
                <p className="text-sm flex items-center justify-center gap-1">
                  <BookOpen size={16} /> 12 Books Published
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">View Public Profile</Button>
            </CardFooter>
          </Card>

          {/* Profile Settings Tabs */}
          <div className="md:col-span-2">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <User size={16} /> Personal Info
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center gap-2">
                  <Settings size={16} /> Preferences
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate}>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <Input
                              id="name"
                              value={profile.name}
                              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input
                              id="email"
                              type="email"
                              value={profile.email}
                              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                          <Input
                            id="bio"
                            value={profile.bio}
                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="location" className="text-sm font-medium">Location</label>
                            <Input
                              id="location"
                              value={profile.location}
                              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="website" className="text-sm font-medium">Website</label>
                            <Input
                              id="website"
                              value={profile.website}
                              onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full md:w-auto">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Preferences</CardTitle>
                    <CardDescription>Manage your account settings and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePreferencesUpdate}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-muted-foreground">Receive email notifications about your account</p>
                          </div>
                          <div className="flex items-center h-6">
                            <input
                              id="emailNotifications"
                              type="checkbox"
                              className="w-4 h-4 rounded"
                              checked={preferences.emailNotifications}
                              onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Dark Mode</p>
                            <p className="text-sm text-muted-foreground">Toggle dark mode for the application</p>
                          </div>
                          <div className="flex items-center h-6">
                            <input
                              id="darkMode"
                              type="checkbox"
                              className="w-4 h-4 rounded"
                              checked={preferences.darkMode}
                              onChange={(e) => setPreferences({ ...preferences, darkMode: e.target.checked })}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Newsletter Subscription</p>
                            <p className="text-sm text-muted-foreground">Receive our monthly newsletter</p>
                          </div>
                          <div className="flex items-center h-6">
                            <input
                              id="newsletterSubscription"
                              type="checkbox"
                              className="w-4 h-4 rounded"
                              checked={preferences.newsletterSubscription}
                              onChange={(e) => setPreferences({ ...preferences, newsletterSubscription: e.target.checked })}
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full md:w-auto">
                          Save Preferences
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Profile;