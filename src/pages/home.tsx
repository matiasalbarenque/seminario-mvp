import { Footer } from '@/components/footer';
import { RiskServicesChart } from '@/components/home-chart';
import { HomeMonitor } from '@/components/home-monitor';
import { HomeRiskMessage } from '@/components/home-risk-message';
import { HomeUsageRisk } from '@/components/home-usage-risk';
import { HomeWelcomeCard } from '@/components/home-welcome-card';
import { SplashScreen } from '@/components/splashscreen';

export const HomePage = () => (
  <>
    <div className="h-dvh grid grid-rows-[auto,min-content]">
      <section className="flex-1 flex flex-col overflow-auto">
        <HomeMonitor />
        <HomeRiskMessage />
        <HomeUsageRisk />
        <RiskServicesChart />
        <HomeWelcomeCard />
      </section>
      <Footer />
    </div>
    <SplashScreen />
  </>
);
