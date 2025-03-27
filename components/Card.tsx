import Link from 'next/link';
import React from 'react';


interface BookCardProps {
    id: string;
    title: string;
    author: string;
    coverImage: string;
    rating: number;
    rentPrice?: number;
    isFree?: boolean;
  }
  
  const BookCard: React.FC<BookCardProps> = ({
    id,
    title,
    author,
    coverImage,
    rating,
    rentPrice,
    isFree = false
  }) =>{
  return (
    <div className="group relative overflow-hidden hover-shadow rounded-xl bg-card">
      <Link href={`/book/${id}`}>
        <div className="relative aspect-[2/3] overflow-hidden rounded-t-xl">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-all"
          />
          <div className="absolute top-2 right-2">
            {isFree ? (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                Free
              </span>
            ) : rentPrice ? (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                ${rentPrice.toFixed(2)}
              </span>
            ) : null}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-lg mb-1 line-clamp-1 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">{author}</p>

          <div className="flex items-center">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({rating.toFixed(1)})
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
