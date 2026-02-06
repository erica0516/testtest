
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Loader2, ArrowUpRight } from 'lucide-react';

const insightData: Record<string, { title: string; description: string; imageId: string }> = {
  '1': {
    title: "有錢人資產配置行為變化",
    description: "透過 2025 與 2024 的趨勢數據比對，我們發現高端消費族群在資產配置與 brand 忠誠度上呈現明顯的位移，特別是在跨產業的連動行為中展現了全新的消費邏輯。",
    imageId: "14wNqoDuWRNqHtPGZbrajP2eAxA773XKe"
  },
  '2': {
    title: "美妝保養產業消費者流動",
    description: "分析顯示美妝市場正從單一品牌忠誠轉向功效型與純淨美容的混合行為，消費者在不同價格帶間的流動速率較往年提升，反映出更理性的「成分導向」採購決策。",
    imageId: "1HlIatg3stHrgc-eJci6K12bb0hp0-cCa"
  },
  '3': {
    title: "綜合娛樂消費趨勢分析",
    description: "數位娛樂與實體體驗的界線逐漸模糊，消費者更傾向於投資在具備「社交貨幣」價值的限時性活動，透過行為軌跡可見消費者對於沉浸式內容的停留時間顯著增加。",
    imageId: "1KaVQuLdKaAeUIosx9c63hhxq3-1Cj_jd"
  },
  '4': {
    title: "母嬰寵物市場的新型態需求",
    description: "擬人化消費成為主流，寵物生活品質的提升帶動了相關健康管理與高端食品市場的快速成長。數據顯示，「精緻照護」已成為橫跨母嬰與寵物兩大族群的共同消費核心。",
    imageId: "1Xs7ISP83MIv8Xk1uCHdqvFV_bqVZS4W8"
  },
  '5': {
    title: "金融投資意向與行為洞察",
    description: "投資市場呈現顯著的「年輕化」與「去中心化」趨勢。透過數據觀察，我們發現不同年齡層在避險資產選擇與數位資產配置上的權重分配出現劇烈分歧，反映出對傳統金融體系截然不同的信賴模型。",
    imageId: "1HlIatg3stHrgc-eJci6K12bb0hp0-cCa"
  }
};

const tags = [
  { id: '1', label: '高端消費' },
  { id: '2', label: '美妝保養' },
  { id: '3', label: '綜合娛樂' },
  { id: '4', label: '母嬰寵物' },
  { id: '5', label: '金融投資' },
];

const InsightHighlight: React.FC = () => {
  const [activeTag, setActiveTag] = useState('1');
  const [isImageLoading, setIsImageLoading] = useState(true);
  const loadedImages = useRef<Set<string>>(new Set());

  const currentInsight = insightData[activeTag] || insightData['1'];
  const imageUrl = `https://lh3.googleusercontent.com/d/${currentInsight.imageId}`;

  useEffect(() => {
    tags.forEach(tag => {
      const img = new Image();
      const url = `https://lh3.googleusercontent.com/d/${insightData[tag.id].imageId}`;
      img.src = url;
      img.onload = () => {
        loadedImages.current.add(url);
      };
    });
  }, []);

  useEffect(() => {
    setIsImageLoading(true);
  }, [activeTag]);

  const scrollToDownload = () => {
    const element = document.getElementById('download-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="insights" className="py-32 bg-black relative scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 置中標題區塊 */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-8 reveal-on-scroll">
          <div className="space-y-4 flex flex-col items-center">
             <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#397bff]/50 hidden md:block"></div>
                <p className="text-[#397bff] font-black tracking-[0.4em] uppercase text-base">Analysis Hub</p>
                <div className="w-8 h-[1px] bg-[#397bff]/50 hidden md:block"></div>
             </div>
             <h2 className="text-[28px] md:text-[40px] font-bold text-white tracking-tight leading-tight px-4 max-w-2xl">
                關鍵產業洞察亮點
             </h2>
             <div className="w-12 h-1 bg-[#397bff] rounded-full shadow-[0_0_15px_rgba(57,123,255,0.5)]"></div>
          </div>
          
          {/* 響應式標籤按鈕列 */}
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 p-2 bg-white/5 rounded-3xl border border-white/10 max-w-full">
              {tags.map(tag => (
                <button
                  key={tag.id}
                  onClick={() => setActiveTag(tag.id)}
                  className={`px-4 py-2.5 md:px-7 md:py-3 rounded-2xl text-base font-bold transition-all duration-300 whitespace-nowrap border ${
                    activeTag === tag.id 
                    ? 'bg-[#397bff] border-[#397bff] text-white shadow-[0_0_20px_rgba(57,123,255,0.4)]' 
                    : 'bg-transparent border-transparent text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 科技儀表板容器 */}
        <div className="relative group reveal-on-scroll">
          {/* 四角裝飾邊框 */}
          <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-[#397bff]/40 pointer-events-none group-hover:border-[#397bff] transition-colors"></div>
          <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-[#397bff]/40 pointer-events-none group-hover:border-[#397bff] transition-colors"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden bg-slate-900/20 border border-white/10 rounded-2xl md:rounded-[32px] backdrop-blur-3xl">
            <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
               {/* 背景文字裝飾 */}
               <div className="absolute -bottom-10 -left-10 text-9xl font-black text-white/[0.03] select-none pointer-events-none hidden md:block">DATA</div>
               
               <div className="relative z-10">
                <h3 className="text-[22px] md:text-[26px] font-bold mb-6 md:mb-8 text-white leading-tight tracking-wide border-l-4 border-[#397bff] pl-6">
                  {currentInsight.title}
                </h3>
                <p className="text-slate-200 text-base leading-relaxed mb-10 md:mb-12 font-normal">
                  {currentInsight.description}
                </p>
                <button 
                  onClick={scrollToDownload}
                  className="flex items-center gap-3 text-white font-bold group w-fit px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-[#397bff]/50 transition-all"
                >
                  <span className="text-base">查看深度數據</span>
                  <ArrowUpRight className="w-4 h-4 text-[#397bff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
               </div>
            </div>
            
            <div className="lg:col-span-8 bg-black/40 flex items-center justify-center p-4 md:p-8 lg:p-16 relative">
              <div className="relative w-full aspect-video flex items-center justify-center rounded-xl overflow-hidden shadow-inner bg-black/20">
                {isImageLoading && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-md">
                    <Loader2 className="w-10 h-10 text-[#397bff] animate-spin" />
                  </div>
                )}
                <img 
                  src={imageUrl} 
                  alt={currentInsight.title} 
                  onLoad={() => setIsImageLoading(false)}
                  className={`max-w-full max-h-full object-contain transition-all duration-1000 transform p-4 md:p-0 ${
                    isImageLoading ? 'opacity-0 scale-95 blur-2xl' : 'opacity-100 scale-100 blur-0'
                  }`}
                />
                
                {/* 科技掃描線動畫 */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#397bff]/5 to-transparent h-[200%] -top-full group-hover:animate-[scan_3s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col items-center reveal-on-scroll reveal-delay-200">
          <button 
            onClick={scrollToDownload}
            className="group relative flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 md:px-14 md:py-5 rounded-full font-black text-base md:text-lg transition-all duration-500 hover:bg-white hover:text-black shadow-xl"
          >
            <span className="relative z-10 whitespace-nowrap">獲取完整產業洞察</span>
            <ChevronRight className="ml-3 w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}} />
    </section>
  );
};

export default InsightHighlight;
