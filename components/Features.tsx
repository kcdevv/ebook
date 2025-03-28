import React from 'react'
import Card from './Card'
import Link from 'next/link';
import { ArrowRight, BookOpen, Search, User } from "lucide-react";

const featuredBooks = [
    {
        id: "1",
        title: "The Silent Patient",
        author: "Alex Michaelides",
        coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
        rating: 4.6,
        rentPrice: 2.99
    },
    {
        id: "2",
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        rating: 4.8,
        isFree: true
    },
    {
        id: "3",
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
        rating: 4.4,
        rentPrice: 3.49
    },
    {
        id: "4",
        title: "Educated",
        author: "Tara Westover",
        coverImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
        rating: 4.7,
        rentPrice: 1.99
    },
    {
        id: "5",
        title: "The Dutch House",
        author: "Ann Patchett",
        coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        rating: 4.2,
        isFree: true
    }
];

function Features() {
    return (
        <div>
            <div className=" bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-serif font-semibold">Featured Books</h2>
                        <div>
                            <Link
                                href="/explore"
                                className="text-primary flex items-center text-sm font-medium hover:underline"
                            >
                                View all <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {featuredBooks.map((book) => (
                            <div key={book.id}>
                                <Card {...book} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features
