"use client";

import {
    Clock,
    ChevronDown,
    Home,
    ClipboardPlus,
    MessageCircle,
    Calendar,
    LayoutTemplate,
    UserCircle,
    Settings,
    Puzzle,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {/* Overlay for mobile */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <section
                className={`
        flex flex-col p-4 gap-4 bg-[#f8f8ff] transition-transform duration-300 z-40
        lg:relative lg:translate-x-0 lg:w-64
        fixed top-0 left-0 h-full w-80 max-w-[90vw]
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
            >
                {/* Taskboard Header */}
                <div className="flex items-center gap-1 cursor-pointer shadow-md p-2 rounded-xl bg-white mt-12 lg:mt-0">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
                    <h2 className="text-lg lg:text-xl font-semibold mr-4">
                        Taskboard
                    </h2>
                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>

                {/* Menu */}
                <div className="shadow-md p-2 bg-white pb-6 rounded-xl">
                    <span className="text-xs text-gray-600">Menu</span>
                    <div className="bg-black text-white pb-2 rounded-lg mt-2 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="flex items-center ml-2 mt-2 p-2">
                            <Home className="w-5 h-5 lg:w-6 lg:h-6 mr-2" />
                            <h2 className="text-sm lg:text-base font-semibold">
                                Home
                            </h2>
                        </div>
                    </div>

                    {[
                        { icon: ClipboardPlus, text: "Board" },
                        { icon: MessageCircle, text: "Chat" },
                        { icon: Calendar, text: "Calendar" },
                        { icon: LayoutTemplate, text: "Template" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center ml-2 mt-2 p-2 cursor-pointer hover:bg-gray-100 hover:transform hover:translate-x-1 transition-all duration-300 rounded-lg relative group"
                        >
                            <div className="absolute left-0 top-0 h-full w-1 bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <item.icon className="w-5 h-5 lg:w-6 lg:h-6 mr-2" />
                            <h2 className="text-sm lg:text-base font-light">
                                {item.text}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Accounts */}
                <div className="shadow-md p-2 bg-white pb-6 rounded-xl">
                    <span className="text-xs text-gray-600">Accounts</span>
                    {[
                        { icon: UserCircle, text: "Account" },
                        { icon: Settings, text: "Settings" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center ml-2 mt-2 p-2 cursor-pointer hover:bg-gray-100 hover:transform hover:translate-x-1 transition-all duration-300 rounded-lg relative group"
                        >
                            <div className="absolute left-0 top-0 h-full w-1 bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <item.icon className="w-5 h-5 lg:w-6 lg:h-6 mr-2" />
                            <h2 className="text-sm lg:text-base font-light">
                                {item.text}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Upgrade */}
                <div className="flex flex-col shadow-md p-4 bg-white pb-6 rounded-xl gap-3">
                    <h4 className="font-semibold text-sm lg:text-base">
                        Upgrade your plan
                    </h4>
                    <span className="text-xs text-gray-600">
                        Upgrade your plan today to unlock a world of enhanced
                        features.
                    </span>
                    <div className="cursor-pointer bg-black text-white p-2 rounded-lg flex justify-center gap-2 items-center hover:scale-105 transition-transform">
                        <Puzzle className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
                        <h4 className="font-semibold text-gray-400 text-sm lg:text-base">
                            See Plans
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}
