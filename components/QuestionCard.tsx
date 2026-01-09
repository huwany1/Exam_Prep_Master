import React, { useState } from 'react';
import { Question, QuestionType } from '../types';
import { CheckCircle2, XCircle, HelpCircle, Eye, ChevronUp, Star, FileText } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  userAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  isStudyMode: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  isFavorite, 
  onToggleFavorite,
  userAnswer,
  onSelectAnswer,
  isStudyMode
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  
  const isAnswered = userAnswer !== undefined;
  
  // 决定是否显示解析：背题模式强制显示，或者用户手动展开，或者答错自动展开（逻辑在点击时触发）
  const isExplanationVisible = isStudyMode || showExplanation;

    const handleSelect = (optionKey: string) => {
    if (isAnswered && question.type !== QuestionType.COMPLEX && question.type !== QuestionType.ESSAY) return;
    
    onSelectAnswer(optionKey);
    
    // Auto show explanation if wrong or for complex types (unless it's a choice question disguised as complex)
    const isChoiceQuestion = question.options && question.options.length > 0;
    if ((question.type === QuestionType.COMPLEX && !isChoiceQuestion) || question.type === QuestionType.ESSAY || optionKey !== question.correctAnswer) {
      setShowExplanation(true);
    }
  };

  const renderSingleChoice = () => (
    <div className="space-y-3 mt-4">
      {question.options?.map((option, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        let btnClass = "w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between group active:scale-[0.99] ";
        
        // 背题模式或已答题模式下的样式逻辑
        if (isStudyMode) {
           if (letter === question.correctAnswer) {
             btnClass += "border-green-500 bg-green-50 text-green-800";
           } else {
             btnClass += "border-slate-100 text-slate-400 opacity-60";
           }
        } else if (!isAnswered) {
          btnClass += "border-slate-200 hover:border-indigo-400 hover:bg-slate-50";
        } else {
          if (letter === question.correctAnswer) {
            btnClass += "border-green-500 bg-green-50 text-green-800";
          } else if (userAnswer === letter) {
            btnClass += "border-red-500 bg-red-50 text-red-800";
          } else {
            btnClass += "border-slate-100 text-slate-400 opacity-60";
          }
        }

        return (
          <button
            key={index}
            onClick={() => !isStudyMode && handleSelect(letter)}
            disabled={isAnswered || isStudyMode}
            className={btnClass}
          >
            <span className="flex items-center">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm font-bold ${
                isStudyMode && letter === question.correctAnswer ? 'bg-green-200 text-green-800' :
                isAnswered && letter === question.correctAnswer ? 'bg-green-200 text-green-800' : 
                isAnswered && userAnswer === letter ? 'bg-red-200 text-red-800' : 'bg-slate-200 text-slate-600'
              }`}>
                {letter}
              </span>
              {option}
            </span>
            {(isAnswered || isStudyMode) && letter === question.correctAnswer && <CheckCircle2 className="w-5 h-5 text-green-600" />}
            {isAnswered && userAnswer === letter && letter !== question.correctAnswer && <XCircle className="w-5 h-5 text-red-600" />}
          </button>
        );
      })}
    </div>
  );

  const renderTrueFalse = () => (
    <div className="flex gap-3 sm:gap-4 mt-4">
      {['T', 'F'].map((option) => {
        const label = option === 'T' ? '正确 (√)' : '错误 (×)';
        let btnClass = "flex-1 p-4 sm:p-6 rounded-xl border-2 font-semibold text-lg transition-all flex flex-col items-center justify-center gap-2 active:scale-95 ";
        
        if (isStudyMode) {
            if (option === question.correctAnswer) {
                btnClass += "border-green-500 bg-green-100 text-green-800 ring-2 ring-green-200";
            } else {
                btnClass += "border-slate-100 opacity-50";
            }
        } else if (!isAnswered) {
          btnClass += option === 'T' 
            ? "border-slate-200 hover:border-green-400 hover:text-green-600 hover:bg-green-50" 
            : "border-slate-200 hover:border-red-400 hover:text-red-600 hover:bg-red-50";
        } else {
          if (option === question.correctAnswer) {
             btnClass += "border-green-500 bg-green-100 text-green-800 ring-2 ring-green-200";
          } else if (userAnswer === option) {
             btnClass += "border-red-500 bg-red-100 text-red-800";
          } else {
             btnClass += "border-slate-100 opacity-50";
          }
        }

        return (
          <button
            key={option}
            onClick={() => !isStudyMode && handleSelect(option)}
            disabled={isAnswered || isStudyMode}
            className={btnClass}
          >
            {option === 'T' ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            {label}
          </button>
        );
      })}
    </div>
  );

  const renderComplexContent = () => (
    question.complexContent ? (
      <div 
        className="mb-4 prose prose-sm max-w-none text-slate-700 bg-slate-100 p-4 rounded-lg overflow-x-auto mt-4"
        dangerouslySetInnerHTML={{ __html: question.complexContent }}
      />
    ) : null
  );

  const renderEssayButton = () => (
    !isStudyMode && (question.type === QuestionType.COMPLEX || question.type === QuestionType.ESSAY) ? (
      <div className="mt-4">
        <button
            onClick={() => {
                handleSelect('VIEWED');
                setShowExplanation(!showExplanation);
            }}
            className="flex items-center justify-center w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm"
        >
            {isExplanationVisible ? (
                <>
                    <ChevronUp className="w-5 h-5 mr-2" /> 隐藏答案
                </>
            ) : (
                <>
                    <Eye className="w-5 h-5 mr-2" /> 查看答案
                </>
            )}
        </button>
      </div>
    ) : null
  );

  const renderToggleExplanation = () => {
    // Only show for Single Choice and True/False after answering
    // In Study Mode, we don't need this button as explanation is always shown (or we can keep it to toggle off?)
    // Let's hide it in study mode to reduce clutter, since it's auto-shown
    if (isStudyMode) return null;

    if (!isAnswered || (question.type !== QuestionType.SINGLE_CHOICE && question.type !== QuestionType.TRUE_FALSE)) {
        return null;
    }

    return (
        <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center justify-center w-full mt-4 py-2 px-4 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg font-medium transition-colors text-sm border border-slate-200"
        >
            {isExplanationVisible ? (
                <>
                    <ChevronUp className="w-4 h-4 mr-2" /> 隐藏解析
                </>
            ) : (
                <>
                    <Eye className="w-4 h-4 mr-2" /> {userAnswer === question.correctAnswer ? '查看解析' : '显示解析'}
                </>
            )}
        </button>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6 transition-all hover:shadow-md relative">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
            第 {question.id} 题
          </span>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${
                question.type === QuestionType.COMPLEX ? 'text-purple-600' : 
                question.type === QuestionType.ESSAY ? 'text-blue-600' : 'text-slate-400'
            }`}>
                {question.type === QuestionType.SINGLE_CHOICE ? '单项选择题' : 
                question.type === QuestionType.TRUE_FALSE ? '判断题' : 
                question.type === QuestionType.ESSAY ? '简答题' : '综合分析题'}
            </span>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite();
                }}
                className="text-slate-300 hover:text-yellow-400 focus:outline-none transition-colors"
                title={isFavorite ? "取消收藏" : "添加收藏"}
            >
                <Star 
                    className={`w-6 h-6 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'hover:scale-110 transition-transform'}`} 
                />
            </button>
          </div>
        </div>
        
        <h3 className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed mb-6 pr-2">
          {question.text}
        </h3>

        {renderComplexContent()}
        {(question.type === QuestionType.SINGLE_CHOICE || (question.type === QuestionType.COMPLEX && question.options && question.options.length > 0)) && renderSingleChoice()}
        {question.type === QuestionType.TRUE_FALSE && renderTrueFalse()}
        {renderEssayButton()}
        
        {renderToggleExplanation()}

      </div>

      {/* Explanation Section */}
      {isExplanationVisible && (
        <div className="bg-slate-50 border-t border-slate-100 p-6 sm:p-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-3 text-indigo-700 font-semibold">
            {question.type === QuestionType.ESSAY ? <FileText className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
            <span>{question.type === QuestionType.ESSAY ? '参考答案' : '答案与解析'}</span>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600">
            {question.correctAnswer && (
                <p className="font-bold text-slate-900 mb-2">
                    正确答案: <span className="text-indigo-600">{question.correctAnswer === 'T' ? '正确 (T)' : question.correctAnswer === 'F' ? '错误 (F)' : question.correctAnswer}</span>
                </p>
            )}
            <div dangerouslySetInnerHTML={{ __html: question.explanation }} />
          </div>
        </div>
      )}
    </div>
  );
};