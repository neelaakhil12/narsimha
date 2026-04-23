"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Namaste! I'm your StayVago assistant. How can I help you find your perfect stay today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Mock AI Response
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: "assistant", 
        content: "That sounds like a wonderful plan! I recommend checking out 'The Grand Palace' in Udaipur for a truly royal experience. Would you like me to show you the availability?" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-96 rounded-3xl bg-background border shadow-2xl overflow-hidden flex flex-col h-[420px] sm:h-[500px]"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center text-primary">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                   <h4 className="font-bold">AI Concierge</h4>
                   <p className="text-[10px] text-white/70 uppercase font-bold tracking-widest leading-none">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white rounded-full" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={cn(
                    "flex items-start gap-3",
                    m.role === "user" ? "flex-row-reverse" : ""
                  )}>
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                      m.role === "assistant" ? "bg-primary/5 text-primary" : "bg-accent/20 text-accent font-bold text-xs"
                    )}>
                      {m.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div className={cn(
                      "p-3 px-4 rounded-2xl text-sm max-w-[80%]",
                      m.role === "assistant" 
                        ? "bg-primary/5 text-primary rounded-tl-none" 
                        : "bg-primary text-white rounded-tr-none"
                    )}>
                      {m.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t bg-primary/5">
              <div className="flex items-center space-x-2">
                <Input 
                  placeholder="Type your message..." 
                  className="rounded-full bg-background border-none focus-visible:ring-primary/20" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button size="icon" className="rounded-full shrink-0 h-10 w-10" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-transform bg-primary"
      >
        {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
      </Button>
    </div>
  );
}
