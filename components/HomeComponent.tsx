import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

function HomeComponent() {

  return (
    <div className='flex flex-col items-center justify-center h-full mt-28 p-10 gap-6'>
      <h1 className='text-7xl font-medium font-serif'>Discover, Read, and Share</h1>
      <h1 className='text-7xl font-medium font-serif text-blue-500'>Beautiful Stories</h1>
      <h1 className='w-1/2 text-center text-gray-600 text-xl font-light'>
        Unlock the world's largest eBook library with ReadEnd. From classics to bestsellers, find your next adventure today.
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 mx-auto max-w-xl bg-background rounded-full p-1.5 shadow-md border border-border">
        <div className="flex items-center flex-1 w-full">
          <Search className="ml-3 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search books, authors .."
            className="w-full p-2 outline-none bg-transparent"
          />
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center">
          Explore Books
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        <p>Over 1 million books • 100k+ readers • Free & Premium options</p>
      </div>
    </div>
  );
}

export default HomeComponent;
