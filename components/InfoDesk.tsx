
import React, { useState } from 'react';
import { Message } from '../types';

export const InfoDesk: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Manual Override engaged. Local terminal active. How can I assist with your inquiry about Nao\'s expertise?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getLocalResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
      return "PRIMARY SYSTEMS: TypeScript, React, Rust, and Go. SECONDARY SYSTEMS: Kubernetes, AWS, and Industrial UI Design.";
    }
    if (q.includes('contact') || q.includes('hire') || q.includes('reach')) {
      return "Direct transmission available via the TERMINAL section at the end of this platform. Frequency: nao@nagashima.io";
    }
    if (q.includes('hello') || q.includes('hi')) {
      return "Greetings. Station Master Concierge at your service. Inquire about ARCHITECTURE, EXPERIENCE, or SHIPMENTS.";
    }
    if (q.includes('project') || q.includes('shipment')) {
      return "Check the TIMETABLE section for active deployments. Currently focusing on High-Fidelity Design Systems and Distributed Kernels.";
    }
    return "Query not recognized in local database. Please inquire about SKILLS, CONTACT, or PROJECTS.";
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate mechanical processing delay
    setTimeout(() => {
      const response = getLocalResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="bg-[#222222] text-[#FAF3E1] p-10 rounded shadow-2xl relative overflow-hidden border-t-8 border-[#FA8112]">
      <div className="absolute top-4 right-6 flex gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#FA8112]/20"></div>
      </div>
      
      <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
        <h3 className="text-[10px] font-black mono tracking-[0.3em] uppercase opacity-60">Local Station Concierge</h3>
      </div>
      
      <div className="h-80 overflow-y-auto mb-8 space-y-6 pr-4 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] p-5 mono text-[11px] leading-relaxed relative ${
              msg.role === 'user' 
                ? 'bg-[#FA8112] text-[#222222] font-black' 
                : 'bg-white/5 text-white/90 border border-white/10'
            }`}>
              {msg.role === 'assistant' && <span className="absolute -top-3 left-0 text-[8px] opacity-40 uppercase">Terminal Output</span>}
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-5 mono text-[9px] animate-pulse uppercase opacity-40">
              Accessing Local Archives...
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="ENTER QUERY (e.g. SKILLS)..."
          className="flex-1 bg-white/5 border border-white/10 p-5 text-[#FAF3E1] mono text-[11px] outline-none focus:border-[#FA8112] transition-colors"
        />
        <button 
          onClick={handleSend}
          className="bg-white/5 hover:bg-[#FA8112] hover:text-[#222222] px-8 py-5 font-black mono text-[11px] transition-all uppercase border border-white/10"
        >
          EXEC
        </button>
      </div>
    </div>
  );
};
