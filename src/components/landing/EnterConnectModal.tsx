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
import { Zap, Shield, Clock } from "lucide-react";

interface EnterConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConnect: () => void;
}

export function EnterConnectModal({ open, onOpenChange, onConnect }: EnterConnectModalProps) {
  const [consentChecked, setConsentChecked] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    if (!consentChecked) return;
    
    setIsConnecting(true);
    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsConnecting(false);
    setConsentChecked(false);
    onConnect();
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!isConnecting) {
      setConsentChecked(false);
      onOpenChange(newOpen);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            한전 EN:TER 연동
          </DialogTitle>
          <DialogDescription>
            에너지 마이데이터를 통해 전력 사용량과 요금 정보를 자동으로 가져옵니다.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Benefits */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">빠른 분석</p>
                <p className="text-xs text-muted-foreground">
                  수동 입력 없이 최근 12개월 데이터 자동 연동
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">안전한 연동</p>
                <p className="text-xs text-muted-foreground">
                  한전 공식 마이데이터 서비스 사용, 암호화 전송
                </p>
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="bg-accent/50 rounded-lg p-4 border border-border">
            <div className="flex items-start gap-3">
              <Checkbox
                id="enter-consent"
                checked={consentChecked}
                onCheckedChange={(checked) => setConsentChecked(checked === true)}
                disabled={isConnecting}
              />
              <label
                htmlFor="enter-consent"
                className="text-sm text-foreground cursor-pointer leading-relaxed"
              >
                EN:TER 에너지 마이데이터 수집 및 활용에 동의합니다.
                <span className="text-muted-foreground block text-xs mt-1">
                  전력 사용량, 요금, 계약 정보가 조회됩니다.
                </span>
              </label>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            * 실제 연동 시 한전 EN:TER 로그인이 필요합니다. (시뮬레이션)
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
                연동하기
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
