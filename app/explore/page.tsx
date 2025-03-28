"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";

const allBooks = [
    {
        id: "1",
        title: "The Silent Patient",
        author: "Alex Michaelides",
        coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
        rating: 4.6,
        rentPrice: 2.99,
        category: "Mystery"
    },
    {
        id: "2",
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        rating: 4.8,
        isFree: true,
        category: "Fiction"
    },
    {
        id: "3",
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
        rating: 4.4,
        rentPrice: 3.49,
        category: "Fantasy"
    },
    {
        id: "4",
        title: "Educated",
        author: "Tara Westover",
        coverImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
        rating: 4.7,
        rentPrice: 1.99,
        category: "Biography"
    },
    {
        id: "5",
        title: "The Dutch House",
        author: "Ann Patchett",
        coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        rating: 4.2,
        isFree: true,
        category: "Fiction"
    },
    {
        id: "6",
        title: "Circe",
        author: "Madeline Miller",
        coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        rating: 4.5,
        rentPrice: 2.49,
        category: "Fantasy"
    },
    {
        id: "7",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
        rating: 4.8,
        rentPrice: 3.99,
        category: "Non-Fiction"
    },
    {
        id: "8",
        title: "Becoming",
        author: "Michelle Obama",
        coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
        rating: 4.9,
        isFree: true,
        category: "Biography"
    }
];


const categories = [
  "All",
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Self-Help",
  "Biography",
  "Fantasy",
  "Sci-Fi",
  "Romance"
];

const Explore: React.FC = () => {
  const [books, setBooks] = useState(allBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  useEffect(() => {
    let filtered = allBooks;
    if (searchTerm) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (activeCategory !== "All") {
      filtered = filtered.filter((book) => book.category === activeCategory);
    }
    if (showFreeOnly) {
      filtered = filtered.filter(book => book.isFree);
    }
    setBooks(filtered);
  }, [searchTerm, activeCategory, showFreeOnly]);

  return (
    <>
    <Navbar/>
      <div className="pt-28 pb-10 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Explore Books</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover thousands of books across various genres and authors.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 rounded-xl border border-border bg-card"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 shrink-0">
              <div className="sticky top-24 bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" /> Filters
                </h3>
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
                          activeCategory === category ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Price</h4>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="free-only"
                      checked={showFreeOnly}
                      onChange={() => setShowFreeOnly(!showFreeOnly)}
                      className="rounded border-border text-primary mr-2"
                    />
                    <label htmlFor="free-only" className="text-sm">Free books only</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">
                  {books.length} {books.length === 1 ? 'book' : 'books'} found
                </h2>
              </div>
              {books.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No books found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All");
                      setShowFreeOnly(false);
                    }}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {books.map(book => (
                    <Card key={book.id} {...book} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
        
  );
};

export default Explore;
