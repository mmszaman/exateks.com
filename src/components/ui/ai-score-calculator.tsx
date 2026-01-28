'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  industry: string;
  employees: string;
  manualProcesses: string[];
  revenue: string;
}

interface Results {
  score: number;
  category: string;
  weeklyHoursLost: { min: number; max: number };
  monthlyCost: { min: number; max: number };
  quickWins: Array<{ task: string; hours: string }>;
  potentialSavings: { min: number; max: number };
  timeRecovered: string;
}

const industries = [
  'Professional Services (Legal, Accounting, Consulting)',
  'Retail/E-commerce',
  'Healthcare/Medical',
  'Manufacturing/Distribution',
  'Hospitality/Food Service',
  'Real Estate',
  'Other Service Business',
];

const employeeCounts = [
  'Just me (Solo)',
  '2-10 employees',
  '11-25 employees',
  '26-50 employees',
  '51-100 employees',
];

const manualProcessOptions = [
  'Data entry & document processing',
  'Customer communications & support',
  'Scheduling & appointment management',
  'Invoicing & payment processing',
  'Inventory or project tracking',
  'Reporting & analytics',
  'Lead qualification & follow-up',
];

const revenueRanges = [
  'Under $50K',
  '$50K - $250K',
  '$250K - $500K',
  '$500K - $1M',
  'Over $1M',
  'Prefer not to say',
];

