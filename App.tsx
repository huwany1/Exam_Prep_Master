import React, { useState, useMemo, useEffect } from 'react';
import { questions } from './data';
import { QuestionCard } from './components/QuestionCard';
import { PomodoroTimer, PomodoroTimerRef } from './components/PomodoroTimer';
import { QuestionType, UserAnswers } from './types';
import { Terminal, BookOpen, Layers, Search, Code2, Star, FileText, SlidersHorizontal, ChevronUp, ChevronDown, Shuffle, BookMarked, RotateCcw, AlertCircle, ArrowUp, Timer, PenLine } from 'lucide-react';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

const App: React.FC = () => {
  // Merge questions from data.ts and data1.ts
  const allQuestions = useMemo(() => [...questions], []);

  // Define filter type to include 'FAVORITES' and 'WRONG'
  const [filter, setFilter] = useState<'ALL' | QuestionType | 'FAVORITES' | 'WRONG'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [showControls, setShowControls] = useState(true);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const timerRef = React.useRef<PomodoroTimerRef>(null);
  
  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('net-quiz-favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Initialize wrong answers from localStorage
  const [wrongQuestions, setWrongQuestions] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('net-quiz-wrong');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Initialize user answers from localStorage
  const [userAnswers, setUserAnswers] = useState<UserAnswers>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('net-quiz-answers');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('net-quiz-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Persist wrong answers
  useEffect(() => {
    localStorage.setItem('net-quiz-wrong', JSON.stringify(wrongQuestions));
  }, [wrongQuestions]);

  // Persist answers
  useEffect(() => {
    localStorage.setItem('net-quiz-answers', JSON.stringify(userAnswers));
  }, [userAnswers]);

  // Handle scroll for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fid => fid !== id) 
        : [...prev, id]
    );
  };

  const handleSelectAnswer = (questionId: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));

    // Auto error logging logic
    const question = allQuestions.find(q => q.id === questionId);
    if (question) {
      // Only auto-track objective questions (Single Choice and True/False)
      const isObjective = question.type === QuestionType.SINGLE_CHOICE || question.type === QuestionType.TRUE_FALSE;
      
      if (isObjective) {
         if (answer !== question.correctAnswer) {
             // Add to wrong list if not already there
             setWrongQuestions(prev => prev.includes(questionId) ? prev : [...prev, questionId]);
         } else {
             // Remove from wrong list if answered correctly
             setWrongQuestions(prev => prev.filter(id => id !== questionId));
         }
      }
    }
  };

  const resetProgress = () => {
    if (window.confirm('确定要清空所有答题进度吗？此操作不可撤销。')) {
      setUserAnswers({});
      setWrongQuestions([]);
    }
  };

  // Base list of questions to filter from - handles shuffling
  const sourceQuestions = useMemo(() => {
    if (isShuffled) {
      return shuffleArray(allQuestions);
    }
    return allQuestions;
  }, [allQuestions, isShuffled]);

  const filteredQuestions = useMemo(() => {
    return sourceQuestions.filter(q => {
      const matchesSearch = q.text.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesType = true;
      if (filter === 'FAVORITES') {
        matchesType = favorites.includes(q.id);
      } else if (filter === 'WRONG') {
        matchesType = wrongQuestions.includes(q.id);
      } else if (filter !== 'ALL') {
        matchesType = q.type === filter;
      }
      
      return matchesType && matchesSearch;
    });
  }, [filter, searchTerm, favorites, wrongQuestions, sourceQuestions]);

  // Calculate progress
  const progressStats = useMemo(() => {
    const totalAnswered = Object.keys(userAnswers).length;
    const totalQuestions = allQuestions.length;
    return {
        answered: totalAnswered,
        total: totalQuestions,
        percentage: Math.round((totalAnswered / totalQuestions) * 100)
    };
  }, [userAnswers, allQuestions]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <Terminal className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">计算机系统基础大师</h1>
              <p className="text-xs text-slate-500 font-medium">
                已答 {progressStats.answered}/{progressStats.total} ({progressStats.percentage}%)
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
                onClick={() => setIsStudyMode(!isStudyMode)}
                className={`p-2 rounded-lg transition-colors ${isStudyMode ? 'bg-amber-100 text-amber-700' : 'text-slate-500 hover:bg-slate-100'}`}
                title={isStudyMode ? "退出背题模式" : "进入背题模式"}
            >
                <BookMarked className="w-5 h-5" />
            </button>
            <button 
                onClick={() => {
                  if (showTimer) {
                    // 如果番茄钟已显示，调用其内部切换逻辑（最小化或关闭）
                    timerRef.current?.handleToggle();
                  } else {
                    // 如果番茄钟未显示，则显示
                    setShowTimer(true);
                  }
                }}
                className={`p-2 rounded-lg transition-colors ${showTimer ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500 hover:bg-slate-100'}`}
                title={showTimer ? "切换番茄钟状态" : "开启番茄钟"}
            >
                <Timer className="w-5 h-5" />
            </button>
             <div className="w-px h-6 bg-slate-200 mx-1"></div>
            <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full hidden sm:block">
               {isShuffled ? '随机顺序' : '默认顺序'}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Intro */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
           <div>
             <h2 className="text-3xl font-bold mb-2">计算机系统基础复习与练习</h2>
             <p className="text-slate-600 max-w-2xl">
               覆盖数据表示、运算器、存储系统、指令系统等核心知识点，快速巩固计算机系统基础。
             </p>
           </div>
           <button 
             onClick={() => setShowControls(!showControls)}
             className="flex items-center px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm"
           >
             <SlidersHorizontal className="w-4 h-4 mr-2" />
             {showControls ? '隐藏筛选工具' : '显示筛选工具'}
             {showControls ? <ChevronUp className="w-4 h-4 ml-2 text-slate-400" /> : <ChevronDown className="w-4 h-4 ml-2 text-slate-400" />}
           </button>
        </div>

        {/* Controls */}
        {showControls && (
          <div className="flex flex-col gap-4 mb-8 sticky top-16 bg-slate-50/95 backdrop-blur py-4 z-10 border-b border-slate-200 sm:border-none animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="搜索题目..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
                </div>
                
                {/* Mode Toggles */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setIsShuffled(!isShuffled)}
                        className={`flex items-center px-4 py-2 rounded-xl border transition-all ${isShuffled ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        title="乱序模式"
                    >
                        <Shuffle className="w-5 h-5 sm:mr-2" />
                        <span className="hidden sm:inline font-medium">乱序</span>
                    </button>
                    
                    <button
                        onClick={resetProgress}
                        className="flex items-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
                        title="重置进度"
                    >
                        <RotateCcw className="w-5 h-5 sm:mr-2" />
                        <span className="hidden sm:inline font-medium">重置</span>
                    </button>
                </div>
            </div>

            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
               <button
                  onClick={() => setFilter('ALL')}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === 'ALL' ? 'bg-indigo-100 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <Layers className="w-4 h-4 mr-2" /> 全部
               </button>
               <button
                  onClick={() => setFilter(QuestionType.SINGLE_CHOICE)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === QuestionType.SINGLE_CHOICE ? 'bg-indigo-100 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <BookOpen className="w-4 h-4 mr-2" /> 选择题
               </button>
               <button
                  onClick={() => setFilter(QuestionType.TRUE_FALSE)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === QuestionType.TRUE_FALSE ? 'bg-indigo-100 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <div className="w-4 h-4 mr-2 border border-current rounded flex items-center justify-center text-[10px]">T</div> 判断题
               </button>
               <button
                  onClick={() => setFilter(QuestionType.FILL_IN_THE_BLANK)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === QuestionType.FILL_IN_THE_BLANK ? 'bg-indigo-100 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <PenLine className="w-4 h-4 mr-2" /> 填空题
               </button>
               <button
                  onClick={() => setFilter(QuestionType.ESSAY)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === QuestionType.ESSAY ? 'bg-indigo-100 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <FileText className="w-4 h-4 mr-2" /> 简答题
               </button>
               <button
                  onClick={() => setFilter(QuestionType.COMPLEX)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === QuestionType.COMPLEX ? 'bg-indigo-100 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <Code2 className="w-4 h-4 mr-2" /> 计算题
               </button>
               <div className="w-px bg-slate-200 mx-1"></div>
               <button
                  onClick={() => setFilter('FAVORITES')}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === 'FAVORITES' ? 'bg-yellow-100 text-yellow-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <Star className={`w-4 h-4 mr-2 ${filter === 'FAVORITES' ? 'fill-yellow-600' : ''}`} /> 我的收藏
                 <span className="ml-2 bg-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded-full">{favorites.length}</span>
               </button>
               <button
                  onClick={() => setFilter('WRONG')}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filter === 'WRONG' ? 'bg-red-100 text-red-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
               >
                 <AlertCircle className={`w-4 h-4 mr-2 ${filter === 'WRONG' ? 'text-red-600' : ''}`} /> 错题本
                 <span className="ml-2 bg-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded-full">{wrongQuestions.length}</span>
               </button>
            </div>
          </div>
        )}
        
        {/* Active Mode Indicators */}
        {(isStudyMode || isShuffled) && (
             <div className="mb-6 flex gap-2 flex-wrap">
                 {isStudyMode && (
                     <div className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center border border-amber-200">
                         <BookMarked className="w-4 h-4 mr-2" /> 背题模式开启
                     </div>
                 )}
                 {isShuffled && (
                     <div className="bg-purple-50 text-purple-800 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center border border-purple-200">
                         <Shuffle className="w-4 h-4 mr-2" /> 题目已乱序
                     </div>
                 )}
             </div>
        )}

        {/* Question List */}
        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map(q => (
              <QuestionCard 
                key={q.id} 
                question={q}
                isFavorite={favorites.includes(q.id)}
                onToggleFavorite={() => toggleFavorite(q.id)}
                userAnswer={userAnswers[q.id]}
                onSelectAnswer={(answer) => handleSelectAnswer(q.id, answer)}
                isStudyMode={isStudyMode}
              />
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500 text-lg">
                  {filter === 'FAVORITES' 
                    ? '您还没有收藏任何题目。点击题目右上角的星星即可收藏。' 
                    : '未找到匹配的题目。'}
                </p>
                <button 
                    onClick={() => {setSearchTerm(''); setFilter('ALL')}}
                    className="mt-4 text-indigo-600 font-medium hover:underline"
                >
                    清除筛选
                </button>
            </div>
          )}
        </div>
      </main>
      
      <footer className="mt-12 py-8 text-center text-slate-400 text-sm">
        <p>© 2026 计算机系统基础复习工具。基于计算机系统基础课程大纲。</p>
      </footer>

      {/* Pomodoro Timer */}
      {showTimer && <PomodoroTimer ref={timerRef} onClose={() => setShowTimer(false)} />}

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50 active:scale-90 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="回到顶部"
        title="回到顶部"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;