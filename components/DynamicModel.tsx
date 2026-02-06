
import React from 'react';
import { ChevronRight, Zap, Target, Route } from 'lucide-react';

interface DynamicModelProps {
  onNavigate: () => void;
}

const serviceCapabilities = [
  {
    icon: <Target className="w-6 h-6 text-[#397bff]" />,
    title: "真實受眾洞察",
    description: "透過 2,000 萬真實數據來定義目標客群，提供實際使用者輪廓和高偏好瀏覽行為分析，協助品牌跳脫主觀想像。"
  },
  {
    icon: <Zap className="w-6 h-6 text-[#397bff]" />,
    title: "即時市場情報",
    description: "50,000+ 網站、150,000 實體據點數據與 605 個產業標籤，精確量化市場與品牌聲量。幫助您立即確認品牌目前地位，並為商務指引戰略方向。"
  },
  {
    icon: <Route className="w-6 h-6 text-[#397bff]" />,
    title: "跨渠道探勘",
    description: "串聯線上線下接觸點，還原消費者從「看見」到「造訪」的完整路徑。辨識各渠道的影響角色與關鍵節點，協助品牌優化媒體配置、門市策略與活動規劃。"
  }
];

const DynamicModel: React.FC<DynamicModelProps> = ({ onNavigate }) => {
  return (
    <section id="capabilities" className="py-32 bg-black relative overflow-hidden scroll-mt-20 border-t border-white/5">
      {/* 背景裝飾：科技感圖形 */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #397bff 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }}>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal-on-scroll">
           <p className="text-[#397bff] font-black tracking-[0.4em] uppercase text-base mb-4">Our Expertise</p>
           <h2 className="text-[32px] font-bold text-white tracking-tight mb-6">核心服務能力</h2>
           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#397bff] to-transparent mx-auto"></div>
        </div>

        <div className="relative flex flex-col gap-10 mb-20">
          {/* 視覺連接虛線 */}
          <div className="absolute left-[47px] top-10 bottom-10 w-px border-l border-dashed border-[#397bff]/30 hidden md:block"></div>

          {serviceCapabilities.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900/10 p-10 md:p-14 rounded-[40px] border border-white/5 transition-all duration-700 hover:border-[#397bff]/40 flex flex-col md:flex-row gap-12 items-start hover:bg-slate-900/20 group reveal-on-scroll reveal-delay-${(idx + 1) * 100}`}
            >
              <div className="relative z-10 shrink-0">
                <div className="w-20 h-20 rounded-3xl bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#397bff]/10 group-hover:border-[#397bff]/50 group-hover:rotate-[15deg] transition-all duration-500">
                  {item.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-[#397bff] text-black font-black flex items-center justify-center text-base shadow-xl">
                  0{idx + 1}
                </div>
              </div>
              
              <div className="space-y-6 flex-grow">
                <h3 className="text-[24px] font-bold text-white tracking-tight group-hover:text-[#397bff] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-slate-200 font-normal leading-relaxed tracking-wider group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center reveal-on-scroll">
          <button 
            onClick={onNavigate}
            className="group relative flex items-center justify-center bg-[#397bff] text-white px-14 py-5 rounded-full font-black text-xl transition-all duration-500 hover:scale-[1.05] shadow-[0_20px_40px_rgba(57,123,255,0.3)] hover:shadow-[0_25px_50px_rgba(57,123,255,0.5)]"
          >
            <span className="relative z-10 whitespace-nowrap uppercase tracking-widest">客製化洞察服務</span>
            <ChevronRight className="ml-4 w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicModel;
