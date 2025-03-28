
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
    { id: "fiction", name: "Fiction", count: 4528, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9", description: "Dive into worlds of imagination with our fiction collection, featuring classics and contemporary bestsellers." },
    { id: "fantasy", name: "Fantasy", count: 2764, image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334", description: "Explore magical realms and epic adventures in our fantasy section." },
    { id: "mystery", name: "Mystery", count: 1985, image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", description: "Unravel clues and solve cases with our collection of mystery and thriller novels." },
    { id: "self-help", name: "Self-Help", count: 1563, image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", description: "Transform your life with our curated selection of motivational and personal development books." },
    { id: "science-fiction", name: "Science Fiction", count: 2142, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765", description: "Journey to the stars and beyond with our science fiction titles exploring future worlds and technologies." },
    { id: "biography", name: "Biography", count: 1437, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f", description: "Discover the lives of extraordinary people through our compelling biography collection." },
    { id: "romance", name: "Romance", count: 3175, image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954", description: "Fall in love with our selection of romance novels, from historical to contemporary." },
    { id: "history", name: "History", count: 1820, image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1", description: "Travel back in time with our history books exploring different eras and civilizations." }
];

const Categories: React.FC = () => {


    return (
        <>
            <div className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {categories.map((category) => (
                            <div key={category.id} className="overflow-hidden rounded-xl relative group">
                                <Link href={`/category/${category.id}`}>
                                    <div className="relative aspect-[3/2]">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-white text-xl font-medium mb-1">{category.name}</h3>
                                            <p className="text-white/80 text-sm">{category.count.toLocaleString()} books</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                                    <Link href={`/category/${category.id}`} className="flex items-center gap-2">
                                        View Category <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>


    );
};

export default Categories;
