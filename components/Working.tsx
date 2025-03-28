import { BookOpen, Search, User } from "lucide-react";
import React from 'react'

function Working() {
    return (
        <div>
            <div className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-semibold mb-4">How eBook Works</h2>
                        <p className="text-muted-foreground">Discover, read, and share books with our simple three-step process.</p>
                    </div>

                    <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Discover",
                                description: "Find your next favorite read from our vast collection of eBooks across all genres.",
                                icon: (
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                                        <Search className="h-8 w-8 text-blue-500" />
                                    </div>
                                )
                            },
                            {
                                title: "Read",
                                description: "Enjoy a seamless reading experience with our intuitive eBook reader on any device.",
                                icon: (
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                                        <BookOpen className="h-8 w-8 text-blue-500" />
                                    </div>
                                )
                            },
                            {
                                title: "Share",
                                description: "List your own books for others to enjoy or rent premium titles at affordable prices.",
                                icon: (
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                                        <User className="h-8 w-8 text-blue-500" />
                                    </div>
                                )
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-card border border-border">
                                {step.icon}
                                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working