export function AIScoreCalculator({ isOpen, onClose }: CalculatorProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    employees: '',
    manualProcesses: [],
    revenue: '',
  });
  const [results, setResults] = useState<Results | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const calculateResults = (): Results => {
    const baseHoursPerTask: Record<string, number[]> = {
      'Data entry & document processing': [2, 4],
      'Customer communications & support': [3, 5],
      'Scheduling & appointment management': [2, 3],
      'Invoicing & payment processing': [1, 2],
      'Inventory or project tracking': [3, 5],
      'Reporting & analytics': [2, 4],
      'Lead qualification & follow-up': [3, 6],
    };

    const sizeMultiplier: Record<string, number> = {
      'Just me (Solo)': 1.0,
      '2-10 employees': 1.5,
      '11-25 employees': 2.5,
      '26-50 employees': 4.0,
      '51-100 employees': 6.0,
    };

    const avgHourlyCost: Record<string, number[]> = {
      'Just me (Solo)': [25, 35],
      '2-10 employees': [20, 30],
      '11-25 employees': [22, 32],
      '26-50 employees': [25, 35],
      '51-100 employees': [28, 40],
    };

    // Calculate weekly hours lost
    const multiplier = sizeMultiplier[formData.employees] || 1;
    let minHours = 0;
    let maxHours = 0;

    formData.manualProcesses.forEach((process) => {
      const [min, max] = baseHoursPerTask[process] || [0, 0];
      minHours += min * multiplier;
      maxHours += max * multiplier;
    });

    // Calculate AI Readiness Score
    const manualProcessPenalty = formData.manualProcesses.length * 15;
    const industryPenalty = 5; // Conservative estimate
    const sizeBonus = multiplier > 2 ? 5 : 0;
    const score = Math.max(
      0,
      Math.min(100, 100 - manualProcessPenalty - industryPenalty + sizeBonus)
    );

    // Calculate monthly costs
    const [minCost, maxCost] = avgHourlyCost[formData.employees] || [25, 35];
    const monthlyMinCost = Math.round(minHours * 4.3 * minCost);
    const monthlyMaxCost = Math.round(maxHours * 4.3 * maxCost);

    // Calculate potential savings (50% automation potential)
    const savingsMin = Math.round(monthlyMinCost * 0.5);
    const savingsMax = Math.round(monthlyMaxCost * 0.6);

    // Determine category
    let category = '';
    if (score <= 30) category = 'Early Stage - High Opportunity';
    else if (score <= 60) category = 'Partially Automated - Room to Grow';
    else if (score <= 85) category = 'Advanced - Optimization Mode';
    else category = 'AI-First Operations';

    // Get top 3 quick wins
    const quickWins = formData.manualProcesses.slice(0, 3).map((process) => {
      const [min, max] = baseHoursPerTask[process] || [0, 0];
      return {
        task: process,
        hours: `${Math.round(min * multiplier)}-${Math.round(max * multiplier)} hrs/week`,
      };
    });

    return {
      score,
      category,
      weeklyHoursLost: { min: Math.round(minHours), max: Math.round(maxHours) },
      monthlyCost: { min: monthlyMinCost, max: monthlyMaxCost },
      quickWins,
      potentialSavings: { min: savingsMin, max: savingsMax },
      timeRecovered: `${Math.round(minHours * 0.5)}-${Math.round(maxHours * 0.6)}`,
    };
  };

  const handleSubmit = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const calculatedResults = calculateResults();
      setResults(calculatedResults);
      setIsCalculating(false);
      setShowResults(true);
    }, 2500);
  };

  const handleRestart = () => {
    setStep(1);
    setFormData({
      industry: '',
      employees: '',
      manualProcesses: [],
      revenue: '',
    });
    setResults(null);
    setShowResults(false);
    setIsCalculating(false);
  };

  const handleClose = () => {
    handleRestart();
    onClose();
  };

  const toggleManualProcess = (process: string) => {
    setFormData((prev) => ({
      ...prev,
      manualProcesses: prev.manualProcesses.includes(process)
        ? prev.manualProcesses.filter((p) => p !== process)
        : [...prev.manualProcesses, process],
    }));
  };

  const canProceed = () => {
    if (step === 1) return formData.industry !== '';
    if (step === 2) return formData.employees !== '';
    if (step === 3) return formData.manualProcesses.length > 0;
    return true;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Sticky Header */}
        {!showResults && !isCalculating && (
          <div className="sticky top-0 z-20 border-b border-gray-200 bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-2.5">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">
                  AI Readiness Calculator
                </h2>
                <p className="text-sm text-gray-600">
                  Discover your automation potential in 4 steps
                </p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">Step {step} of 4</p>
          </div>
        )}

        {/* Sticky Action Buttons */}
        <div className="absolute right-4 top-4 z-30 flex gap-2">
          <button
            onClick={handleRestart}
            className="rounded-full bg-white p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-100 hover:text-primary-600"
            title="Restart Calculator"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
          <button
            onClick={handleClose}
            className="rounded-full bg-white p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-100 hover:text-gray-900"
            title="Close Calculator"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Calculating Animation */}
          {isCalculating && (
            <div className="flex min-h-[500px] flex-col items-center justify-center px-8 py-12">
              <div className="mb-8 flex gap-3">
                <div
                  className="animate-bounce rounded-xl bg-primary-100 p-4"
                  style={{ animationDelay: '0ms' }}
                >
                  <Brain className="h-8 w-8 text-primary-600" />
                </div>
                <div
                  className="animate-bounce rounded-xl bg-secondary-100 p-4"
                  style={{ animationDelay: '150ms' }}
                >
                  <Zap className="h-8 w-8 text-secondary-600" />
                </div>
                <div
                  className="animate-bounce rounded-xl bg-tertiary-100 p-4"
                  style={{ animationDelay: '300ms' }}
                >
                  <Sparkles className="h-8 w-8 text-tertiary-600" />
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Analyzing Your Operations...
              </h3>
              <p className="text-gray-600">
                Crunching the numbers to reveal your AI potential
              </p>
            </div>
          )}

          {/* Results */}
          {showResults && results && (
            <div className="px-8 py-8">
              <div className="mb-8 text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-semibold">Analysis Complete!</span>
                </div>

                {/* Score Display */}
                <div className="mx-auto mb-6 max-w-md rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
                  <h3 className="mb-3 text-lg font-semibold text-gray-700">
                    YOUR AI READINESS SCORE
                  </h3>
                  <div className="mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-6xl font-bold text-transparent">
                    {results.score}/100
                  </div>
                  <div className="mb-4 h-3 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000"
                      style={{ width: `${results.score}%` }}
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {results.category}
                  </p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-orange-100 p-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Weekly Hours Lost
                    </h4>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {results.weeklyHoursLost.min}-{results.weeklyHoursLost.max}
                  </p>
                  <p className="text-sm text-gray-600">hours per week</p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-red-100 p-2">
                      <DollarSign className="h-5 w-5 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Monthly Cost
                    </h4>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    ${results.monthlyCost.min.toLocaleString()}-$
                    {results.monthlyCost.max.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">in manual operations</p>
                </div>
              </div>

              {/* Quick Wins */}
              {results.quickWins.length > 0 && (
                <div className="mb-8 rounded-xl bg-gradient-to-br from-primary-50 to-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary-100 p-2">
                      <Target className="h-5 w-5 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Your Quick Wins (Top 3)
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {results.quickWins.map((win, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-lg bg-white p-4"
                      >
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {win.task}
                          </p>
                          <p className="text-sm text-primary-600">
                            Save {win.hours}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Potential Savings */}
              <div className="mb-8 rounded-xl bg-gradient-to-br from-green-50 to-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Potential Monthly Savings with AI
                  </h4>
                </div>
                <div className="mb-3 text-4xl font-bold text-green-600">
                  ${results.potentialSavings.min.toLocaleString()}-$
                  {results.potentialSavings.max.toLocaleString()}
                </div>
                <p className="mb-2 text-gray-700">in labor costs</p>
                <p className="text-lg font-semibold text-gray-900">
                  {results.timeRecovered} hours of recovered time
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get My Custom Automation Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-4 text-xs text-gray-500">
                  *Estimates based on industry benchmarks. Actual results vary
                  by business.
                </p>
              </div>
            </div>
          )}

          {/* Form Steps */}
          {!isCalculating && !showResults && (
            <div className="px-8 py-8">
              {/* Step 1: Industry */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-primary-100 p-2">
                      <Building2 className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      What's your industry?
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {industries.map((industry) => (
                      <button
                        key={industry}
                        onClick={() => setFormData({ ...formData, industry })}
                        className={cn(
                          'w-full rounded-xl border-2 p-4 text-left transition-all hover:border-primary-300 hover:bg-primary-50',
                          formData.industry === industry
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 bg-white'
                        )}
                      >
                        <span className="font-medium text-gray-900">
                          {industry}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Employees */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-secondary-100 p-2">
                      <Users className="h-6 w-6 text-secondary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      How many employees?
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {employeeCounts.map((count) => (
                      <button
                        key={count}
                        onClick={() =>
                          setFormData({ ...formData, employees: count })
                        }
                        className={cn(
                          'w-full rounded-xl border-2 p-4 text-left transition-all hover:border-secondary-300 hover:bg-secondary-50',
                          formData.employees === count
                            ? 'border-secondary-500 bg-secondary-50'
                            : 'border-gray-200 bg-white'
                        )}
                      >
                        <span className="font-medium text-gray-900">
                          {count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Manual Processes */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-tertiary-100 p-2">
                      <Zap className="h-6 w-6 text-tertiary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Which processes are still manual?
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-600">Select all that apply</p>
                  <div className="space-y-3">
                    {manualProcessOptions.map((process) => (
                      <button
                        key={process}
                        onClick={() => toggleManualProcess(process)}
                        className={cn(
                          'w-full rounded-xl border-2 p-4 text-left transition-all hover:border-tertiary-300 hover:bg-tertiary-50',
                          formData.manualProcesses.includes(process)
                            ? 'border-tertiary-500 bg-tertiary-50'
                            : 'border-gray-200 bg-white'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              'flex h-5 w-5 items-center justify-center rounded border-2',
                              formData.manualProcesses.includes(process)
                                ? 'border-tertiary-500 bg-tertiary-500'
                                : 'border-gray-300'
                            )}
                          >
                            {formData.manualProcesses.includes(process) && (
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <span className="font-medium text-gray-900">
                            {process}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Revenue (Optional) */}
              {step === 4 && (
                <div className="animate-fade-in">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-highlight-100 p-2">
                      <DollarSign className="h-6 w-6 text-highlight-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Estimated monthly revenue?
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-gray-500">
                    (Optional - helps us provide better estimates)
                  </p>
                  <div className="space-y-3">
                    {revenueRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() =>
                          setFormData({ ...formData, revenue: range })
                        }
                        className={cn(
                          'w-full rounded-xl border-2 p-4 text-left transition-all hover:border-highlight-300 hover:bg-highlight-50',
                          formData.revenue === range
                            ? 'border-highlight-500 bg-highlight-50'
                            : 'border-gray-200 bg-white'
                        )}
                      >
                        <span className="font-medium text-gray-900">
                          {range}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex gap-4">
                {step > 1 && (
                  <Button
                    variant="outline-subtle"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                {step < 4 ? (
                  <Button
                    variant="gradient"
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className="flex-1"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                ) : (
                  <Button
                    variant="gradient"
                    onClick={handleSubmit}
                    className="flex-1"
                  >
                    Calculate My Score
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
