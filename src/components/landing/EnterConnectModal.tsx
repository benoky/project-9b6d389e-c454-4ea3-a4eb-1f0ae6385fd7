import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Zap, CheckCircle2, ChevronDown } from "lucide-react";

// Dummy data structure for future API integration
export interface KepcoDataSummary {
  contractPower: string;
  tariffType: string;
  annualCostRange: string;
  peakIssue: string;
  lastUpdated: string;
}

// Placeholder data that would come from real API
const DUMMY_KEPCO_DATA: KepcoDataSummary = {
  contractPower: "2,500",
  tariffType: "고압A 선택",
  annualCostRange: "15-30",
  peakIssue: "가끔",
  lastUpdated: new Date().toISOString().split("T")[0],
};

interface EnterConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConnect: (data: KepcoDataSummary) => void;
}

export function EnterConnectModal({ open, onOpenChange, onConnect }: EnterConnectModalProps) {
  const [consentChecked, setConsentChecked] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Simulated connection handler - structured for future API integration
  const handleConnect = async () => {
    if (!consentChecked) return;

    setIsConnecting(true);

    try {
      // ============================================
      // TODO: Replace with actual KEPCO EN:TER API call
      // Example:
      // const response = await kepcoApi.connect({
      //   userId: user.id,
      //   consentToken: generateConsentToken(),
      // });
      // const data = await response.json();
      // ============================================

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Return dummy data (replace with real API response)
      const kepcoData = DUMMY_KEPCO_DATA;

      // Reset state and close modal
      setConsentChecked(false);
      setShowDetails(false);
      onConnect(kepcoData);
    } catch (error) {
      console.error("KEPCO connection failed:", error);
      // Handle error state here
    } finally {
      setIsConnecting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!isConnecting) {
      setConsentChecked(false);
      setShowDetails(false);
      onOpenChange(newOpen);
    }
  };

  const stepItems = [
    { label: "간편인증", completed: false },
    { label: "데이터 제공 동의", completed: false },
    { label: "연동 완료", completed: false },
  ];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Zap className="w-5 h-5 text-primary" />
            한전 EN:TER 에너지 마이데이터 연동
          </DialogTitle>
          <DialogDescription className="text-base">
            간편인증 후, 전력 사용량/요금 데이터를 자동으로 불러옵니다.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Visual Step Indicator */}
          <div className="flex items-center justify-between px-2">
            {stepItems.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.completed
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-xs mt-1.5 text-muted-foreground whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
                {index < stepItems.length - 1 && (
                  <div className="w-8 sm:w-12 h-px bg-border mx-1 mt-[-12px]" />
                )}
              </div>
            ))}
          </div>

          {/* Consent Checkbox */}
          <div className="bg-accent/50 rounded-lg p-4 border border-border">
            <div className="flex items-start gap-3">
              <Checkbox
                id="enter-consent"
                checked={consentChecked}
                onCheckedChange={(checked) => setConsentChecked(checked === true)}
                disabled={isConnecting}
              />
              <div className="flex-1">
                <label
                  htmlFor="enter-consent"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  한전 데이터 제공에 동의합니다
                </label>

                {/* Expandable Details */}
                <Collapsible open={showDetails} onOpenChange={setShowDetails}>
                  <CollapsibleTrigger className="flex items-center gap-1 text-xs text-primary hover:underline mt-1.5">
                    제공 항목/기간/목적 자세히 보기
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        showDetails ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3">
                    <div className="text-xs text-muted-foreground space-y-2 bg-background rounded-md p-3 border border-border">
                      <div>
                        <span className="font-medium text-foreground">제공 항목:</span>{" "}
                        전력 사용량, 요금 정보, 계약전력, 요금제, 피크 관리 데이터
                      </div>
                      <div>
                        <span className="font-medium text-foreground">제공 기간:</span>{" "}
                        최근 12개월 데이터
                      </div>
                      <div>
                        <span className="font-medium text-foreground">활용 목적:</span>{" "}
                        전기료 절감 분석 및 맞춤형 솔루션 제안
                      </div>
                      <div>
                        <span className="font-medium text-foreground">보관 기간:</span>{" "}
                        상담 완료 후 1년, 이후 파기
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            * 실제 서비스에서는 한전 EN:TER 간편인증 절차가 진행됩니다.
          </p>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={isConnecting}
            className="w-full sm:w-auto"
          >
            취소
          </Button>
          <Button
            onClick={handleConnect}
            disabled={!consentChecked || isConnecting}
            className="w-full sm:w-auto gap-2"
          >
            {isConnecting ? (
              <>
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                연동 중...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                연동 완료(테스트)
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
